$(document).ready(function () {
	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		//centeredSlides: true,
		slidesPerView: 'auto',
		slidesPerView: 3,
		loop: true,
		coverflowEffect: {
		rotate: 50,

		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows : true,
	},
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		}
	});
});




 function moreData(){

$(".chat-el").click(function(){
	
	if($(this).parent().hasClass("is-more")){
		$(this).parent().removeClass("is-more").find(".hide-el").slideUp(350);
		$(this).find(".frame-video").html("");
	}
	
	else {
		
	var this_var = $(this);	
		
	$(".chat-el").each(function(){
		
		if($(this)!=this_var && $(this).parent().hasClass("is-more")){
			
			$(this).parent().removeClass("is-more").find(".hide-el").slideUp(350);
			$(this).find(".frame-video").html("");
			
		}
	});
	
	$(this).parent().addClass("is-more").find(".hide-el").slideDown(350);
	
		$(this).find(".frame-video").html("<iframe src='https://www.youtube.com/embed/" + $(this).find(".frame-video").attr("data-video") + "' frameborder='0' allowfullscreen></iframe>");
	
		$('html, body').animate({scrollTop: $(this).offset().top}, 2000);
		
	}
});
}