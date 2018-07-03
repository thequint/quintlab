// WOW Animations
var wow = new WOW(
    {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();


$(".block__element--content.que-click").click(function(){
	$(".que-first").css({"transform":"translateY(-1000px)","opacity":"0"});
	$(".que-second").css({"transform":"translateY(1000px)","opacity":"0"});
});


// var data_ani = $(".swiper-slide-active").attr("data-animation");

// $(".swiper-pagination").click(function(){
// 	$(".swiper-slide-active").find().addClass(data_ani);
// });


// ani-scene.each($(this).addClass($(this).attr("data-animation")))






$(".ani-btn").click(function(){
    $(".ani-scene-first .bg").addClass("fadeInUp");
    $(".ani-scene-first .sofa").addClass("fadeInDown");
    $(".ani-scene-first .human").addClass("fadeInDown");

    $(".ani-scene-first .plant").addClass("fadeInLeft");
    $(".ani-scene-first .toy").addClass("fadeInRight");

    $(".box-animation").addClass("add-animation");
});

$(".ani-btn2").click(function(){
    $(".ani-scene-second .bg").addClass("fadeInUp");
    $(".ani-scene-second .sofa").addClass("fadeInDown");
    $(".ani-scene-second .human").addClass("fadeIn");
    
    $(".ani-scene-second .human-child").addClass("fadeInLeft");
    $(".ani-scene-second .human-sumit").addClass("fadeInRight");

    setTimeout(function(){
    	$(".ani-scene-second .human-child").addClass("myAnimation");
    }, 2000);
});


