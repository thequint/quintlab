$(document).ready(function() {
    $('.slider-first-ad').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '.slider-first-content'
    });
    $('.slider-first-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-first-ad',
        // dots: true,
        focusOnSelect: true,
        infinite: false,
        // fade: true,
        prevArrow: $('.prev-first'),
        nextArrow: $('.next-first')
    });

    $('.slider-first-ad').on('afterChange', function(event, slick, currentSlide) {
        $('.content').hide();
        $('.content[data-id=' + (currentSlide + 1) + ']').show();
    });

    // Second
    $('.slider-second-ad').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '.slider-second-content'
    });
    $('.slider-second-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-second-ad',
        // dots: true,
        focusOnSelect: true,
        infinite: false,
        prevArrow: $('.prev-second'),
        nextArrow: $('.next-second')
    });


    // Third
    $('.slider-third-ad').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '.slider-third-content'
    });
    $('.slider-third-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-third-ad',
        // dots: true,
        focusOnSelect: true,
        infinite: false,
        prevArrow: $('.prev-third'),
        nextArrow: $('.next-third')
    });



    $(".icon-desktop").on("click", function() {
        $(".modal-ads-desktop").show();
    });

    $(".desktop-close").on("click", function() {
        $(".modal-ads-desktop").hide();
        $(".desktop-box__screen").html('');
    });

    $(".interstitial-btn-wrap .icon-desktop").on("click", function() {
        console.log("List:"+$(this).closest("li").index());

        if($(this).closest("li").index() == 0){
            $(".desktop-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/vibrating-mobile-ad/vib_r.html" width="100%" frameborder="0"></iframe>');

        } if($(this).closest("li").index() == 1){
            $(".desktop-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/page_peel/page_peel.html" width="100%" frameborder="0"></iframe>');

        } if($(this).closest("li").index() == 2){
            $(".desktop-box__screen").html('<iframe class="interstitial-iframe-mowgli-360" src="https://www.thequint.com/quintlab/widgets/internal-ad/mowgli-360-video-interstitial/index.html" width="100%" frameborder="0"></iframe>');

        } if($(this).closest("li").index() == 3){
            $(".desktop-box__screen").html('<iframe class="interstitial-iframe-tilt" src="https://www.thequint.com/quintlab/widgets/internal-ad/final_tilt/index.html" width="100%" frameborder="0"></iframe>');
        }

        // } if($(this).closest("li").index() == 2){
        //     $(".desktop-box__screen").html('<iframe class="iframe-adidas" src="https://www.thequint.com/quintlab/widgets/internal-ad/adidas_chat/adiads.html" width="100%" frameborder="0" ></iframe>');

        // } if($(this).closest("li").index() == 3){
        //     $(".desktop-box__screen").html('<iframe class="iframe-mowgli-banner" src="https://www.thequint.com/quintlab/widgets/internal-ad/mowgli_top_banner_ad/mowgli_banner_ad.html" width="100%" frameborder="0" ></iframe>');
        // }
    });


    $(".icon-mobile").on("click", function() {
        $(".modal-ads-mobile").show();
    });

    $(".mobile-close").on("click", function() {
        $(".modal-ads-mobile").hide();
        $(".mobile-box__screen").html('');
    });

    $(".interstitial-btn-wrap .icon-mobile").on("click", function() {
        console.log("List:"+$(this).closest("li").index());

        if($(this).closest("li").index() == 0){
            $(".mobile-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/vibrating-mobile-ad/vib_r.html" width="100%" frameborder="0"></iframe>');

        }if ($(this).closest("li").index() == 1){
            $(".mobile-box__screen").html('<iframe src="https://www.thequint.com/quintlab/widgets/internal-ad/page_peel/page_peel.html" width="100%" frameborder="0"></iframe>');

        }if ($(this).closest("li").index() == 2){
            $(".mobile-box__screen").html('<iframe class="interstitial-iframe-mowgli-360" src="https://www.thequint.com/quintlab/widgets/internal-ad/mowgli-360-video-interstitial/index.html" width="100%" frameborder="0"></iframe>');

        }if ($(this).closest("li").index() == 3){
            $(".mobile-box__screen").html('<iframe class="interstitial-iframe-tilt" src="https://www.thequint.com/quintlab/widgets/internal-ad/final_tilt/index.html" width="100%" frameborder="0"></iframe>');
        }
    });




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


    $(".slick-arrow").on("click", function() {
        $(".interstitial-ad-wrap .interstitial-ad-box").hide();
        $(".horizontal-ad-wrap .hori-ad-box").hide();
        $(".vertical-ad-wrap .vertical-ad-box").hide();
    });
});