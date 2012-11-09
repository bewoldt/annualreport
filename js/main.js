
$(document).ready(function() {

    // add js class to body if javascript enabled
    $('body').addClass('js');

    /* FitVid Videos */
    $("#ESEE").fitVids();

    /* Video Screencap Click function */
    $('#ESEE .screencap').click(function() {
        $(this).fadeOut(1000);
        $('#ESEE iframe').attr('src', 'http://www.youtube.com/embed/rRVOh6W4YPk?rel=0&autoplay=1');
        return false;
    });

    /* Flexslider */
    $('#readwrite-gallery').flexslider({
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        touch: true
    });
    $('#saturdays-gallery').flexslider({
        animation: "slide",
        itemWidth: 328,
        move: 1,
        directionNav: false
    });


    /* TopBar Menu dropdown */
    var $menu = $('#univ-nav'),
    $menulink = $('.menu-link');

    $menulink.click(function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });

    
	/* localscroll */
	$('.sub-nav').localScroll({
		offset: -98,
		duration:1200
	});

    /* Scrollorama
    var scrollorama = $.scrollorama({
        blocks:'.scrollblock',
        enablePin: false
    });

    scrollorama.animate('#block',{ 
        delay: 0,
        duration: 1190,
        property: 'top',
        start: -200,
        end: 0
    }); */


    /* Navigation Sticky */
    var topBarHeight = $('#top-bar').outerHeight();
    var headerHeight = $('#header').outerHeight();
    var navHeight = $('#division-nav').outerHeight();
    var totalHeight = headerHeight + navHeight + topBarHeight;

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
