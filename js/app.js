$(document).ready(function(){

	$('#item-form').submit(function(event){
		event.preventDefault();
		//find proper list group
		var item = $('#item-add').val();
		var group = $('#item-group').val();
		var comment = $('#comment').val();

		
		  //add new div row 
		 $('<div></div').addClass("new-item row").appendTo('.' + group);
		 //add new item
		 $("<div><p>" + item + "</p></div>").addClass("col-sm-3").appendTo(".new-item");
		//add new comment
		$("<div><p>" + comment + "</p></div>").addClass("col-sm-3").appendTo(".new-item");

		//add new checkbox
		$("<div></div>").addClass("col-sm-3 new-checkbox").appendTo(".new-item");

		$("<label>have</label>").attr("for", "have-item").appendTo(".new-checkbox");

        $("<input>").attr("type", "checkbox").attr("name", "have-item").attr("id" , "have-item").appendTo(".new-checkbox");

        //add new edit button
        //$("<div></div>").addClass("col-sm-3 new-button").appendTo(".new-item");
        //$("<button>edit</button>").appendTo(".new-button");
		
        
        //remove new classes
        $('.col-sm-3').removeClass("new-checkbox");
        $('.col-sm-3').removeClass("new-button");
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

	})

	//cross out items if have checked
	$('input:checkbox').click(function(){
		var kids = ($('input:checked').parent());
		 var sib = (kids.prevAll());

		
		if($(this).is('checked')) {
			$(this).removeAttr('checked');
			//sib.children().css('text-decoration', 'none');
			sib.children().removeClass('have-item');
		}
		else {
			$(this).attr('checked');
			//sib.children().css('text-decoration', 'line-through');
		}   sib.children().addClass('have-item');
		
	})
	
		
	
	
});