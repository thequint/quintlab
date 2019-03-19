
$(".popup-bt").click(function(e) {
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
});
