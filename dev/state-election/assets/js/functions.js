var collectionSlugArr =["ipl-top-story","ipl-videos","ipl-social-buzz"];


$(document).ready(function() {
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
		
		$('#VideoPrev').html('<iframe src="https://www.youtube.com/embed/'+$(".tab-content.current li:nth-child(1) a").attr("data-video")+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		
	});
	
	load_stories();	
	load_slider_1();
});



function load_stories(){
	
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlugArr[0], function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,3);
	  console.log(stories);
	 // $(".all-story").html('');
	  for(var i=0;i<stories.length;i++)
		  {
			  
			  if(i==0)
				  {
					 // $(".first-story img").attr('src',"https://images.assettype.com/"+stories[i]['hero-image-s3-key']);
					  
					 // $(".first-story").html("<figure>"+stories[i]['headline']+"</figure>")
					  
				  }
			  else
				  {
					  //$(".all-story").append("<figure>"+stories[i]['headline']+"</figure>")
				  }
			  
		  }
	  
    var elements = stories.map(function(story) {
      return '<li><a href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><div class="img-holder"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=35&w=800&fm=pjpg" /></div><figcaption><div class="caption"><span><h5>' + story.headline + '</h5></span></figcaption></div></figure></a></li>'
    });
    elements.forEach(function(element) {
      $('#top-section-stories').append(element);
    });
	  
  });
	
	



//ipl videos
	
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,3);
    var elements = stories.map(function(story) {
      return '<li><a href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><div class="news-pic"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=35&w=800&fm=pjpg" /></div><figcaption><span>' + story.headline + '</span></figcaption></figure></a></li>'
    });
    elements.forEach(function(element) {
      $('#videos-section-stories').append(element);
    });
  });


// ipl social buzz

  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,3);
    var elements = stories.map(function(story) {
      return '<div class="more-list"><figure><a href="http://www.thequint.com/' + story.slug + '" target="blank"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=800&fm=pjpg" /><figcaption><span>' + story.headline + '</span></figcaption></a></figure></div>'
    });
    elements.forEach(function(element) {
      $('#other-section-stories').append(element);
    });
	 load_slider_3();
  });
}

function load_slider_1(){
	$('.slider-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
	  dots: false,
      autoplaySpeed: 2500,
    });
}


function load_slider_2(){
	
}
function load_slider_3(){
	$('.slider-3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
          }
        }
      ]
    });
}
function load_slider_4(){
	$('.slider-4').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
	  dots: false,
      autoplaySpeed: 2500,
    });
}
function load_slider_5(){
	$('.slider-5').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
	  dots: false,
      autoplaySpeed: 2500,
    });
}

$('.slider-2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
			variableWidth: true
            
          }
        }
      ]
    });
$('.story-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
	  dots: false,
      autoplaySpeed: 2500,
  });


