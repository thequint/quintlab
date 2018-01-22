var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1QOwlhGzrSaAH_A6pUcPSFFf-lUIEruE68E2pM2kbKWc/pubhtml';


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
		
		var cat_class;

      switch (sheet_data[index].Category) {
         case "Video":
            cat_class = "ctg-video";
            break;
         case "Audio":
            cat_class = "ctg-audio";
            break;
         case "Text":
            cat_class = "ctg-text";
            break;
         default:
            cat_class = "";
      }
		
		$("#listData").append("<div class='" + cat_class + "'><div class='list-el' data-video='" + sheet_data[index].Video + "' data-message='" + sheet_data[index].Message + "' data-name='" + sheet_data[index].Name + "' data-deg='" + sheet_data[index].Deg + "' data-location='" + sheet_data[index].Location + "' data-story='" + sheet_data[index].Story + "'><div class='valign'><h3>" + sheet_data[index].Topic + "</h3><h3>" + sheet_data[index].Location + "</h3></div></div></div>");
		
		/*if((sheet_data[index].Location) && (sheet_data[index].Topic))
			{
		  $("#listData").append("<div class='" + cat_class + "'><div class='list-el'><h3>" + sheet_data[index].Location + "</h3><h3>" + sheet_data[index].Topic + "</h3></div></div>");
			}
		else if(sheet_data[index].Location)
			{
			 $("#listData").append("<div class='" + cat_class + "'><div class='list-el'><h3>" + sheet_data[index].Location + "</h3></div></div>");	
			}
		else
			{
		$("#listData").append("<div class='" + cat_class + "'><div class='list-el'><h3>" + sheet_data[index].Topic + "</h3></div></div>");		
			}*/
		
	}

	load_slider();
	
	
	$('.list-el').click(function(){
		$('.card-modal').addClass('is-open');
		var data_video = $(this).attr('data-video');
		var data_message = $(this).attr('data-message');
		var data_name = $(this).attr('data-name');
		var data_deg = $(this).attr('data-deg');
		var data_location = $(this).attr('data-location');
		var data_story = $(this).attr('data-story');
		
		
		$('.data-video .frame-video').html('<iframe src="https://www.youtube.com/embed/' + data_video + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		$('.data-message p span').html(data_message);
		$('.data-name').html(data_name);
		$('.data-deg').html(data_deg);
		$('.data-location').html(data_location);
		$('.data-story').attr('href', data_story);
		
		
		/*$('.card-modal div').each(function() {
			if ( $.trim( $(this).html() ).length == 0 ) {
				if ( $(this).children().length == 0 ) {
					$(this).remove(); 
				}
			}
		});
		*/
			
		
	});
	
	
	$('.close-card').click(function(){
		$('.card-modal').removeClass('is-open');
		$('.data-video .frame-video').html('');
	});	
}


