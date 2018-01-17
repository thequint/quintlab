$(document).ready(function () {
	$(".share-ico").click(function (e) {
		$(".social-ico").slideToggle(400);
		return false;
	});

	$("body").click(function () {
		$(".social-ico").slideUp();
	});
});

$('.el-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: true,
	autoplaySpeed: 2000
});

