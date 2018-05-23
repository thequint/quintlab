var collectionSlug = ["ipl-top-story"];

$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug[0], function (res) {
	var stories = res.items.filter(function (item) {
		return item.type == 'story'
	}).map(function (item) {
		return item.story
	}).slice(0, 5);
	var elements = stories.map(function (story) {
		return '<li><a target="_blank" href="http://www.thequint.com/' + story.slug + '">' + story.headline + '</a></li>'
	});
	elements.forEach(function (element) {
		$('.stories ul').append(element);
	});
});

// Data Change functions

$('.data-groups li:first-child').addClass('active');
var story_flag = 0;
$('.data-groups li').click(function () {


	if (story_flag == 0) {
		story_flag = 1;
		$('.data-groups li').removeClass('active');
		$(this).addClass('active');
		$('.group-details h4').html($(this).find('a').text());
		$('.stories h5 span').html($(this).find('a').text());
		update_group($(this).attr('data-group'));
		$('.stories ul').html('');


		var Group_collectionSlug = $(this).attr('data-slug');

		$.getJSON('https://www.thequint.com/api/v1/collections/' + Group_collectionSlug, function (res) {
			var stories = res.items.filter(function (item) {
				return item.type == 'story'
			}).map(function (item) {
				return item.story
			}).slice(0, 5);
			var elements = stories.map(function (story) {
				return '<li><a target="_blank" href="http://www.thequint.com/' + story.slug + '">' + story.headline + '</a></li>'
			});
			elements.forEach(function (element) {
				$('.stories ul').append(element);
			});
			story_flag = 0;
		});

	}

});


$('.matches').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: false,
	arrows: false,
	autoplaySpeed: 2500,
  	responsive: [
    {
      breakpoint: 959,
      settings: {
        slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true
      }
    }
 
  ]
});

