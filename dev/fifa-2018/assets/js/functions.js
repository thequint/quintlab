$(document).ready(function () {
	"use strict";
	$(".share-ico").click(function (e) {
		$(".social-ico").slideToggle(400);
		return false;
	});
	
	$("body").click(function () {
		$(".social-ico").slideUp();
	});
});



function slick_slider(){

$('.slider-4').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	arrows: true,
	autoplaySpeed: 2500,
  	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
		slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true 
      }
    
    }
 
  ]
});

}









