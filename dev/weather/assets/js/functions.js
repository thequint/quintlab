
function reset_dash() {
    $(".city_border").each(function(){
        // console.log($(this).siblings(".city_temp").outerWidth());
        // console.log($(this).siblings(".city_name").outerWidth());
        // console.log($(".city_list li").width());
        $(this).css({"width":$(".city_list li").width()-($(this).siblings(".city_name").outerWidth()+$(this).siblings(".city_temp").outerWidth())-1});
    }); 
}

function init_weather_slider() // to be called on forecast success
{
//console.log($('.daily-weather--slider').html())
    $('.daily-weather--slider').slick({
        infinite: true,
        autoplay: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });	
}

function init_top_story_slider() //  call when top story success
{
 // 
    $('#SlugType_1').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });

    // 
   
	
}


function init_most_story_slider() //  call when most read success
{
	if ($(window).width() < 960) {
   
	 $('#SlugType_2').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });
		
		}
}

$(document).ready(function() {
	

   
    // 
    reset_dash();
	
		
	//Slug 1 
	
  var collectionSlug = 'top-story---home'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,3);
    var elements = stories.map(function(story) {
      return '<li><a href="https://www.thequint.com/' + story.slug + '" target="blank">'+ story.headline +'</a></li>'
    });
    elements.forEach(function(element) {
      $('#SlugType_1').append(element);
    });
	  
	init_top_story_slider();  
	  
	  
  });


//Slug 2 

	
	
  var collectionSlug = 'trending'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,6);
    var elements = stories.map(function(story) {
      return '<li><a href="https://www.thequint.com/' + story.slug + '" target="blank">'+ story.headline +'</a></li>'
    });
    elements.forEach(function(element) {
      $('#SlugType_2').append(element);
    });
	  
	init_most_story_slider();
  });


// Slug 3

  var collectionSlug = 'videos'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,6);
    var elements = stories.map(function(story) {
      return '<li><figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure></li>'
    });
    elements.forEach(function(element) {
      $('#SlugType_3').append(element);
    });
  });
	
	// Location
	
		
	$('#btnChangeLoc').click(function(){
		$(this).addClass('invisible');
		$('#LocSearch').show();
		$('#currentLoc').hide();
		$('.input-loc').val('').focus();
		
	})
	$('#locClose').click(function(){
		$('#LocSearch').hide();
		$('#btnChangeLoc').removeClass('invisible');
		$('#currentLoc').show();
	})
	
	
	
});


$(window).resize(function(){
    reset_dash();
});

