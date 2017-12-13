$(document).ready(function () {
	var collectionSlug = 'mcd-polls'; 
	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 3);
		var elements = stories.map(function (story) {
			return '<div class="story-frame"><a href="https://www.thequint.com/' + story.slug + '" target="blank"><figure><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=800&fm=pjpg" /><figcaption><span>' + story.headline + '</span></figcaption></figure></a></div>'
		});
		elements.forEach(function (element) {
			$('#election-stories').append(element);
		});
		var firsr_story = $('#election-stories .story-frame:first').html();
		$('#first-story').html(firsr_story);
	});


	var collectionSlug = 'mcd-elections-videos';
	$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function (res) {
		var stories = res.items.filter(function (item) {
			return item.type == 'story'
		}).map(function (item) {
			return item.story
		}).slice(0, 5);
		var elements = stories.map(function (story) {
			return '<div class="story-list"><div class="story-item"><a href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=800&fm=pjpg" /><figcaption> ' + story.headline + '</figcaption></figure></a></div></div>'
		});
		elements.forEach(function (element) {
			$('#slider-election-stories').append(element);
		});

		video_slide();
	});

	$.getJSON('https://www.thequint.com/api/v1/stories/887ca6fb-21fe-4a7e-aa0c-33f8c032e08b', function (res) {
		var lastStory = res.story;
		var cards = lastStory.cards;
		var cardsWithImages = cards.filter(function (card) {
			return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
		}).slice(0, 10);
		elements = cardsWithImages.map(function (card) {
			var imageKey;
			var titleElement;
			if (card.metadata) {
				if (card && card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'][0] == "true") {
					var imageElement = card['story-elements'].find(function (storyElement) {
						return storyElement.type == 'image'
					});
					titleElement = card['story-elements'].find(function (storyElement) {
						return storyElement.type == 'title'
					}) || {};
					imageKey = (imageElement || {})["image-s3-key"];
				}
			}
			if (imageKey) {
				return '<div class="story-list"><div class="story-item"><a href="http://www.thequint.com/' + lastStory.slug + '" target="blank"><figure><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=100&amp;w=800&amp;fm=pjpg" /><figcaption>' + titleElement.text + '</figcaption></figure></a></div></div>'
			}
		});
		elements.forEach(function (element) {
			if (element) {
				$('#key-events').append(element);
			}
		});

		key_event();
	});


	var sections = [{
		state: 'gujarat',
		id: "dd7a8420-651a-46a8-aacf-5f29d22707dc"
	}, {
		state: 'himachal',
		id: "6bed8234-bbad-4986-8976-53d7021e7c80"
	}];
	sections.forEach(function (section, index) {
		$.getJSON('https://www.thequint.com/api/v1/stories/' + section.id, function (res) {
			var liveBlog = res.story;
			var element = '<div class="list-content"><h3><span>LIVE</span><span>' + section.state + '</span></h3><a href="https://www.thequint.com/' + liveBlog.slug + '" target="_blank"><p>' + liveBlog.headline + '</p></a></div>';
			var id = '#' + section.state + '-live-blog';
			$(id).append(element);
		});
	});
});




function key_event() {
	"use strict";
	$('.slider-1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,

				variableWidth: true
			}
		}]
	});
}


function video_slide() {
	"use strict";
	$('.video-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,

				variableWidth: true
			}
		}]
	});

}

$(window).resize(function () {
	"use strict";
	if (window.matchMedia('(max-width: 768px)').matches) {
		$(".btn-share").show();
		$(".share-icons").hide();
	} else {
		$(".btn-share").hide();
		$(".share-icons").show();
	}
});

$(document).ready(function () {
"use strict";
	$(".btn-share").click(function () {
		
		$(".share-icons").slideToggle(400);
	});

	$(document).on("click", '#btnWp', function () {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			var text = $(this).attr("data-text");
			var url = $(this).attr("data-link");
			var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
			var whatsapp_url = "whatsapp://send?text=" + message;
			window.location.href = whatsapp_url;
		} else {
			alert("Please use an Mobile Device to Share this Article");
		}
	});
});
