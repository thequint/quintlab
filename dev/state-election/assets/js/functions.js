$(document).ready(function () {

	$('ul.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');

		$('#VideoPrev').html('<iframe src="https://www.youtube.com/embed/' + $(".tab-content.current li:nth-child(1) a").attr("data-video") + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');

	});

	load_stories();
});



var collectionSlug = ["ipl-top-story", "ipl-videos", "ipl-videos", "ipl-social-buzz"];

function load_stories() {

	// #Stories_Explainers

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[0], function (res) {
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
			$('#Stories_User_Generated').append(element);
		});
	});

	// #Stories_Party_Left

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[2], function (res) {
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

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[3], function (res) {
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

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[1], function (res) {
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

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[2], function (res) {
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

	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[3], function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(3, 8);
		var elements = stories.map(function (story) {
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=900&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
		});
		elements.forEach(function (element) {
			$('.story-slider').append(element);
		});
		load_slider_stories();
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

function load_slider_stories() {
	$('.story-slider').slick({
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
const launchDate = new Date('May 15, 2018 13:00:00').getTime();

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
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
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



