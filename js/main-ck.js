$(document).ready(function(){$("body").addClass("js");$("#ESEE").fitVids();$(".flexslider").flexslider({animation:"slide",slideshow:!1,smoothHeight:!0,touch:!0});$("#gallery").flexslider({animation:"fade",slideshow:!1,touch:!0,manualControls:".flex-ctrl li"});var e=$("#univ-nav"),t=$(".menu-link");t.click(function(){t.toggleClass("active");e.toggleClass("active");return!1});$("#ESEE .screencap").click(function(){$(this).fadeOut(1e3);$("#ESEE iframe").attr("src","http://www.youtube.com/embed/rRVOh6W4YPk?rel=0&autoplay=1");return!1});$(".sub-nav").localScroll({offset:-98,duration:1200});var n=$("#top-bar").outerHeight(),r=$("#header").outerHeight(),i=$("#division-nav").outerHeight(),s=r+i+n;$(window).scroll(function(){$(window).scrollTop()>s?$("#nav-wrapper").addClass("fixed").css("top","0").next().addClass("padding-top"):$("#nav-wrapper").removeClass("fixed").next().removeClass("padding-top")})});