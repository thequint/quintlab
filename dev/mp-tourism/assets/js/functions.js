$(document).ready(function() {
    
    $(".content-box li").click(function(e) {
        
        var container = $(".pop-close");
        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            $(".content-box li").removeClass("active");
            $(this).addClass("active");
        }
    }); 
    $(".pop-close").click(function() {
        $(".content-box li").removeClass("active");
    });

    $(".popup-bt").click(function(e) {
        $(".info-popup").show();
        $(".info-popup").css({ "top": e.clientY+ $(window).scrollTop() -  $(".info-popup").height()/2  });
        if($(this).hasClass('click-even')) {
            $(".info-popup").css({ "left": $(".main-wrap").width()/20  });
        }else {
            $(".info-popup").css({ "left": "inherit"  });       
            $(".info-popup").css({ "right": $(".main-wrap").width()/20  });    
        }
        $(".info-popup img").attr("src","");
        $(".info-popup img").attr("src",$(this).attr("data-img"));
        $(".info-popup h3").html($(this).attr("data-heading"));
        $(".info-popup p").html($(this).attr("data-text"));
    });

    $(".close-icon").click(function() {
        $(".info-popup").hide();
         $(".info-popup img").attr("src","");
        $(".info-popup img").attr("src",$(this).attr("data-img"));
    });

    // Document Click
    $(document).mouseup(function (e){
        var container = $(".info-popup");
        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            container.hide();
        }
        $(".content-box li").removeClass("active");
    });
});