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
        $("<div></div>").addClass("col-sm-3 new-button").appendTo(".new-item");
        $("<button>edit</button>").appendTo(".new-button");
		//rest form 
        
        //remove new classes
        $('.col-sm-3').removeClass("new-checkbox");
        $('.col-sm-3').removeClass("new-button");
        $('.row').removeClass("new-item");

		$('form')[0].reset();
	})
		
	// if ($('.add-items').hasClass('show')) {
	// 	$('#add-more').hide();
	// }

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

	var kids = ($('input:checked').parent());
	var sib = (kids.prevAll());
	sib.children().css('text-decoration', 'line-through');
});