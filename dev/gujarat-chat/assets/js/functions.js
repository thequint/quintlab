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
	
});


//$('.show-el').click(function(e) {
//  	e.preventDefault();
//    var $this = $(this);
//    if ($this.next().hasClass('hide-el')) {
//        $this.next().removeClass('hide-el');
//        $this.next().slideUp(350);
//		$this.addClass('is-more');
//    } else {
//        $this.parent().parent().find('li .inner').removeClass('show');
//        $this.parent().parent().find('li .inner').slideUp(350);
//        $this.next().toggleClass('hide-el');
//        $this.next().slideToggle(350);
//    }
//});


$(".chat-container ul li").click(function(e){
	
	$(".chat-container ul li").removeClass("is-more").find(".hide-el").slideUp(350);
	
	$(this).addClass("is-more").find(".hide-el").slideDown(350);
	
//	if ($(this).hasClass("is-more")){
//      $(this).removeClass("is-more").find(".hide-el").slideUp(350);
//    }
});





