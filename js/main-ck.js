$(document).ready(function(){$("body").addClass("js");$("#cultural-centers-video").fitVids();$("#excel #header").backstretch("images/excel/excel-2.jpg");$("#stretch #header").backstretch("images/excel/excel-3.jpg");$("#kotheid").backstretch("images/capitol_bg.jpg");$("#hawkeye-awards").backstretch("images/imu_building.jpg");$("#mentoring").backstretch("images/mentoring.jpg");$("#leisure-skills").backstretch("images/leisure_bg.jpg");$("#sorority-services").backstretch("images/greek.jpg");$(".flexslider").flexslider({animation:"slide",slideshow:!1,touch:!0});$("#gallery").flexslider({animation:"fade",slideshow:!1,touch:!0,manualControls:".flex-ctrl li"});var e=$("#univ-nav"),t=$(".menu-link");t.click(function(){t.toggleClass("active");e.toggleClass("active");return!1});$(".sub-nav").localScroll({offset:-79,duration:1200});var n=$("#top-bar").outerHeight(),r=$("#header").outerHeight(),i=r+n;$(window).scroll(function(){$(window).scrollTop()>i?$("#nav-wrapper").addClass("fixed").css("top","0"):$("#nav-wrapper").removeClass("fixed")})});