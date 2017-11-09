var swiper = new Swiper('.swiper-container', {
        //direction: 'vertical',
	    effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          //clickable: true,
			type: 'progressbar',
        },
    });


swiper.on('slideChange', function () {
 // console.log('slide changed');
	$(".video-background").each(function(){

	this.pause();	
			
	})
	
	setTimeout(function(){ 
		
		//console.log($(".swiper-slide-active video").index() +"|"+$(".swiper-slide-active").html()) 
		
		if($(".swiper-slide-active video").index()>=0)
			{
				
				$(".swiper-slide-active video")[0].play(); 
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
