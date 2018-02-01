var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/199JPak2DwRKr9X3XajdIFyHtvHe33NBFYghs8uqv6j8/pubhtml';

// https://docs.google.com/spreadsheets/d/199JPak2DwRKr9X3XajdIFyHtvHe33NBFYghs8uqv6j8/edit#gid=0
function init() {
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true
	});
}

window.addEventListener('DOMContentLoaded', init);
var sheet_data;

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

	var foo;

function display_data() {
	foo = getParameterByName('foo');
	var foo_array = foo.split(",");
	//console.log(foo_array);	
	
	for (var i=0;i<foo_array.length;i++)
		{
			$("#Cards").append("<li><figure><div class='img'><img src='"+ sheet_data[foo_array[i]].Image +"' alt='"+ sheet_data[foo_array[i]].Title +"'></div><figcaption><h2>"+ sheet_data[foo_array[i]].Title +"</h2><h3>"+ sheet_data[foo_array[i]].Subtitle +"</h3><p>"+ sheet_data[foo_array[i]].Description +"</p></figcaption></figure><div class='like reset-ops'></div><div class='dislike reset-ops'></div></li>");			
		}

	call_tinder_cards();
	
}

function showInfo(data) {
	sheet_data = data;
	display_data();
	$('.actions').removeClass('loading');
}


