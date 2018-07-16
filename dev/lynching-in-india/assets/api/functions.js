$(document).ready(function() {
		$(document).on("click", '#allContact li', function() {
			
			$('#contactModal').addClass('modal--active');
			$('.modal__content').addClass('modal__content--active');
			
			var _this = $(this);
			var label_img = $(this).find('.contact-img').html();
			var label_video = $(this).find('.contact-video').html();
			
			$('#contactModal').find('.modal__dialog--img').html(label_img);
			$('#contactModal').find('.modal__dialog--video').html(label_video);

			for(var i = 1; i <= 5; i++) {
				$('#contactModal').find('.modal-label-' + i).text(_this.find('.label-'+i).text());
			}
		});
	
	$('.modal__close').click(function(){
		$('#contactModal').removeClass('modal--active');
		$('.modal__content').removeClass('modal__content--active');
		$('#contactModal').find('iframe').attr('src', '');
	});
	
	$("#contactModal").click(function(){
		$('#contactModal').removeClass('modal--active');
		$('.modal__content').removeClass('modal__content--active');
		$('#contactModal').find('iframe').attr('src', '');
	});
	
	$('#allContact li').each(function(){
		var thisname = $(this).find('h3:firsr').text();
		$(this).addClass('thisname');
	});
});

//WhatsApp
$(document).ready(function() {
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
});