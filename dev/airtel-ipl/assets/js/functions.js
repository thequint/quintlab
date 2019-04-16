
/*$(".popup-bt").click(function(e) {
    $(".overlay").show();
    $(".info-popup").show();
    $(".info-popup p").html($(this).attr("data-text"));
});

$(".close-icon").click(function() {
    $(".overlay").hide();
    $(".info-popup").hide();
});

// Document Click
$(document).mouseup(function (e){
    var container = $(".info-popup");
    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.hide();
        $(".overlay").hide();
    }
    // $(".content-box li").removeClass("active");
});*/


$(".popup-bt").click(function(e) {
    $(".overlay").fadeIn();
    $(".info-popup").fadeIn();
    $(".info-popup .pop-img img").attr("src", "");
    $(".info-popup .pop-img img").attr("src", $(this).attr("data-img"));

    $(".info-popup h2").html($(this).attr("data-headline"));
    $(".info-popup p").html($(this).attr("data-text"));

    $(".overlay").addClass($(this).attr("data-class"));
});

$(".close-icon").click(function() {
    $(".overlay").hide();
    $(".info-popup").hide();
    $(".overlay").attr("class","overlay");
    $(".info-popup .pop-img img").attr("src", "");
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

