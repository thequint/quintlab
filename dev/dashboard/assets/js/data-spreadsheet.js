function widget_Slider(){
        
	$(".regular").slick({
	    dots: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 5,
	  	slidesToScroll: 1,
	  	arrows: true,
	  	// variableWidth: true,
	  	responsive: [
	  	{
	 	    breakpoint: 1024,
	 	    settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	    	}
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	
}



var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1JBJj64JFe1Y1NqG12amKr2aXNXfAU5A9l0sJg8CZcw4/pubhtml';

var public_spreadsheet_contact_1 = 'https://docs.google.com/spreadsheets/d/1ufU5wtEPH3jNEbeov3YYpmv-vySMwTFgNcKpqinPWeI/pubhtml';


function init() {
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true
	});

	Tabletop.init({
		key: public_spreadsheet_contact_1,
		callback: showInfo_1,
		simpleSheet: true
	});
}

window.addEventListener('DOMContentLoaded', init);

var sheet_data, widget_data;

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
	// console.log(data);
}

function showInfo_1(data) {

	widget_data = data;
	
	display_data_1();

}

function display_data() {

	var selectWidth = [150,190,230,270];

	for (var index = 0; index <= sheet_data.length - 1; index++) {
		$("#grid").append("<li><a target='_blank' href='" + sheet_data[index].ProjectLink + "'><img src='" + sheet_data[index].ProjectThumb + "' width='" + selectWidth[Math.floor(Math.random() * 4)] + "%'><h3>" + sheet_data[index].ProjectName + "</h3></a></li>");
		
	}
	new GridScrollFx( document.getElementById( 'grid' ), {
			viewportFactor : 0.4
		} );
}

function display_data_1() {
	for (var index = 0; index <= widget_data.length - 1; index++) {
		console.log(index);
		$("#widgetList").append("<div class='card card-widget'><img src='" + widget_data[index].WidgetThumb + "' class='card-img-top'><div class='card-body'><h4 class='card-title'> "+ widget_data[index].WidgetName + "</h4><p class='card-text'>" + widget_data[index].WidgetDescription + "</p><a target='_blank' href='" + widget_data[index].WidgetLink + "' class='btn btn-primary'>Check it out</a></div></div>");
	}
	widget_Slider();
}