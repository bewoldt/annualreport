
$(document).ready(function() {

    // add js class to body if javascript enabled
    $('body').addClass('js');

    /* Videos */
    $("#cultural-centers-video").fitVids();


    /* Backstretch */
    // headers
    $("#excel #header").backstretch("images/excel/excel-2.jpg");
    $("#stretch #header").backstretch("images/excel/excel-3.jpg");

    $("#kotheid").backstretch("images/capitol_bg.jpg");
    $("#hawkeye-awards").backstretch("images/imu_building.jpg");
    $("#mentoring").backstretch("images/mentoring.jpg");
    $("#leisure-skills").backstretch("images/leisure_bg.jpg");
    $("#sorority-services").backstretch("images/greek.jpg");

    /* Flexslider */
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
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
    var totalHeight = headerHeight + topBarHeight;

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
