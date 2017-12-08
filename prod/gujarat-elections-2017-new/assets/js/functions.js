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
	
	//
	
	$('.open-form').click(function(){
		$('.embed-form').addClass('is-open');
	});
	
	$('.close-form').click(function(){
		$('.embed-form').removeClass('is-open');
	});
	
});


 function StorySlider_1(){

$('#StorySlider_1').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
            variableWidth: true
          }
        }
      ]
    });
 
 }



// KEY EVENTS


  $.getJSON('https://www.thequint.com/api/v1/stories/c3e86228-552d-4aff-b248-93a266d701d0', function(res) {
    var lastStory = res.story;
    var cards = lastStory.cards;
    var cardsWithImages = cards.filter(function(card) {
      return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
    }).slice(0,5)
    elements = cardsWithImages.map(function(card) {
      var imageKey;
      var titleElement;
      if(card.metadata){
        if(card && card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'][0]=="true" ){
          var imageElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'image'});
          titleElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'title'}) || {};  
          imageKey= (imageElement || {})["image-s3-key"];
        }
      }
     	
		if(imageKey){
        return '<li><a href="http://www.thequint.com/' + lastStory.slug + '" target="_blank"><figure><div class="story-img"><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=100&amp;w=420&amp;fm=pjpg" alt="' + titleElement.text + '"></div><figcaption><h3 class="story-headline">' + titleElement.text + '</h3></figcaption></figure></a></li>'
      }
		
    });
    elements.forEach(function(element) {
      if(element){
        $('#StorySlider_1').append(element);
		 //console.log(elements); 
      }
    });
	  
	  StorySlider_1()
  });




 function moreData(x){
var chat_handler;
	 if(x==0)
		 {
chat_handler = $(".chat-el");
}
 else
	 {
		 
chat_handler = $("#listData .chat-el");	 
	 }
	 
	 
	chat_handler.click(function(){
	
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
	
		//$('html, body').animate({scrollTop: $(this).offset().top}, 2000);
		
	}
}
				   
				   
				   
				   );
 
 
 }




 
	 
	 
	 function init()
{
	if($(window).width() > 980)
		{
	$(".sidebar").css("width",$(".container").width()*30/100);	
			requestAnimationFrame(repeatOften);
		}
}

	 
$(window).load(function(){
init();
	filterOften();
	
})
$(window).resize(function(){
init();
	filterOften();
}) 

function repeatOften() {
  // Do whatever
	var top_height = $('.top-wrapper').height();
      if ($(this).scrollTop() > top_height) {
          $('.sidebar').addClass('fixed');
      } else {
          $('.sidebar').removeClass('fixed');
      }
  requestAnimationFrame(repeatOften);
}



// mobile filter
function filterOften() {
var top_height = $('.top-wrapper').height();
      if ($(this).scrollTop() > top_height) {
          $('.sticky-footer-wrapper').addClass('is-show');
      } else {
          $('.sticky-footer-wrapper').removeClass('is-show');
      }
  requestAnimationFrame(filterOften);

}

