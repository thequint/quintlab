$(document).ready(function () {
	// share
	$(".share-ico").click(function (e) {
		$(".social-ico").slideToggle(400);
		return false;
	});
	
	$("body").click(function () {
		$(".social-ico").slideUp();
	});

	// move down

	$(".move-down").click(function () {
		$('html, body').animate({
			scrollTop: $("#grid").offset().top
		}, 1000);

	});
	
	//
	
	$('.link-filter').click(function(){
		$('.sidebar').toggleClass('is-open');
		$(this).toggleClass('is-active');
	});
	
	$('.close-filter').click(function(){
		$('.sidebar').removeClass('is-open');
		$('.link-filter').removeClass('is-active');
	});
	
	
});




 function moreData(){

$(".chat-el").click(function(){
	
	if($(this).parent().hasClass("is-more")){
		$(this).parent().removeClass("is-more").find(".hide-el").slideUp(350);
	}
	
	else {
		
	var this_var = $(this);	
		
	$(".chat-el").each(function(){
		
		if($(this)!=this_var && $(this).parent().hasClass("is-more")){
			
			$(this).parent().removeClass("is-more").find(".hide-el").slideUp(350);
			
		}
	});
	
	$(this).parent().addClass("is-more").find(".hide-el").slideDown(350);
	
		$('html, body').animate({scrollTop: $(this).offset().top}, 2000);
		
	}
});
	 
	 }