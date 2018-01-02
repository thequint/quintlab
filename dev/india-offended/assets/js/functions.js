 function Swiper_Slider(){
	var swiper = new Swiper('.swiper-container', {
		
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		slidesPerView: 3,
		loop: true,
		coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		
			
	},slideShadows : true,
			on: {
    slideChangeTransitionEnd: function () {
    //console.log("yes");  /* do something */
		change_slide_data();
		
    },
  },
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		}
	});
	 
	 $('*').removeClass('loading');
}

