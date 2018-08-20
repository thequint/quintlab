// KEY EVENTS

$(document).ready(function() {
    // $.getJSON('https://www.thequint.com/api/v1/stories/20bce1b6-bd22-4427-954a-a7a7a42c09bd', function(res) { // Day #1
    // $.getJSON('https://www.thequint.com/api/v1/stories/494eeb0c-331d-497f-b378-c8f344221ae3', function(res) { // Day #2
    $.getJSON(api_url, function(res) { // Day #2
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
                return '<div class="story-list"><div class="story-item"><a href="https://www.thequint.com/' + lastStory.slug + '" target="blank"><figure><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=100&w=800&fm=pjpg" /></figure></a></div></div>'
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
                    // arrows: false,
                    //centerMode: true,
                    variableWidth: true
                }
            }
        ]
    });
}