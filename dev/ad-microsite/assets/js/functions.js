$(document).ready(function() {

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