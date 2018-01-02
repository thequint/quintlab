var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1BEnGjJDIAW_LdOKsBtVd_RdlPORnfC-P-gg1RIgSPJU/pubhtml';


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

		$("#SwiperItems").append("<li class='swiper-slide' data-year='" + sheet_data[index].Year + "' data-description='" + sheet_data[index].Description + "' data-video='" + sheet_data[index].Video + "' data-discussion_1='" + sheet_data[index].Discussion_1 + "' data-discussion_2='" + sheet_data[index].Discussion_2 + "'><a href='javascript:void(0);'><img src='assets/images/avatar.svg'><img class='real-img' src='" + sheet_data[index].Image + "' alt='" + sheet_data[index].Name + "'></a></li>");
		
		
	}

	Swiper_Slider();
	
	    var Display_Name = $('.swiper-slide-active img.real-img').attr('alt');
	    var Display_Year = $('.swiper-slide-active').attr('data-year');
	    var Display_Description = $('.swiper-slide-active').attr('data-description');
		var Display_Video = $('.swiper-slide-active').attr('data-video');
	    var Display_Discussion_1 = $('.swiper-slide-active').attr('data-discussion_1');
	    var Display_Discussion_2 = $('.swiper-slide-active').attr('data-discussion_2');
	   
	
		//console.log(Display_Video);
		
		$('#DisplayName').html(Display_Name);
		$('#DisplayYear').html(Display_Year);
		$('#DisplayDescription').html(Display_Description);
	    $('#DisplayVideo').html("<iframe src='https://www.youtube.com/embed/" + Display_Video + "' frameborder='0' allowfullscreen></iframe>");
		$('#DisplayDiscussion_1').html(Display_Discussion_1);
	    $('#DisplayDiscussion_2').html(Display_Discussion_2);
	
	


}

function change_slide_data(){		
		var Display_Name = $('.swiper-slide-active img.real-img').attr('alt');
		var Display_Year = $('.swiper-slide-active').attr('data-year');
		var Display_Description = $('.swiper-slide-active').attr('data-description');
		var Display_Video = $('.swiper-slide-active').attr('data-video');
		var Display_Discussion_1 = $('.swiper-slide-active').attr('data-discussion_1');
	    var Display_Discussion_2 = $('.swiper-slide-active').attr('data-discussion_2');
		
		
		$('#DisplayName').html(Display_Name).addClass('animated fadeIn');
		$('#DisplayYear').html(Display_Year).addClass('animated fadeIn');
		$('#DisplayDescription').html(Display_Description).addClass('animated fadeIn');
		$('#DisplayVideo').html("<iframe src='https://www.youtube.com/embed/" + Display_Video + "' frameborder='0' allowfullscreen></iframe>").addClass('animated fadeIn');
		$('#DisplayDiscussion_1').html(Display_Discussion_1).addClass('animated fadeIn');
	    $('#DisplayDiscussion_2').html(Display_Discussion_2).addClass('animated fadeIn');
		
		
		setTimeout(function(){
  			$('*').removeClass('animated fadeIn');
		}, 1000);
		
	}
