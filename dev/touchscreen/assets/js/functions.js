
 $(window).on("load", function(){
    
    $(".zoom-animation").addClass("transition-box");
    
	var pop_flag = 0;

	$(".img-thumb").on("click touchstart", function(){

		if (pop_flag == 0) {
			pop_flag = 1;
			// console.log(pop_flag);
			$(".popup-box").hide();

			$(this).closest(".zoom-animation").addClass("zoom");
		    $(this).closest(".zoom-animation").addClass("zoom-index");
		    $(this).closest(".zoom-animation").find(".close-icon").addClass("is-show");
		    $(this).closest(".zoom-animation").find(".popup-box").show();
		    $(this).closest(".zoom-animation").find(".thumb-tweet").addClass("half-width");

		    $(this).closest(".zoom-animation").find(".img-placeholder").removeClass("is-show");
		    $(this).closest(".zoom-animation").find(".img-placeholder").addClass("is-hide");

			var _this = $(this)
		    setTimeout(function() {
		    	$(_this).closest(".zoom-animation").find(".text-animation").addClass("is-show");
		    	functionSlider();
		    }, 1000);

		}else {
			pop_flag = 0;
			// console.log(pop_flag);
			$(".zoom-animation").removeClass("zoom");
		    $(".close-icon").removeClass("is-show");
		    $(".popup-box").hide();
		    
		    $(".text-animation").removeClass("is-show");
		    $(".img-thumb").removeClass("test-close");
		    $(".thumb-tweet").removeClass("half-width");
		    $(".img-placeholder").removeClass("is-hide");
		    $(".img-placeholder").addClass("is-show");

		    setTimeout(function() {
		        $(".zoom-animation").removeClass("zoom-index");

		        $(".is-ani-left").removeClass("ani-left-visible");
		        
		    }, 800);
		}
	    // $(".close-icon").addClass("is-show");
	});
});

// $(".close-icon").on("click touchstart", function(){
//     $(".zoom-animation").removeClass("zoom");
//     $(".close-icon").removeClass("is-show");

//     $(".popup-box").hide();
    
//     $(".text-animation").removeClass("is-show");
//     $(".img-thumb").removeClass("test-close");

//     setTimeout(function() {
//         $(".zoom-animation").removeClass("zoom-index");

//         $(".is-ani-left").removeClass("ani-left-visible");
        
//     }, 800);
// });

$(".is-ani-btm .ani-btm-visible").addClass("text-ani");

// $(".is-ani-left").addClass("ani-left-visible");
$(".is-ani-right").addClass("ani-right-visible");

