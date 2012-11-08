
$(document).ready(function() {

    // add js class to body if javascript enabled
    $('body').addClass('js');

    /* Videos */
    $("#ESEE").fitVids();


    /* Backstretch */



    /* Flexslider */
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        touch: true
    });

    /* Flexslider */
    $('#gallery').flexslider({
        animation: "fade",
        slideshow: false,
        touch: true,
        manualControls: ".flex-ctrl li"
    });

    /* Jquery Stickem */
    //$('body').stickem();

    /* TopBar Menu dropdown */
    var $menu = $('#univ-nav'),
    $menulink = $('.menu-link');

    $menulink.click(function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });

    /* Video Screencap Click function */
    $('#ESEE .screencap').click(function() {
        $(this).fadeOut(1000);
        $('#ESEE iframe').attr('src', 'http://www.youtube.com/embed/rRVOh6W4YPk?rel=0&autoplay=1');
        return false;
    });


	/* localscroll */
	$('.sub-nav').localScroll({
		offset: -98,
		duration:1200
	});


    /* Navigation Sticky */
    
    //Calculate the height of <header>
    //Use outerHeight() instead of height() if have padding
    var topBarHeight = $('#top-bar').outerHeight();
    var headerHeight = $('#header').outerHeight();
    var navHeight = $('#division-nav').outerHeight();
    var totalHeight = headerHeight + navHeight + topBarHeight;

    // when scroll
    $(window).scroll(function(){

        //if scrolled down more than the header's height
        if ($(window).scrollTop() > totalHeight){

            // if yes, add "fixed" class to the <nav>
            // add padding top to the #content (value is same as the height of the nav)
            $('#nav-wrapper').addClass('fixed').css('top','0').next().addClass('padding-top');
        } else {

            // when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('#nav-wrapper').removeClass('fixed').next().removeClass('padding-top');
        }
    });

});
