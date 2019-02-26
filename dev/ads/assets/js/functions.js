$(".tab-nav span").on("click", function(){
    $(".tab-nav span").removeClass("active");
    $(this).addClass("active");

    $(".tab-content").fadeOut();
    $(".tab-content").eq($(this).index()).fadeIn();
});

// Interstitial Section 
$(".icon-desktop").on("click", function() {
    $(".modal-ads-desktop").show();
    
    var data_iframe = $(this).attr('data-ad-type');
    var data_transform = $(this).attr('data-transform');
    var data_bg = $(this).attr('data-bg');

    $(".desktop-box__screen").html('<iframe class="'+ data_transform +'" src="https://www.thequint.com/quintlab/widgets/internal-ad/'+ data_iframe +'" width="100%" frameborder="0"></iframe>').addClass(data_bg);
    // console.log($(this).attr('data-transform'));
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