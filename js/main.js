
$(document).ready(function() {

	/* dropdown */
	$('.dropdown-toggle').dropdown();

	/* jquery stickem init
	$('.body').stickem(); */

	/* localscroll */
	$('.sub-nav').localScroll({
		offset: -75,
		duration:1500
	});

	/* Navigation Sticky */
	
	//Calculate the height of <header>
    //Use outerHeight() instead of height() if have padding
    var topBarHeight = $('#top-bar').outerHeight();
    var headerHeight = $('#header').outerHeight();
    var totalHeight = headerHeight + topBarHeight;

    // when scroll
    $(window).scroll(function(){

        //if scrolled down more than the header's height
        if ($(window).scrollTop() > totalHeight){

            // if yes, add "fixed" class to the <nav>
            // add padding top to the #content (value is same as the height of the nav)
            $('#nav-wrapper').addClass('fixed').css('top','0').next().css('padding-top','0px');
        } else {

            // when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('#nav-wrapper').removeClass('fixed').next().css('padding-top','0');
        }
    });

});
