
// Interstitial Section 
$(".icon-desktop").on("click", function() {
    $(".modal-ads-desktop").show();
    
    var data_iframe = $(this).attr('data-ad-type');
    var data_transform = $(this).attr('data-transform');
    var data_bg = $(this).attr('data-bg');

    $(".desktop-box__screen").html('<iframe class="'+ data_transform +'" src="https://www.thequint.com/quintlab/widgets/internal-ad/'+ data_iframe +'" width="100%" frameborder="0"></iframe>').addClass(data_bg);

    console.log($(this).attr('data-transform'));
});


$(".icon-mobile").on("click", function() {
    $(".modal-ads-mobile").show();

    var data_iframe = $(this).attr('data-ad-type');
    var data_transform = $(this).attr('data-transform');
    var data_bg = $(this).attr('data-bg');

    var data_iframe = $(this).attr('data-ad-type');
    $(".mobile-box__screen").html('<iframe class="'+ data_transform +'" src="https://www.thequint.com/quintlab/widgets/internal-ad/'+ data_iframe +'" width="100%" frameborder="0"></iframe>').addClass(data_bg);

});


$(".desktop-close").on("click", function() {
    $(".modal-ads-desktop").hide();
    $(".desktop-box__screen").html('');
    $('.desktop-box__screen').attr('class', 'desktop-box__screen');
});

$(".mobile-close").on("click", function() {
    $(".modal-ads-mobile").hide();
    $(".mobile-box__screen").html('');
    $('.mobile-box__screen').attr('class', 'mobile-box__screen');
});

jQuery(document).ready(function($) {
    $('.smobitrigger').smplmnu();
});

$(".cs-style-2 figure").on("click", function(){
    // $(".cs-style-2 figure").removeClass("cs-hover");
    $(this).toggleClass("cs-hover");
});

// Document Click
$(document).mouseup(function (e){
    var container = $(".cs-hover");
    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        // container.hide();
        $(".cs-style-2 figure").removeClass("cs-hover");
    }
});
$(window).scroll(function() {
    $(".cs-style-2 figure").removeClass("cs-hover");
});


$(".demo-video").on("click", function() {
    $(".modal-popup").show();

    var video_id = $(this).attr("video-id")

    $(".popup-video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ video_id +'?autoplay=1&loop=1&playlist='+ video_id +'&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
});

$(".popup-close").on("click", function() {
    $(".modal-popup").hide();
    $(".popup-video").html('');
});

/*
$(".interstitial-btn-wrap .icon-desktop").on("click", function() {
    console.log("List:"+$(this).closest("li").index());

    if($(this).closest("li").index() == 0){
        $(".desktop-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/vibrating-mobile-ad/vib_r.html" width="100%" frameborder="0"></iframe>');

    } if($(this).closest("li").index() == 1){
        $(".desktop-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/page_peel/page_peel.html" width="100%" frameborder="0"></iframe>');

     // } if($(this).closest("li").index() == 2){
     //    $(".desktop-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/marvel_thanos_ad/thanos.html" width="100%" frameborder="0"></iframe>');

    } if($(this).closest("li").index() == 2){
        $(".desktop-box__screen").html('<iframe class="interstitial-iframe-mowgli-360" src="https://www.thequint.com/quintlab/widgets/internal-ad/mowgli-360-video-interstitial/index.html" width="100%" frameborder="0"></iframe>');

    // } if($(this).closest("li").index() == 4){
    //     $(".desktop-box__screen").html('<iframe class="interstitial-iframe-tilt" src="https://www.thequint.com/quintlab/widgets/internal-ad/final_tilt/index.html" width="100%" frameborder="0"></iframe>');
    }
});

// Mobile Popup
$(".icon-mobile").on("click", function() {
    $(".modal-ads-mobile").show();
});

$(".mobile-close").on("click", function() {
    $(".modal-ads-mobile").hide();
    $(".mobile-box__screen").html('');
    
    $(".mobile-box__screen").removeClass('bg-mobile-scratch');
    $(".mobile-box__screen").removeClass('bg-adidas-mobile');
    $(".mobile-box__screen").removeClass('bg-slide-in-out');
    $(".mobile-box__screen").removeClass('bg-adidas');
    $(".mobile-box__screen").removeClass('bg-mowgli-banner');
    $(".mobile-box__screen").removeClass('bg-expandable-btm');

});

$(".interstitial-btn-wrap .icon-mobile").on("click", function() {
    console.log("Interstitial:"+$(this).closest("li").index());

    if($(this).closest("li").index() == 0){
        $(".mobile-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/vibrating-mobile-ad/vib_r.html" width="100%" frameborder="0"></iframe>');

    }if ($(this).closest("li").index() == 1){
        $(".mobile-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/page_peel/page_peel.html" width="100%" frameborder="0"></iframe>');

    // }if ($(this).closest("li").index() == 2){
    //     $(".mobile-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/marvel_thanos_ad/thanos.html" width="100%" frameborder="0"></iframe>');

    }if ($(this).closest("li").index() == 2){
        $(".mobile-box__screen").html('<iframe class="interstitial-iframe-mowgli-360" src="https://www.thequint.com/quintlab/widgets/internal-ad/mowgli-360-video-interstitial/index.html" width="100%" frameborder="0"></iframe>');

    // }if ($(this).closest("li").index() == 4){
    //     $(".mobile-box__screen").html('<iframe class="interstitial-iframe-tilt 000" src="https://www.thequint.com/quintlab/widgets/internal-ad/final_tilt/index.html" width="100%" frameborder="0"></iframe>');
    }
});


// Horizontal Section
$(".horizontal-btn-wrap .icon-desktop").on("click", function() {
    console.log("Horizontal:"+$(this).closest("li").index());

    if($(this).closest("li").index() == 0){
        $(".desktop-box__screen").html('<iframe class="iframe-scratch-ad" src="https://www.thequint.com/quintlab/widgets/internal-ad/scratch-coupon-ad/code_scratch.html" width="100%" frameborder="0" ></iframe>');

    } if($(this).closest("li").index() == 1){
        $(".desktop-box__screen").html('<iframe class="iframe-slide-in-out" src="https://www.thequint.com/quintlab/widgets/internal-ad/slide_in_slide_out_banner/slide_in_slide_out.html" width="100%" frameborder="0"></iframe>').addClass("bg-slide-in-out");

    } if($(this).closest("li").index() == 2){
        $(".desktop-box__screen").html('<iframe class="iframe-adidas" src="https://www.thequint.com/quintlab/widgets/internal-ad/adidas_chat/adiads.html" width="100%" frameborder="0" ></iframe>').addClass("bg-adidas");

    } if($(this).closest("li").index() == 3){
        $(".desktop-box__screen").html('<iframe class="iframe-top-bottom-expandable" src="https://www.thequint.com/quintlab/widgets/internal-ad/top_bottom_expand/expand.html" width="100%" frameborder="0" ></iframe>').addClass("bg-expandable-btm");

    } if($(this).closest("li").index() == 4){
        $(".desktop-box__screen").html('<iframe class="iframe-mowgli-banner" src="https://www.thequint.com/quintlab/widgets/internal-ad/mowgli_top_banner_ad/mowgli_banner_ad.html" width="100%" frameborder="0" ></iframe>').addClass("bg-mowgli-banner");
    }
});

$(".horizontal-btn-wrap .icon-mobile").on("click", function() {
    if($(this).closest("li").index() == 0){
        $(".mobile-box__screen").html('<iframe class="iframe-scratch-ad" src="https://www.thequint.com/quintlab/widgets/internal-ad/scratch-coupon-ad/code_scratch.html" width="100%" frameborder="0" ></iframe>').addClass("bg-mobile-scratch");
    }
});


// Vertical Section
$(".vertical-btn-wrap .icon-desktop").on("click", function() {
    console.log("Vertical:"+$(this).closest("li").index());

    if($(this).closest("li").index() == 0){
        $(".desktop-box__screen").html('<iframe class="adidas-vertical"" src="https://www.thequint.com/quintlab/widgets/internal-ad/Mobile_Adidas_Chat/mobile_adidas_chat.html" width="100%" frameborder="0" ></iframe>');

    } if($(this).closest("li").index() == 1){
        $(".desktop-box__screen").html('<iframe class="iframe-300-600-slide" src="https://www.thequint.com/quintlab/widgets/internal-ad/300_600_slide/slide_ad.html" width="100%" frameborder="0" ></iframe>');

    } if($(this).closest("li").index() == 2){
        $(".desktop-box__screen").html('<iframe class="iframe-sidekick"" src="https://www.thequint.com/quintlab/widgets/internal-ad/sidekick-jewellery-ad/Sidekick.html" width="100%" frameborder="0" ></iframe>');

    }
});

$(".vertical-btn-wrap .icon-mobile").on("click", function() {
    if($(this).closest("li").index() == 0){
        $(".mobile-box__screen").html('<iframe class="adidas-vertical-mobile" src="https://www.thequint.com/quintlab/widgets/internal-ad/Mobile_Adidas_Chat/mobile_adidas_chat.html" width="100%" frameborder="0" ></iframe>').addClass("bg-adidas-mobile");
    }
});



// Banner Video Popup
$(".media-play-icon").on("click", function() {
    $(".modal-popup").show();
});

$(".popup-close").on("click", function() {
    $(".modal-popup").hide();
});

$(".tab-nav span").on("click", function(){
    $(".tab-nav span").removeClass("active");
    $(this).addClass("active");

    $(".tab-content").fadeOut();
    $(".tab-content").eq($(this).index()).fadeIn();
});

jQuery(document).ready(function($) {
    $('.smobitrigger').smplmnu();
});
*/

/*
// Interstitial ad
$(".interstitial-ad-wrap .interstitial-ad-box").hide();
// $(".interstitial-ad-wrap .interstitial-ad-box").eq(0).show();

$(".interstitial-btn-wrap .interstitial-btn").on("click", function() {
    console.log($(this).closest("li").index());

    $(".interstitial-ad-wrap .interstitial-ad-box").hide();
    $(".interstitial-ad-wrap .interstitial-ad-box").eq($(this).closest("li").index()).show();
    // console.log($(this).index());
});
$(".interstitial-close").on("click", function() {
    $(this).closest(".interstitial-ad-box").hide();
    console.log("yes");
});

// Horizontal ad
$(".horizontal-ad-wrap .hori-ad-box").hide();

$(".horizontal-btn-wrap .hori-btn").on("click", function() {
    console.log($(this).closest("li").index());

    $(".horizontal-ad-wrap .hori-ad-box").hide();
    $(".horizontal-ad-wrap .hori-ad-box").eq($(this).closest("li").index()).show();
});
$(".hori-close").on("click", function() {
    $(this).closest(".hori-ad-box").hide();
    console.log("yes");
});

// Vertical ad
$(".vertical-ad-wrap .vertical-ad-box").hide();

$(".vertical-btn-wrap .vertical-btn").on("click", function() {
    console.log($(this).closest("li").index());

    $(".vertical-ad-wrap .vertical-ad-box").hide();
    $(".vertical-ad-wrap .vertical-ad-box").eq($(this).closest("li").index()).show();
});
$(".vertical-close").on("click", function() {
    $(this).closest(".vertical-ad-box").hide();
    console.log("yes");
});
*/


