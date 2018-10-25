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

// console.log($(".qus-text").innerHeight());

$(".block__element--content").each(function(){
    var box_height = $(this).find(".qus-text").innerHeight();
    // console.log(box_height);
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
});

