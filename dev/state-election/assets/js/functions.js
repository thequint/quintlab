$(document).ready(function () {
	
	$(".share-ico").click(function (e) {
		$(".social-ico").slideToggle(400);
		return false;
	});
	
	$("body").click(function () {
		$(".social-ico").slideUp();
	});

	

	/*$('ul.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');
		

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');

		$('#VideoPrev').html('<iframe src="https://www.youtube.com/embed/' + $(".tab-content.current li:nth-child(1) a").attr("data-video") + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');

	});*/
	

	load_stories();
});



var collectionSlug = ["ipl-top-story", "namma-election-microsite", "political-gunpowder-microsite", "explainers-microsite"];

function load_stories() {

	// #Stories_Explainers

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[3], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 3);
		console.log(stories);
		$(".all-story").html('');
		for (var i = 0; i < stories.length; i++) {

			if (i == 0) {

				$("#Stories_Explainers .first-story").html('<figure><a target="_blank" href="http://www.thequint.com/' + stories[i]['slug'] + '"><div class="story-image"><img src="https://images.assettype.com/' + stories[i]['hero-image-s3-key'] + '?q=100&w=400&fm=pjpg"></div><figcaption><span>' + stories[i]['headline'] + '</span></figcaption></a></figure>');

			} else {
				$("#Stories_Explainers .all-story").append('<figure><a target="_blank" href="http://www.thequint.com/' + stories[i]['slug'] + '"><div class="story-image"><img src="https://images.assettype.com/' + stories[i]['hero-image-s3-key'] + '?q=100&w=400&fm=pjpg"></div><figcaption><span>' + stories[i]['headline'] + '</span></figcaption></a></figure>');
			}

		}
	});


	// #Stories_User_Generated

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[0], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 3);
		var elements = stories.map(function (story) {
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=800&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
		});
		elements.forEach(function (element) {
			$('#Stories_User_Generated').append(element);
		});
	});

	// #Stories_Party_Left

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[0], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 10);
		var elements = stories.map(function (story) {
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=800&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
		});
		elements.forEach(function (element) {
			$('#Stories_Party_Left').append(element);
		});
	});

	// #Stories_Party_Right

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[0], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 10);
		var elements = stories.map(function (story) {
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=800&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
		});
		elements.forEach(function (element) {
			$('#Stories_Party_Right').append(element);
		});
	});


	// #Stories_Carousel_Caricatures

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[0], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 9);
		var elements = stories.map(function (story) {
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=800&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
		});
		elements.forEach(function (element) {
			$('#Stories_Carousel_Caricatures').append(element);
		});
		load_slider_caricatures();
	});


	// #Stories_Carousel_Key

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[0], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 9);
		var elements = stories.map(function (story) {
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=800&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
		});
		elements.forEach(function (element) {
			$('#Stories_Carousel_Key').append(element);
		});
		load_slider_key();
	});

	// #Stories_all

	// first 3 stories

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[1], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 3);
		var elements = stories.map(function (story) {
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=800&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
		});
		elements.forEach(function (element) {
			$('#Stories_all .all-stories').append(element);
		});
	});

	// Last slider stories 

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[2], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 5);
		var elements = stories.map(function (story) {
			
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image" style="background-image:url(https://images.assettype.com/'+story['hero-image-s3-key']+')"><img src="assets/images/placeholder.png" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
			
			/*return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=900&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'*/
		});
		elements.forEach(function (element) {
			$('#story_Slider_1').append(element);
		});
		load_slider_stories_1();
	});
	
	
	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[1], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(3, 8);
		var elements = stories.map(function (story) {
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image" style="background-image:url(https://images.assettype.com/'+story['hero-image-s3-key']+')"><img src="assets/images/placeholder1.png" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
		});
		elements.forEach(function (element) {
			$('#story_Slider_2').append(element);
		});
		load_slider_stories_2();
	});
}

function load_slider_caricatures() {
	$('.slider-2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2500,
		responsive: [{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				variableWidth: true

			}
		}]
	});
}

function load_slider_key() {
	$('.slider-3').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	arrows: true,
	autoplaySpeed: 2500,
  	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
		slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false  
      }
    
    }
 
  ]
});
		
	
}

function load_slider_stories_1() {
	$('#story_Slider_1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		dots: true,
		autoplaySpeed: 2500,
	});
}

function load_slider_stories_2() {
	$('#story_Slider_2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		dots: true,
		autoplaySpeed: 2500,
	});
}




$('.slider-4').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	arrows: true,
	autoplaySpeed: 2500,
  	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
		slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true 
      }
    
    }
 
  ]
});










const countdown = document.querySelector('.countdown');
// Set Launch Date (ms)
const launchDate = new Date('May 12, 2018 07:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    //countdown.style.color = '#17a2b8';
    //countdown.innerHTML = 'Launched!';
	  
	  countdown.innerHTML = `
  <div>0<span>Days</span></div> 
  <div>0<span>Hours</span></div>
  <div>0<span>Minutes</span></div>
  <div>0<span>Seconds</span></div>
  `;
	  
	  
	  
  }
}, 1000);


// Get Story
var story_toggle=0;
$('.get-stories').click(function(){
	if(story_toggle===0)
		{
	$('.single-party.is-party-right').addClass("translate_x")
	$('.single-party.is-party-left').addClass("translate_x")
	setTimeout(function(){
		$('.get-stories').addClass('is-change');
		$('.get-stories span strong').html('BJP');
	}, 1000);
			story_toggle=1;
		}
	else
		{
			$('.single-party.is-party-right').removeClass("translate_x")
	$('.single-party.is-party-left').removeClass("translate_x")
	setTimeout(function(){
		$('.get-stories').removeClass('is-change');
		$('.get-stories span strong').html('Congress');
	}, 1000);
			story_toggle=0
		}
})

// Twitter Fetcher

var configList = {
  "list": {"listSlug": 'karnataka-elections', "screenName": 'tapanbabbar'},
  "domId": 'exampleList',
  "maxTweets": 10,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en',
	"showInteraction":false
};
twitterFetcher.fetch(configList);

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + 2*$(window).height()/3;

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

var timer =0;
function repeatOften() {
  // Do whatever
timer =timer+1;	
$(".fact-box").each(function(index){
	//console.log($(this).offset().top);
	
			if($(this).isInViewport() && !$(this).hasClass('closed') && !$(this).hasClass('expand') )
				{

					$(this).addClass("expand");
					timer=1;
						
				}
			else
				{
				//	$(this).removeClass("expand");
				}
	
		
})	
	//console.log(timer%180);
if(timer%180==0)
	{
		//console.log("reset");
		$(".fact-box").each(function(index){
		if($(this).hasClass("expand") && !$(this).hasClass('closed'))
			{
				$(this).addClass('closed')
				$(this).removeClass("expand");
			}
			
		});
	}
  requestAnimationFrame(repeatOften);
	
}


requestAnimationFrame(repeatOften);

$(".fact-box .close").click(function(){
	
	$(this).closest(".fact-box").removeClass("expand");
	$(this).closest(".fact-box").addClass("closed");
})

$(".fact-box ").click(function(evt){
	//console.log("1");
	  if($(evt.target).attr('class') == "close")
          return;
       //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
       if($(evt.target).closest('.close').length)
          return;     
	//console.log("2");
	$(this).toggleClass("expand");
	//$(this).closest(".fact-box").addClass("closed");
})






