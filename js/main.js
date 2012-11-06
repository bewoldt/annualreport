
$(document).ready(function() {

    // add js class to body if javascript enabled
    $('body').addClass('js');

    /* Videos */
    $("#cultural-centers-video").fitVids();


    /* Backstretch */
    // headers
    $("#home #header").backstretch("images/excel/excel-1.jpg");
    $("#excel #header").backstretch("images/excel/excel-2.jpg");
    $("#stretch #header").backstretch("images/excel/excel-3.jpg");
    $("#engage #header").backstretch("images/excel/excel-4.jpg");
    $("#choose #header").backstretch("images/excel/excel-5.jpg");
    $("#serve #header").backstretch("images/excel/excel-6.jpg");

    $("#kotheid").backstretch("images/stretch/kotheid-still.jpg");
    $("#hawkeye-awards").backstretch("images/imu_building.jpg");
    $("#mentoring").backstretch("images/engage/heather-ockenfels-still.jpg");
    $("#leisure-skills").backstretch("images/choose/lifetime-leisure.jpg");
    $("#sorority-services").backstretch("images/greek.jpg");

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

    /*
    $('.screencap').click(function() {
        $(this).hide();
        $('#kotheid iframe').attr('src', 'http://www.youtube.com/embed/O_HyZ5aW76c?rel=0&autoplay=1');
    }); */


	/* localscroll */
	$('.sub-nav').localScroll({
		offset: -79,
		duration:1200
	});


    /* Navigation Sticky */
    
    //Calculate the height of <header>
    //Use outerHeight() instead of height() if have padding
    var topBarHeight = $('#top-bar').outerHeight();
    var headerHeight = $('#header').outerHeight();
    var navHeight = $('#navigation').outerHeight();
    var totalHeight = headerHeight + navHeight + topBarHeight;

    // when scroll
    $(window).scroll(function(){

        //if scrolled down more than the header's height
        if ($(window).scrollTop() > totalHeight){

            // if yes, add "fixed" class to the <nav>
            // add padding top to the #content (value is same as the height of the nav)
            $('#nav-wrapper').addClass('fixed').css('top','0');
        } else {

            // when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('#nav-wrapper').removeClass('fixed');
        }
    });

});
