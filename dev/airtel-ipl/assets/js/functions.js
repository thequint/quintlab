$(".popup-bt").click(function(e) {
    $(".overlay").fadeIn();
    $(".info-popup").fadeIn();
    $(".info-popup h2").html($(this).attr("data-headline"));
    $(".info-popup p").html($(this).attr("data-text"));

    $(".info-popup .popup-img").attr("src", $(this).attr("data-img"));

    $(".overlay").addClass($(this).attr("data-class"));
});

$(".close-icon").click(function() {
    $(".overlay").hide();
    $(".info-popup").hide();
    $(".overlay").attr("class","overlay");
});

// Document Click
$(document).mouseup(function (e){
    var container = $(".info-popup");
    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.hide();
        $(".overlay").hide();
        $(".overlay").attr("class","overlay");
    }
    // $(".content-box li").removeClass("active");
});
