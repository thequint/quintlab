
var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1WBwdCKFkjHxifSV2XiHRntzQvf28q6LvgdsVWEJuCgc/pubhtml';





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

function showInfo(data) {
	sheet_data = data;
	display_data();
	
	//console.log(sheet_data);
}


function display_data() {
	for (var index = sheet_data.length - 1; index >= 0; index--) {
		$('#Left_Sheet_Stories').append('<figure><a target="_blank" href="'+sheet_data[index].Left_Stories_Link+'"><figcaption> <span>'+sheet_data[index].Left_Stories_Headline+'</span> </figcaption></a></figure>');
	}
	
	for (var index = sheet_data.length - 1; index >= 0; index--) {
		$('#Right_Sheet_Stories').append('<figure><a target="_blank" href="'+sheet_data[index].Right_Stories_Link+'"><figcaption> <span>'+sheet_data[index].Right_Stories_Headline+'</span> </figcaption></a></figure>');
	}
	
}
