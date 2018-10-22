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

// Share Icon
$(".share-ico").click(function(e) {
    $(".social-ico").slideToggle(400);
    return false;
});
$("body").click(function() {
    $(".social-ico").slideUp();
});

console.log($(".qus-text").innerHeight());

// $(".qus-text").parent().css("height", box_height);

$(".block__element--content").each(function(){
    var box_height = $(this).find(".qus-text").innerHeight();
    console.log(box_height);
    $(this).css("height", box_height);
});


$(".swiper-slide .option-click").click(function(){
    console.log($(this).index());
    $(".swiper-pagination").removeClass('hide');
    
    $(this).closest(".swiper-slide").find(".content-question").hide();
    $(this).closest(".swiper-slide").find(".content-option").fadeIn();

    $(this).closest(".swiper-slide").find(".content-option .option-img").hide();
    $(this).closest(".swiper-slide").find(".content-option .option-img").eq($(this).index()).show();

    $(this).closest(".swiper-slide").find(".option-result").eq($(this).index()).fadeIn();

    console.log($(this).index());

    if($(this).index()==0) {
        $(this).closest(".slide-option").addClass("option-first");
    }else {
        $(this).closest(".slide-option").addClass("option-second");
    }

    
    // $(this).closest(".swiper-slide").find(".option-result").eq($(this).index()).fadeIn();

    // $(this).closest(".swiper-slide").find(".option-img").hide();
    // $(this).closest(".swiper-slide").find(".option-img").eq($(this).index()).show();

    // $(this).closest(".swiper-slide").find(".block-fluid").removeClass("block-fluid");

    // $(this).closest(".swiper-slide").find(".option-click").eq(0).addClass("slide-up");
    // $(this).closest(".swiper-slide").find(".option-click").eq(1).addClass("slide-down");

});

// $(".swiper-slide .qus-first").click(function(){

//     $(this).closest(".swiper-slide").find(".ans-first-a").fadeIn();

//     $(this).closest(".swiper-slide").find(".block-fluid--img-left").show();
//     $(this).closest(".swiper-slide").find(".block-fluid--img-right").hide();

//     $(this).closest(".swiper-slide").find(".block-fluid").removeClass("block-fluid");

//     $(this).closest(".swiper-slide").find(".qus-first").addClass("slide-up");
//     $(this).closest(".swiper-slide").find(".qus-second").addClass("slide-down");
// });


// $(".swiper-slide .qus-second").click(function(){
//     $(this).closest(".swiper-slide").find(".ans-first-b").fadeIn();

//     $(this).closest(".swiper-slide").find(".block-fluid--img-left").hide();
//     $(this).closest(".swiper-slide").find(".block-fluid--img-right").show();

//     $(this).closest(".swiper-slide").find(".block-fluid").removeClass("block-fluid");

//     $(this).closest(".swiper-slide").find(".qus-first").addClass("slide-up");
//     $(this).closest(".swiper-slide").find(".qus-second").addClass("slide-down");
// });


// $(".ani-btn").click(function(){
//     $(".ani-scene-first .bg").addClass("fadeInUp");
//     $(".ani-scene-first .sofa").addClass("fadeInDown");
//     $(".ani-scene-first .human").addClass("fadeInDown");

//     $(".ani-scene-first .plant").addClass("fadeInLeft");
//     $(".ani-scene-first .toy").addClass("fadeInRight");

//     $(".box-animation").addClass("add-animation");
// });

// $(".ani-btn2").click(function(){
//     $(".ani-scene-second .bg").addClass("fadeInUp");
//     $(".ani-scene-second .sofa").addClass("fadeInDown");
//     $(".ani-scene-second .human").addClass("fadeIn");
    
//     $(".ani-scene-second .human-child").addClass("fadeInLeft");
//     $(".ani-scene-second .human-sumit").addClass("fadeInRight");

//     setTimeout(function(){
//      $(".ani-scene-second .human-child").addClass("myAnimation");
//     }, 2000);
// });


