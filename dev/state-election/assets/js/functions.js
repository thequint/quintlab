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
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=600&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
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
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=600&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
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
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=600&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
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
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=600&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
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
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=600&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
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
			return '<figure><a target="_blank" href="http://www.thequint.com/' + story.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=100&w=600&fm=pjpg" alt=""></div><figcaption> <span>' + story.headline + '</span> </figcaption></a></figure>'
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
