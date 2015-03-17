$(document).ready(function(){
	$('input[type=checkbox]').prop('checked', false);
	
		

	

	// if ($('.cleaning').find(".item-container").){
	//     $('.cleaning').hide();
	//     $('.cleaning').prev().hide();
	// }
	$('#item-form').submit(function(event){
		event.preventDefault();
		//find proper list group
		var item = $('#item-add').val();
		var group = $('#item-group').val();
		var comment = $('#comment').val();
        
        
		
		  //add new div row 
		 $('<div></div').addClass("new-item row item-container").appendTo('.' + group);
		 //add new item
		 $("<div><p>" + item + "</p></div>").addClass("col-sm-4").appendTo(".new-item");
		//add new comment
		$("<div><p>" + comment + "</p></div>").addClass("col-sm-4").appendTo(".new-item");

		//add new checkbox
		$("<div></div>").addClass("col-sm-4 new-checkbox").appendTo(".new-item");

		$("<label>have</label>").attr("for", "have-item").appendTo(".new-checkbox");

        $("<input>").attr("type", "checkbox").attr("name", "have-item").attr("id" , "have-item").appendTo(".new-checkbox");

        if($("." + group).children(".item-container").length != 0 ){
        	$("." + group).show();
        }
        //add new edit button
        //$("<div></div>").addClass("col-sm-3 new-button").appendTo(".new-item");
        //$("<button>edit</button>").appendTo(".new-button");
		
        
        //remove new classes
        $('.col-sm-4').removeClass("new-checkbox");
        $('.col-sm-4').removeClass("new-button");
        $('.row').removeClass("new-item");
        //reset form
		$('form')[0].reset();
	})
		
	


	//toggle form
	$('#done').click(function(event){
		event.preventDefault();
		$('.add-items').slideUp();
		$('.add-items').removeClass('show');
		$('#add-more').show();
	})

	$('#add-more').click(function(event){
		event.preventDefault();
		$('.add-items').slideDown();
		$('.add-items').addClass('show');
		$('#add-more').hide();
		$("html, body").animate({ scrollTop: 0 }, "slow");

	})

	//cross out items if have checked
	
	$('#list').on('click', '.item-container', function(){	
		
		if($(this).hasClass('checked')) {

			$(this).find('input').prop('checked', false);
			$(this).removeClass('checked');
			
		}
		else {
			$(this).find('input').prop('checked', true);
			$(this).addClass('checked');
			
			}
		
	})
	
		
	
	
});