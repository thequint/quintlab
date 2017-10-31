
$(document).ready(function(){
    $(".share-ico").click(function(e){
      $(".social-ico").slideToggle(400);
      return false;
   });
   $("body").click(function(){
      $(".social-ico").slideUp();
   });
	
	
	$(".move-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#grid").offset().top
    }, 1000);
});
	
	
});


new AnimOnScroll( document.getElementById( 'grid' ), {
	minDuration : 0.4,
	maxDuration : 0.7,
	viewportFactor : 0.2
} );