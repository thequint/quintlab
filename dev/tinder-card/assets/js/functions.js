/**
 * jTinder initialization
 */
$("#tinderslide").jTinder({
    like: function (item) {
        $('#status').show().html('Dislike image ');
		
    },
    dislike: function (item) {
        $('#status').show().html('Like image ');
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});


function reload_app(){
	$('.dislike').removeClass('is-hide');
	$('.like').removeClass('is-hide');
	$('.reload').removeClass('is-show');
	$('.reset-ops').css('opacity','0');
}


function action_click(){
	$('.reload').addClass('is-show');
	$('.dislike').addClass('is-hide');
	$('.like').addClass('is-hide');
}

$(".reload").click(function(){
	$("li").animate({"transform": "translate(0px, 0px) rotate(0rad) skewX(0rad) scale(1, 1)"},400);
	reload_app();
});



$('.actions .like, .actions .dislike').click(function(e){
	$("#tinderslide").jTinder($(this).attr('class'));
	action_click();
});

