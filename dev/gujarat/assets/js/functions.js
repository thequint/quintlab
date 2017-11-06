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
	
	// filters
	
	$('.btn-filter').click(function(){
		$('.grid-area').toggleClass('is-open');
		$('.filter-options').toggleClass('is-open');
	});

	// car animation
	
	var lastScrollTop = 0;

	$(window).scroll(function () {


		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function () {


			var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
			if (st > lastScrollTop) {

				//console.log("down");

				$(".car").removeClass("rotate");
				// downscroll code
			} else {
				
				//console.log("up");
				
				$(".car").addClass("rotate");
			}
			lastScrollTop = st;



			var car_move = $(window).scrollTop() - $(".header-wrapper").height() / 2;

			if (car_move > -55) {
				$(".car").css({
					"top": $(window).scrollTop() - window.innerHeight / 2
				})
			} else {
				$(".car").css({
					"top": -55
				})
			}


			console.log("Haven't scrolled in 250ms!");
		}, 250));


	})
	
	// end car animation

});


new AnimOnScroll(document.getElementById('grid'), {
	minDuration: 0.4,
	maxDuration: 0.7,
	viewportFactor: 0.2
});



function lazy_load_image() {
	
	$(".placeholder").each(function(){
	var n = $(this),
    i = $(this).find(".img-small"),
    o = i.attr("title"),
    r = new Image;
		
	
r.src = i.attr("src"), r.onload = function() {
   
};
var s = new Image;
		
		console.log(i.attr("data-large"));	
s.src = i.attr("data-large"), s.onload = function() {
	

    s.classList.add("loaded"), s.classList.add("img-large"), s.setAttribute("alt", o), s.setAttribute("title", o)
}, n.append(s)
});
}


$(document).ready(function(){
		
var collectionSlug = 'bol-feature'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,2);
    var elements = stories.map(function(story) {
      return '<li><a href="https://www.thequint.com/' + story.slug + '" target="blank">'+ story.headline +'</a></li>'
    });
    elements.forEach(function(element) {
      $('.collection-stories ul').append(element);
    });
	   
  });
	  
})



