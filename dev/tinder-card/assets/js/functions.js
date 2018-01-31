/**
 * jTinder initialization
 */
$("#tinderslide").jTinder({
	// dislike callback
    like: function (item) {
	    // set the status text
        $('#status').show().html('Dislike image ');
    },
	// like callback
    dislike: function (item) {
		//console.log("like");
	    // set the status text
        $('#status').show().html('Like image ');
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

$(".reload").click(function(){
	
	$("li").animate({"transform": "translate(0px, 0px) rotate(0rad) skewX(0rad) scale(1, 1)"},400);
	//$("li").show();
	
})

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});

