$(document).ready(function () {
	$(".share-ico").click(function (e) {
		$(".social-ico").slideToggle(400);
		return false;
	});

	$("body").click(function () {
		$(".social-ico").slideUp();
	});
	
	$('.filter li').click(function(){
		$(this).toggleClass('is-active');
	});
	
	
	
	$('#btn_ugc').click(function(){
		$('#ugc_Modal').addClass('is-open');
	});
	
	
	
	$('#close_ugc').click(function(){
		$('#ugc_Modal').removeClass('is-open');
	});
	
	
	
	
});

function load_slider() {

$('.el-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: true,
	autoplaySpeed: 3000
});

}



