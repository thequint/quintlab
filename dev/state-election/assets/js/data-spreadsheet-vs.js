var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1HInLE5YutQ-aaayFh-RQtbfdE8U-Yr8Dfg77HJcOP4U/pubhtml';

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
	"use strict";
	sheet_data = data;
	display_data();

	//console.log(sheet_data);
}


function display_data() {

	"use strict";

	// table data

	$('#Party_Result').html('<tr><td>' + sheet_data[0].Party_Lists_English + '</td><td>' + sheet_data[0].Party_Seats + '</td></tr><tr><td>' + sheet_data[1].Party_Lists_English + '</td><td>' + sheet_data[1].Party_Seats + '</td></tr><tr><td>' + sheet_data[2].Party_Lists_English + '</td><td>' + sheet_data[2].Party_Seats + '</td></tr><tr><td>' + sheet_data[3].Party_Lists_English + '</td><td>' + sheet_data[3].Party_Seats + '</td></tr>');
	
	$('#Party_Result_hi').html('<tr><td>' + sheet_data[0].Party_Lists_Hindi + '</td><td>' + sheet_data[0].Party_Seats + '</td></tr><tr><td>' + sheet_data[1].Party_Lists_Hindi + '</td><td>' + sheet_data[1].Party_Seats + '</td></tr><tr><td>' + sheet_data[2].Party_Lists_Hindi + '</td><td>' + sheet_data[2].Party_Seats + '</td></tr><tr><td>' + sheet_data[3].Party_Lists_Hindi + '</td><td>' + sheet_data[3].Party_Seats + '</td></tr>');
	

	$("#graph_data_state").attr("data-y", [sheet_data[0].Party_Seats] + "," + [sheet_data[1].Party_Seats] + "," + [sheet_data[2].Party_Seats] + "," + [sheet_data[3].Party_Seats]);

	create_graph("graph_data_state");

	// clc

	var party_result_1 = parseInt(sheet_data[0].Party_Seats);
	var party_result_2 = parseInt(sheet_data[1].Party_Seats);
	//console.log(party_result_1+"|"+party_result_2);
	if (party_result_1 > party_result_2) {
		//console.log("party_1")
		$('.emo-party_1').addClass('is-happy');
		$('.emo-party_2').addClass('is-sad');
	} else if (party_result_1 < party_result_2) {
		//console.log("party_2")
		$('.emo-party_1').addClass('is-sad');
		$('.emo-party_2').addClass('is-happy');
	} else if (party_result_1 == party_result_2) {
		//console.log("party_same")
		$('.emo-party_1').addClass('is-happy');
		$('.emo-party_2').addClass('is-happy');
	}
	
	
	$('.result-wrapper').removeClass('is-hide');

	// Content and Videos

	$('#Political_Gunpowder').text(sheet_data[0].Political_Gunpowder);
	$('#My_Report').text(sheet_data[0].My_Report);
	$('#Namma_Election').text(sheet_data[0].Namma_Election);


	for (var index = sheet_data.length - 1; index >= 0; index--) {

		$('#vs-slider').append('<div class="vs-list"><div class="single-list" data-src="https://www.youtube.com/embed/' + sheet_data[index].Video_BJP + '/?autoplay=1"><h3>BJP</h3><div class="embed-content"><img class="poster" src="https://img.youtube.com/vi/' + sheet_data[index].Video_BJP + '/mqdefault.jpg" alt=""><iframe src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div><div class="single-list" data-src="https://www.youtube.com/embed/' + sheet_data[index].Video_Congress + '/?autoplay=1"><h3>Congress</h3><div class="embed-content"><img class="poster" src="https://img.youtube.com/vi/' + sheet_data[index].Video_Congress + '/mqdefault.jpg" alt=""><iframe src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div></div>');
	}

	load_vs_slider();


	$('.single-list').click(function () {

		$('.single-list').removeClass('is-active');

		$('.single-list').find('iframe').attr('src', '');

		$(this).addClass('is-active');

		$(this).find('iframe').attr('src', $(this).attr('data-src'));

	});

}

function load_vs_slider() {
	$('#vs-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		dots: true,
		autoplaySpeed: 2500,
	});


	$("#vs-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {

		$('.single-list').removeClass('is-active');

		$('.single-list').find('iframe').attr('src', '');

	});


}


// Create Graph

function create_graph(id) {
	"use strict";

	var selection_x = $("#" + id).data("x").split(',').map(JSON.parse);
	var selection_y = $("#" + id).data("y").split(',').map(JSON.parse);
	var graph_data = [];

	for (var i = 0; i < selection_x.length; i++) {
		graph_data.push({
			"name": selection_x[i],
			"value": selection_y[i]
		});
	}
	//alert(id);
	var seat_var=1;
	if(graph_data[0].value==0 && graph_data[1].value==0 && graph_data[2].value==0 && graph_data[3].value==0)
		{
			var seat_value_array	= [ 1,1,1,1 ];
			$(".result-graph").addClass("tooltip-hide");
			
		}
	else
		{
	var seat_value_array	= [ graph_data[0].value,graph_data[1].value,graph_data[2].value,graph_data[3].value ];
		}
	console.log(seat_value_array	);
	$("#" + id).highcharts({

		colors: ['#f15a25', '#0071bd', '#006837', '#2cddbb', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
			'#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
		],

		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		title: {
			text: '',
			align: 'center',
			verticalAlign: 'middle',
			y: 40
		},
		tooltip: {
			//pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			formatter: function () {
				return '<b>' + this.point.name + '</b>: ' + this.point.y;
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white',
						fontSize: '14px'

					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%']
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share' + id,
			innerSize: '0%',
			data: [
				[graph_data[0].name, seat_value_array[0]],
				[graph_data[1].name, seat_value_array[1]],
				[graph_data[2].name, seat_value_array[2]],
				[graph_data[3].name, seat_value_array[3]],

			]
		}]
	});


}
