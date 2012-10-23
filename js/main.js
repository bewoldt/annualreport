
$(document).ready(function() {

	/* dropdown */
	$('.dropdown-toggle').dropdown();

	/* jquery stickem init */
	$('.body').stickem();

	/* fancybox */
	$('.various').attr('rel', 'media-gallery').fancybox({
		padding : 0,
		width		: '50%',
		height		: '50%',
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',
		arrows : false,
		helpers : {
			media : {}
		}
	});

	/* localscroll */
	$('.sub-nav').localScroll();

});
