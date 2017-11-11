
if(window.innerWidth<768)
	{
$("#boatman").attr("src","assets/data/mob-video.mp4");
$("#boatman").attr("poster","assets/data/poster/mob-poster.jpg");
	}
var swiper = new Swiper('.swiper-container', {
        //direction: 'vertical',
	    effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
		direction:'vertical',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          //clickable: true,
			type: 'progressbar',
        },
	
	navigation: {
      nextEl: '#scrollDown',
    }
    });


swiper.on('slideChange', function () {
  console.log('slide changed');
	$(".video-background").each(function(){

	this.pause();	
			$('.loading').addClass('is-loading');
			$('.byte-text').removeClass('is-loaded');
			
	})
	
	setTimeout(function(){ 
		
		//console.log($(".swiper-slide-active video").index() +"|"+$(".swiper-slide-active").html()) 
		
		if($(".swiper-slide-active video").index()>=0)
			{
				console.log('slide changed 2');
				$(".swiper-slide-active video")[0].play(); 
				$('.loading').removeClass('is-loading');
				$('.byte-text').addClass('is-loaded');
			}
		
	}, 1000);
	
		
});

$(document).ready(function(){
    $(".share-ico").click(function(e){
      $(".social-ico").slideToggle(400);
      return false;
   });
   $("body").click(function(){
      $(".social-ico").slideUp();
   });
});
