$(document).ready(function(){$(".dropdown-toggle").dropdown();$(".sub-nav").localScroll({offset:-75,duration:1500});var e=$("#top-bar").outerHeight(),t=$("#header").outerHeight(),n=t+e;$(window).scroll(function(){$(window).scrollTop()>n?$("#nav-wrapper").addClass("fixed").css("top","0").next().css("padding-top","0px"):$("#nav-wrapper").removeClass("fixed").next().css("padding-top","0")})});