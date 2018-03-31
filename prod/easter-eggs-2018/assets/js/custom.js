$(document).ready(function(){
	/*
	$(".egg-top").click(function(){
		$(".egg-full").hide();
		$(".egg-half-full").show();

		$(".egg-top .egg-half-full .egg-up").animate({top: "-300px", opacity: "0"});
		$(".egg-top .egg-half-full .egg-poster").animate({top: "0", height: "268px"});
		$(".egg-crack").css({opacity: "1"});
		$(".egg-content").fadeIn();
	});*/
	$(".egg-top").on("click",function(){
      adjust_iframe_height();
   });
	if ($(window).width() <= 375) {
        function handler1() {
			$(".egg-top .egg-half-full .egg-up").animate({top: "-300px", opacity: "0"});
			$(".egg-top .egg-half-full .egg-poster").animate({top: "30px", height: "230px"});
			$(".egg-crack").addClass("fixed");
			$(".egg-content").fadeIn();
			$(this).one("click", handler2);
		}
		function handler2() {
			$(".egg-top .egg-half-full .egg-up").animate({top: "1px", opacity: "1"});
			$(".egg-top .egg-half-full .egg-poster").animate({top: "230px", height: "0"});
			$(".egg-crack").removeClass("fixed");
			$(".egg-content").fadeOut();
			$(this).one("click", handler1);
		}
    }else {
    	function handler1() {
			$(".egg-top .egg-half-full .egg-up").animate({top: "-300px", opacity: "0"});
			$(".egg-top .egg-half-full .egg-poster").animate({top: "30px", height: "312px"});
			$(".egg-crack").addClass("fixed");
			$(".egg-content").fadeIn();
			$(this).one("click", handler2);
		}
		function handler2() {
			$(".egg-top .egg-half-full .egg-up").animate({top: "1px", opacity: "1"});
			$(".egg-top .egg-half-full .egg-poster").animate({top: "312px", height: "0"});
			$(".egg-crack").removeClass("fixed");
			$(".egg-content").fadeOut();
			$(this).one("click", handler1);
		}
    }
	
	$(".egg-top").one("click", handler1);
});