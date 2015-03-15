$(document).ready(function(){

	$('#item-form').submit(function(event){
		event.preventDefault();
		alert("form submit")
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