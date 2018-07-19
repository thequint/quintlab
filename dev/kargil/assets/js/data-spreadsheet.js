var public_spreadsheet = 'https://docs.google.com/spreadsheets/d/1eIQah9FKiDl1lQq3bVtl1_iohyxJDxgMXwIfj_49K2k/pubhtml';

function init() {
	"use strict";
	Tabletop.init({
		key: public_spreadsheet,
		callback: showInfo,
		simpleSheet: true
	});
}

window.addEventListener('DOMContentLoaded', init);
var sheet_data;
function getParameterByName(name, url) {
	"use strict";
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function showInfo(data) {
	"use strict";
	sheet_data = data;
	display_data();
}


function display_data() {
	"use strict";
	for (var index = sheet_data.length - 1; index >= 0; index--) {

		$("#GalleryItems").append('<li data-video="' + sheet_data[index].Video + '" data-headline="' + sheet_data[index].Headline + '" data-caption="' + sheet_data[index].Caption + '"><figure><img src="' + sheet_data[index].Image + '" alt="' + sheet_data[index].Name + '"><figcaption><div>' + sheet_data[index].Name + '</div></figcaption></figure></li>');

	}


	$("#GalleryItems li").click(function () {
		$("#ItemDetails").fadeIn();
		$("#ItemDetails .embed-content").html('<iframe src="https://www.youtube.com/embed/' + $(this).attr('data-video') + '?rel=0&feature=oembed&modestbranding=0&autohide=1&showinfo=0&controls=1" frameborder="0" allowfullscreen></iframe>');
		$("#ItemDetails h3").html($(this).attr('data-headline'));
		$("#ItemDetails p").html($(this).attr('data-caption'));

	});

	$(".close-modal").click(function () {
		$('#ItemDetails').fadeOut();
		$("#ItemDetails .embed-content").html('');
	});
	
	$('#ItemDetails').click(function(evt){    
       if(evt.target.id == "modal_cont")
          return;
       //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
       if($(evt.target).closest('#modal_cont').length)
          return;             

      //Do processing of click event here for every element except with id menu_content
		$('#ItemDetails').fadeOut();
		$("#ItemDetails .embed-content").html('');

});
	
}
