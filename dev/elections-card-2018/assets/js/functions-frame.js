// Function for append table 

$(document).ready(function () {
	var tableContent = $('.table-content').html();
	var tableContent_1 = $('.table-content-1').html();
	$('.box-info').html(tableContent);
	//$('.election-data').html(tableContent_1);

});



function frame_slider() {

	$('.slider-frame-1').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2000,
		dots: true,
		infinite: false,
		nextArrow: '<i class="arrow-right"></i>',
		prevArrow: '<i class="arrow-left"></i>',
		responsive: [

			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});
}


function create_graph(id) {

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
	
    $("#" + id).highcharts({
		
		colors: ['#f15a25', '#0071bd', '#006837', '#555', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
		// FFCC06
		
		
		
		
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
			formatter: function() {
      			return '<b>'+ this.point.name +'</b>: '+ this.point.y ;
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
						fontSize:'24px'
						
					}
				},
				// startAngle: -90,
				startAngle: -280,
				endAngle: 90,
				center: ['50%', '50%'],
				size: '108%'
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share'+id,
			// innerSize: '0%',
			innerSize: '30%',
			data: [
				[graph_data[0].name, graph_data[0].value],
				[graph_data[1].name, graph_data[1].value],
				[graph_data[2].name, graph_data[2].value],
				[graph_data[3].name, graph_data[3].value],
			]
		}]
	});

	
}

