$(document).ready(function(){$("body").addClass("js");$("#ESEE").fitVids();$("#ESEE .screencap").click(function(){$(this).fadeOut(1e3);$("#ESEE iframe").attr("src","http://www.youtube.com/embed/rRVOh6W4YPk?rel=0&autoplay=1");return!1});$("#readwrite-gallery").flexslider({animation:"slide",slideshow:!1,smoothHeight:!0,touch:!0});$("#saturdays-gallery").flexslider({animation:"slide",itemWidth:328,move:1,directionNav:!1});$("#walkitout-gallery").flexslider({animation:"slide",itemWidth:333});var e=$("#univ-nav"),t=$(".menu-link");t.click(function(){t.toggleClass("active");e.toggleClass("active");return!1});var n=$("#top-bar").outerHeight(),r=$("#header").outerHeight(),i=$("#division-nav").outerHeight(),s=r+i+n;$(window).scroll(function(){$(window).scrollTop()>s?$("#nav-wrapper").addClass("fixed").css("top","0").next().addClass("padding-top"):$("#nav-wrapper").removeClass("fixed").next().removeClass("padding-top")});var o=$("section"),u=$(".sub-nav a");o.waypoint({handler:function(e,t){var n;n=$(this);t==="up"&&(n=n.prev());var r=$('.sub-nav a[href="#'+n.attr("id")+'"]');u.removeClass("selected");r.addClass("selected")},offset:10});var a="html, body";$("html, body").each(function(){var e=$(this).attr("scrollTop");$(this).attr("scrollTop",e+1);if($(this).attr("scrollTop")==e+1){a=this.nodeName.toLowerCase();$(this).attr("scrollTop",e);return!1}});$(".sub-nav a").click(function(e){e.preventDefault();var t=$(this),n=this.hash,r=$(n);$(a).stop().animate({scrollTop:r.offset().top},1e3,"swing",function(){window.location.hash=n})})});