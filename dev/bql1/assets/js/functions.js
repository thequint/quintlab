
$("#scrollDown").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });



$(".share-ico").click(function (e) {
	$(".social-ico").slideToggle(400);
	return false;
});

$("body").click(function () {
	$(".social-ico").slideUp();
});


new WOW().init();

var collectionSlug = 'the-quint-lab';
$.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function (res) {
	var stories = res.items.filter(function (item) {
		return item.type == 'story'
	}).map(function (item) {
		return item.story
	}).slice(0, 18);
	var elements = stories.map(function (story) {
		return '<li class="wow fadeInUp" data-wow-delay=".3s" data-wow-offset="10"><figure><a href="http://www.thequint.com/' + story.slug + '" target="blank"><div class="list-image"><img src="assets/images/placehold.png" alt=""><div class="bg-image" style="background-image:url(https://images.assettype.com/' + story['hero-image-s3-key'] + ')"></div></div><figcaption><p>' + story.headline + '</p></figcaption></a></figure></li>'
	});
	elements.forEach(function (element) {
		$('#ListStories').append(element);
	});
});
