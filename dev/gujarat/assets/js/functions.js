$(document).ready(function () {
	// share
	$(".share-ico").click(function (e) {
		$(".social-ico").slideToggle(400);
		return false;
	});
	$("body").click(function () {
		$(".social-ico").slideUp();
	});

	// move down

	$(".move-down").click(function () {
		$('html, body').animate({
			scrollTop: $("#grid").offset().top
		}, 1000);




	});

	// car animation
	
	var lastScrollTop = 0;

	$(window).scroll(function () {


		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function () {


			var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
			if (st > lastScrollTop) {

				console.log("down");

				$(".car").removeClass("rotate");
				// downscroll code
			} else {
				console.log("up");
				$(".car").addClass("rotate");
			}
			lastScrollTop = st;



			var car_move = $(window).scrollTop() - $(".header-wrapper").height() / 2;

			if (car_move > -20) {
				$(".car").css({
					"top": $(window).scrollTop() - window.innerHeight / 2
				})
			} else {
				$(".car").css({
					"top": -20
				})
			}


			console.log("Haven't scrolled in 250ms!");
		}, 250));


	})
	
	// end car animation

});


new AnimOnScroll(document.getElementById('grid'), {
	minDuration: 0.4,
	maxDuration: 0.7,
	viewportFactor: 0.2
});