//var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1BEnGjJDIAW_LdOKsBtVd_RdlPORnfC-P-gg1RIgSPJU/pubhtml';
var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1zPdOwtrX29QFF0pBINoe1TLwcPoDdI8oheRQmUvi28Q/pubhtml';


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
}


function display_data() {
	for (var index = sheet_data.length - 1; index >= 0; index--) {
		$('#tab-1 ul').append('<li><a data-video="'+sheet_data[index].Video_Tab_1+'" href="javascript:void(0);"><img src="https://img.youtube.com/vi/'+sheet_data[index].Video_Tab_1+'/mqdefault.jpg" alt=""></a></li>');
	}
	
	for (var index = sheet_data.length - 1; index >= 0; index--) {
		$('#tab-2 ul').append('<li><a data-video="'+sheet_data[index].Video_Tab_2+'" href="javascript:void(0);"><img src="https://img.youtube.com/vi/'+sheet_data[index].Video_Tab_2+'/mqdefault.jpg" alt=""></a></li>');
	}
	
	for (var index = sheet_data.length - 1; index >= 0; index--) {
		$('#tab-3 ul').append('<li><a data-video="'+sheet_data[index].Video_Tab_3+'" href="javascript:void(0);"><img src="https://img.youtube.com/vi/'+sheet_data[index].Video_Tab_3+'/mqdefault.jpg" alt=""></a></li>');
	}
	
	$('#VideoPrev').html('<iframe src="https://www.youtube.com/embed/'+sheet_data[sheet_data.length - 1].Video_Tab_1+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	
	
	
	
	$('.list li a').click(function(){
		$('#VideoPrev').html('<iframe src="https://www.youtube.com/embed/'+$(this).attr('data-video')+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		$(".tab-content.current li:nth-child(1) a").attr("data-video");
		console.log();
	});
}
