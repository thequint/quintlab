// KEY EVENTS

$(document).ready(function() {
    // $.getJSON('http://thequint-labs.rio.quintype.io/api/v1/stories/e5141214-38ca-4e67-8eff-14b006cee565', function(res) {
    // $.getJSON('https://www.thequint.com/api/v1/stories/2a97e847-be14-4f8f-8c45-8fb10791ee3e', function(res) {
    // $.getJSON('http://thequint-labs.rio.quintype.io/api/v1/stories/e5141214-38ca-4e67-8eff-14b006cee565', function(res) {
    $.getJSON('https://thequint-labs.madrid.quintype.io/api/v1/stories/e5141214-38ca-4e67-8eff-14b006cee565', function(res) {

        console.log(res)
       $("#asian_game_carousel").css("display", "block");


        var lastStory = res.story;
        var cards = lastStory.cards;
        var cardsWithImages = cards.filter(function(card) {
            return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
        }).slice(0, 10)
        elements = cardsWithImages.map(function(card) {
            var imageKey;
            var titleElement;
            if (card.metadata) {
                if (card && card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'][0] == "true") {
                    var imageElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'image' });
                    titleElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'title' }) || {};
                    imageKey = (imageElement || {})["image-s3-key"];
                }
            }
            if (imageKey) {
                return '<div class="story-list"><div class="story-item"><a href="http://www.thequint.com/' + lastStory.slug + '" target="blank"><figure><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=35&amp;w=270&amp;fm=pjpg" /></figure></a></div></div>'
            }

        });
        elements.forEach(function(element) {
            if (element) {
                $('#key-events').append(element);
                console.log(element);

            }
        });
        sectionCarousel();

    });
});

function sectionCarousel(){
    $('.slider-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    //centerMode: true,
                    variableWidth: true
                }
            }
        ]
    });
}

// $(document).ready(function() {
//     setTimeout(function() {
//         $('.slider-1').slick({
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             autoplay: true,
//             arrows: true,
//             autoplaySpeed: 2000,
//             responsive: [{
//                     breakpoint: 959,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1
//                     }
//                 },
//                 {
//                     breakpoint: 639,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         arrows: false,
//                         //centerMode: true,
//                         variableWidth: true
//                     }
//                 }
//             ]
//         });
//         $('.slider-1').removeClass('load-slider');
//     }, 6000);
// });