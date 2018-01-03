// excuting code until DOM assets have been loaded
$(function() {

  //when read more link is clicked
  $('.readmore a').on('click', function(e) {
	e.preventDefault();

	//text in <p> to slide down
	$('#show-this-on-click').slideDown();

	//show read less link
	$('.readless').show();

	//hide read more link
	$('.readmore').hide();
  });

  //when read less link is clicked
  $('.readless a').on('click', function(e) {
	e.preventDefault();

	//text in <p> to slide up
	$('#show-this-on-click').slideUp();

	//hide read less link
	$('.readless').hide();

	//show read more link
	$('.readmore').show(500);
  });	

  //when learn more link is clicked
  $('a.learnmore').on('click', function(e) {
	e.preventDefault();

	//slide down span
	$('#learnmoretext').slideDown();

	//hide learn more link
	$('a.learnmore').hide();
  });

});