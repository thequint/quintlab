$(document).on("click", '#allContact li .contact-list', function(e) {

	$(".detail-popup").addClass("pop-active");

	// e.preventDefault();
	// $('body').css('overflow', 'hidden');

	//$('#contactModal').addClass('modal--active');
	//$('.modal__content').addClass('modal__content--active');
	
	var _this = $(this);
	var label_img = $(this).find('.contact-img').html();

	var label_video = $(this).find('.contact-video').attr("data-video");
	console.log(label_video);
	if(label_video!=undefined){
		$('.detail-popup').find('.detail-popup__content--video').html("<div class='contact-video'><iframe src='" + label_video + "' frameborder='0' allowfullscreen></iframe></div>");
	}
	else
	{
		$('.detail-popup').find('.detail-popup__content--video').html("");
	}

	//var label_video = $(this).find('.contact-video').html();
	
	//$('#contactModal').find('.modal__dialog--img').html(label_img);
	//$('#contactModal').find('.modal__dialog--video').html(label_video);

	$('.detail-popup').find('.detail-popup__content--header-thumb').html(label_img);
	//$('.detail-popup').find('.detail-popup__content--video').html("");
	

	for(var i = 1; i <= 5; i++) {
		$('.detail-popup').find('.modal-label-' + i).text(_this.find('.label-'+i).text());
	}


	// for(var i = 1; i <= 5; i++) {
	// 	$('#contactModal').find('.modal-label-' + i).text(_this.find('.label-'+i).text());
	// }
	$("body").addClass("body-scroll");
});

$(".detail-popup__close").click(function(){
	$(".detail-popup").removeClass("pop-active");
	resetPopUp();
});




function resetPopUp(){
	$("body").removeClass("body-scroll");
	$(".detail-popup").removeClass("pop-active");
	$('.detail-popup').find('iframe').attr('src', '');


	$('#contactModal').removeClass('modal--active');
	$('.modal__content').removeClass('modal__content--active');
	$('#contactModal').find('iframe').attr('src', '');
}

$("body").click(function(e) {
    //var container = $(".modal__dialog");
    var container = $(".detail-popup");
    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        resetPopUp();
    }
});
$('.modal__close').click(function(){
	resetPopUp();
});
	
// $("#contactModal").click(function(){
// 	$('#contactModal').removeClass('modal--active');
// 	$('.modal__content').removeClass('modal__content--active');
// 	$('#contactModal').find('iframe').attr('src', '');
// });
	
$('#allContact li').each(function(){
	var thisname = $(this).find('h3:firsr').text();
	$(this).addClass('thisname');
});




//WhatsApp

$(document).on("click", '#btnWp', function() {
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var text = $(this).attr("data-text");
  var url = $(this).attr("data-link");
  var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
  var whatsapp_url = "whatsapp://send?text=" + message;
  window.location.href = whatsapp_url;
} else {
  alert("Please use an Mobile Device to Share this Article");
}
});
