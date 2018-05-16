$.getJSON('https://www.thequint.com/api/v1/stories/ef493449-f7cd-4fee-8200-45838da42405', function(res) {
    var lastStory = res.story;
    var cards = lastStory.cards;
    var cardsWithImages = cards.filter(function(card) {
      return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
    }).slice(0,5)
    elements = cardsWithImages.map(function(card) {
      var imageKey;
      var titleElement;
      if(card.metadata){
        if(card && card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'][0]=="true" ){
          var imageElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'image'});
          titleElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'title'}) || {};  
          imageKey= (imageElement || {})["image-s3-key"];
        }
      }
     	
		if(imageKey){
        return '<figure><a target="_blank" href="http://www.thequint.com/' + lastStory.slug + '"><div class="story-image"><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=100&amp;w=420&amp;fm=pjpg" alt="' + titleElement.text + '"></div><figcaption> <span>' + titleElement.text + '</span> </figcaption></a></figure>'
			
			
			
			
      }
		
    });
    elements.forEach(function(element) {
      if(element){
        $('#StorySlider_1').append(element);
		 console.log(elements); 
      }
    });
	  
	  Stor