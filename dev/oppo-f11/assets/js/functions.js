
$(".popup-bt").click(function(e) {
    $(".overlay").show();
    $(".info-popup").show();
    $(".info-popup h2").html($(this).attr("data-headline"));
    $(".info-popup p").html($(this).attr("data-text"));

    $(".info-popup--content").addClass($(this).attr("data-class"));

});

$(".close-icon").click(function() {
    $(".overlay").hide();
    $(".info-popup").hide();
    $(".info-popup--content").attr("class","info-popup--content");
});

// Document Click
$(document).mouseup(function (e){
    var container = $(".info-popup");
    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.hide();
        $(".overlay").hide();
        $(".info-popup--content").attr("class","info-popup--content");
    }
    // $(".content-box li").removeClass("active");
});
