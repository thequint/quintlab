// var amount = -25;
// var initial = 0;

// document.getElementById("prev").addEventListener("click", function() {
//     initial -= amount;
//     document.getElementById("container").style.transform = "translateX(" + initial + "%)"
// });

// document.getElementById("next").addEventListener("click", function() {
//     initial += amount;
//     document.getElementById("container").style.transform = "translateX(" + initial + "%)"
// });

$(document).ready(function() {
    
    // $(".content-box li").click(function(e) {
        
    //     var container = $(".pop-close");
    //     if (!container.is(e.target)
    //         && container.has(e.target).length === 0)
    //     {
    //         $(".content-box li").removeClass("active");
    //         $(this).addClass("active");
    //     }
    // }); 
    // $(".pop-close").click(function() {
    //     $(".content-box li").removeClass("active");
    // });

    // $(".next-arrow").click(function(e) {
    //     $(".front").css({"transform":"translateX(-25%)"});
    // });

    
    $(".popup-btn").click(function(e) {
        $(".popup-box").show();
        //console.log(e.clientY +"|"+  window.screen.height+"|"+ $(".info-popup").height()+"|"+  $(window).scrollTop());
        //$(".info-popup").css({ "top": e.clientY+ $(window).scrollTop() -  $(".info-popup").height()/2 });

        $(".popup-box img").attr("src",$(this).attr("data-img"));
        $(".popup-box h3").html($(this).attr("data-heading"));
        $(".popup-box p").html($(this).attr("data-text"));
    });

    $(".close-icon").click(function() {
        $(".popup-box").hide();
    });

    // Document Click
    $(document).mouseup(function (e){
        var container = $(".popup-box");
        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            container.hide();
        }
        //$(".points").removeClass("active");
    });

    // var swipe_audioElement_click;
    // swipe_audioElement_click = document.createElement('audio');
    // swipe_audioElement_click.setAttribute('src', 'assets/media/super-man-sound.mp3');

    // $(".popup-btn").click(function() {
    //     swipe_audioElement_click.play();
    // });
});