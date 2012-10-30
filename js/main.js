
$(document).ready(function() {
    // add js class to body if javascript enabled
    $('body').addClass('js');

    /* Videos */
    $("#cultural-centers-video").fitVids();
    $("#kotheid-video").fitVids();
    $('#readwrite-video').fitVids();
    $("#iowagrow-video").fitVids();


    /* Backstretch */
    $("#kotheid").backstretch("images/capitol-c.jpg");
    //$("#walkitout-quote").backstretch("images/walk_it_out_2.jpg");


    /* Flexslider */
    $('#gallery').flexslider({
        animation: "fade",
        slideshow: false,
        manualControls: ".flex-ctrl li"
    });

    /*
    $('.screencap').click(function() {
        $(this).hide();
        $('#kotheid iframe').attr('src', 'http://www.youtube.com/embed/O_HyZ5aW76c?rel=0&autoplay=1');
    }); */
	/* dropdown
	$('.dropdown-toggle').dropdown(); */

	/* localscroll */
	$('.sub-nav').localScroll({
		offset: -75,
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
            $('#nav-wrapper').addClass('fixed').css('top','0').next().css('padding-top','0px');
        } else {

            // when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
            $('#nav-wrapper').removeClass('fixed').next().css('padding-top','0');
        }
    });

});
