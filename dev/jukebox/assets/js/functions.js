$(document).ready(function() {
    function reset_video(video_var) {
        $("#step02 .song-iframe").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+video_var+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
       /* <iframe width="560" height="315" src="https://www.youtube.com/embed/gWn4Csu3Kc8?autoplay=1" frameborder="0" allowfullscreen></iframe>*/
    }

    $(".svg_hover").click(function(){
        reset_video($(this).attr("data-video"));

    })

    $(".play-icon li").click(function(){
        reset_video($(this).attr("data-video"));

    })

    var isPause = 0;
    //
    $("#IN_LOVE").mouseover(function(){
        $(".main-wrap").addClass("bg-love");
    });
    $("#IN_LOVE").mouseout(function(){
        $(".main-wrap").removeClass("bg-love");
    });
    $("#IN_LOVE").click(function() {
        $(".main-wrap--container").addClass("slide");
        setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2000);
        // $("#step01").animate({left: "-100%"},500);
        // $("#step02").animate({right: "0"},500);
        $(".track-love").fadeIn();
        $(".song-footer").fadeIn();

        $(".play-icon li.heart-icon").addClass("hvr-ripple-out");
    });

    //
    $("#PARTY").mouseover(function(){
        $(".main-wrap").addClass("bg-party");
    });
    $("#PARTY").mouseout(function(){
        $(".main-wrap").removeClass("bg-party");
    });
    $("#PARTY").click(function() {
        $(".main-wrap--container").addClass("slide");
         setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2000);
        $(".track-party").fadeIn();
        $(".song-footer").fadeIn();
        $(".play-icon li.party-icon").addClass("hvr-ripple-out");
    });
    $(".svg_hover_parent").mouseover(function(){

        isPause=1;
        $(".rotating").addClass("paused");
    })
    $(".svg_hover_parent").mouseout(function(){

        isPause=0;
        $(".rotating").removeClass("paused");
    })
    //
    $("#SOULFUL").mouseover(function(){
        $(".main-wrap").addClass("bg-soulful");
    });
    $("#SOULFUL").mouseout(function(){
        $(".main-wrap").removeClass("bg-soulful");
    });
    $("#SOULFUL").click(function() {
        $(".main-wrap--container").addClass("slide");
         setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2000);
        $(".track-soulful").fadeIn();
        $(".song-footer").fadeIn();
        $(".play-icon li.soulful-icon").addClass("hvr-ripple-out");
    });

    //
    $("#HEARTBREAK").mouseover(function(){
        $(".main-wrap").addClass("bg-heartbreak");
    });
    $("#HEARTBREAK").mouseout(function(){
        $(".main-wrap").removeClass("bg-heartbreak");
    });
    $("#HEARTBREAK").click(function() {
        $(".main-wrap--container").addClass("slide");
         setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2000);
        $(".track-heartbreak").fadeIn();
        $(".song-footer").fadeIn();
        $(".play-icon li.heartbreak-icon").addClass("hvr-ripple-out");
    });

    $("#SURPRISE_ME").mouseover(function(){
        $(".main-wrap").addClass("bg-surprise");
    });
    $("#SURPRISE_ME").mouseout(function(){
        $(".main-wrap").removeClass("bg-surprise");
    });
    $("#SURPRISE_ME").click(function() {
        $(".main-wrap--container").addClass("slide");
         setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2000);
        $(".track-surprise").fadeIn();
        $(".song-footer").fadeIn();
        $(".play-icon li.surprise-icon").addClass("hvr-ripple-out");
    });

    //
    $(".play-icon li").on("click", function () {
        $("#step02 .iframe-section").hide();
        $("#step02 .iframe-section").eq($(this).index()).show();

        $(".play-icon li").removeClass("hvr-ripple-out");
        $(this).addClass("hvr-ripple-out");
        $("#step02 .song-name marquee").removeClass("open");
        setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2500);
    });

    $('#IN_LOVE, #PARTY, #SOULFUL, #HEARTBREAK, #SURPRISE_ME').mouseover(function () {
        $('.pin-bottom').addClass('pin-rotate');
    });
    $('#IN_LOVE, #PARTY, #SOULFUL, #HEARTBREAK, #SURPRISE_ME').mouseout(function () {
        $('.pin-bottom').removeClass('pin-rotate');
    });

    $(".back-btn").click(function(){
        $(".main-wrap--container").removeClass("slide");
        $(".iframe-section").fadeOut();
        $(".song-footer").fadeOut();
        $(".play-icon li").removeClass("hvr-ripple-out");
        $("#step02 .song-name marquee").removeClass("open");
        $("#step02 .song-iframe").html("");
    });

});