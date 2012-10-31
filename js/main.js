
$(document).ready(function() {
    // add js class to body if javascript enabled
    $('body').addClass('js');

    /* Videos */
    $("#cultural-centers-video").fitVids();
    $("#kotheid-video").fitVids();
    $('#readwrite-video').fitVids();
    $("#iowagrow-video").fitVids();


    /* Backstretch */
    $("#kotheid").backstretch("images/capitol_bg.jpg");
    $("#hawkeye-awards").backstretch("images/imu_building.jpg");
    $("#mentoring").backstretch("images/mentoring.jpg");
    $("#leisure-skills").backstretch("images/leisure_bg.jpg");
    $("#sorority-services").backstretch("images/greek.jpg");
    
    

    //$("#walkitout-quote").backstretch("images/walk_it_out_2.jpg");


    /* Flexslider */
    $('#gallery').flexslider({
        animation: "fade",
        slideshow: false,
        touch: true,
        manualControls: ".flex-ctrl li"
    });

    /* Jquery Stickem */
    $('body').stickem();

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
		offset: -94,
		duration:1200
	});

});
