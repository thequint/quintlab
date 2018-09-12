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


// $(".block__element--content.que-click").click(function(){
// 	$(".que-first").css({"transform":"translateY(-1000px)","opacity":"0"});
// 	$(".que-second").css({"transform":"translateY(1000px)","opacity":"0"});
// });

// #01
$(".question-slider-01 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-01 .ans-first-a").fadeIn();

    $(".question-slider-01 .qus-first").addClass("slide-up");
    $(".question-slider-01 .qus-second").addClass("slide-down");
});
$(".question-slider-01 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-01 .ans-first-b").fadeIn();

    $(".question-slider-01 .qus-first").addClass("slide-up");
    $(".question-slider-01 .qus-second").addClass("slide-down");
});

// #02 
$(".question-slider-02 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-02 .ans-first-a").fadeIn();

    $(".question-slider-02 .qus-first").addClass("slide-up");
    $(".question-slider-02 .qus-second").addClass("slide-down");
});
$(".question-slider-02 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-02 .ans-first-b").fadeIn();

    $(".question-slider-02 .qus-first").addClass("slide-up");
    $(".question-slider-02 .qus-second").addClass("slide-down");
});

// #03
$(".question-slider-03 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-03 .ans-first-a").fadeIn();

    $(".question-slider-03 .qus-first").addClass("slide-up");
    $(".question-slider-03 .qus-second").addClass("slide-down");
});
$(".question-slider-03 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-03 .ans-first-b").fadeIn();

    $(".question-slider-03 .qus-first").addClass("slide-up");
    $(".question-slider-03 .qus-second").addClass("slide-down");
});

// #04
$(".question-slider-04 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-04 .ans-first-a").fadeIn();

    $(".question-slider-04 .qus-first").addClass("slide-up");
    $(".question-slider-04 .qus-second").addClass("slide-down");
});
$(".question-slider-04 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-04 .ans-first-b").fadeIn();

    $(".question-slider-04 .qus-first").addClass("slide-up");
    $(".question-slider-04 .qus-second").addClass("slide-down");
});

// #05
$(".question-slider-05 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-05 .ans-first-a").fadeIn();

    $(".question-slider-05 .qus-first").addClass("slide-up");
    $(".question-slider-05 .qus-second").addClass("slide-down");
});
$(".question-slider-05 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-05 .ans-first-b").fadeIn();

    $(".question-slider-05 .qus-first").addClass("slide-up");
    $(".question-slider-05 .qus-second").addClass("slide-down");
});

// #06
$(".question-slider-06 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-06 .ans-first-a").fadeIn();

    $(".question-slider-06 .qus-first").addClass("slide-up");
    $(".question-slider-06 .qus-second").addClass("slide-down");
});
$(".question-slider-06 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-06 .ans-first-b").fadeIn();

    $(".question-slider-06 .qus-first").addClass("slide-up");
    $(".question-slider-06 .qus-second").addClass("slide-down");
});

// #07
$(".question-slider-07 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-07 .ans-first-a").fadeIn();

    $(".question-slider-07 .qus-first").addClass("slide-up");
    $(".question-slider-07 .qus-second").addClass("slide-down");
});
$(".question-slider-07 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-07 .ans-first-b").fadeIn();

    $(".question-slider-07 .qus-first").addClass("slide-up");
    $(".question-slider-07 .qus-second").addClass("slide-down");
});

// #08
$(".question-slider-08 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-08 .ans-first-a").fadeIn();

    $(".question-slider-08 .qus-first").addClass("slide-up");
    $(".question-slider-08 .qus-second").addClass("slide-down");
});
$(".question-slider-08 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-08 .ans-first-b").fadeIn();

    $(".question-slider-08 .qus-first").addClass("slide-up");
    $(".question-slider-08 .qus-second").addClass("slide-down");
});

// #09
$(".question-slider-09 .block__element--content-option.qus-first").click(function(){
    $(".question-slider-09 .ans-first-a").fadeIn();

    $(".question-slider-09 .qus-first").addClass("slide-up");
    $(".question-slider-09 .qus-second").addClass("slide-down");
});
$(".question-slider-09 .block__element--content-option.qus-second").click(function(){
    $(".question-slider-09 .ans-first-b").fadeIn();

    $(".question-slider-09 .qus-first").addClass("slide-up");
    $(".question-slider-09 .qus-second").addClass("slide-down");
});






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


