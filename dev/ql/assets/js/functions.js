new WOW().init();

var collectionSlug = 'the-quint-lab';
$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function (res) {
	var stories = res.items.filter(function (item) {
		return item.type == 'story'
	}).map(function (item) {
		return item.story
	}).slice(0, 9);
	var elements = stories.map(function (story) {
		return '<li><figure><a href="http://www.thequint.com/' + story.slug + '" target="blank"><div class="list-image"><img src="assets/images/placehold.png" alt=""><div class="bg-image" style="background-image:url(https://images.assettype.com/' + story['hero-image-s3-key'] + ')"></div></div><figcaption><p>' + story.headline + '</p></figcaption></a></figure></li>'
	});
	elements.forEach(function (element) {
		$('#ListStories').append(element);
	});
});
