$(document).ready(function () {
	$(".share-ico").click(function (e) {
		$(".social-ico").slideToggle(400);
		return false;
	});

	$("body").click(function () {
		$(".social-ico").slideUp();
	});
});

function load_slider() {

$('.el-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	arrows: true,
	autoplaySpeed: 2000
});

}



