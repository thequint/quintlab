// Function for append table 

$(document).ready(function () {
	var tableContent = $('.table-content').html();
	var tableContent_1 = $('.table-content-1').html();
	$('.box-info').html(tableContent);
	//$('.election-data').html(tableContent_1);

});



function frame_slider() {

	$('.slider-frame-1').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [

			{
				breakpoint: 601,
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
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%']
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share'+id,
			innerSize: '0%',
			data: [
				[graph_data[0].name, graph_data[0].value],
				[graph_data[1].name, graph_data[1].value],
				[graph_data[2].name, graph_data[2].value],

			]
		}]
	});

	
}


/*

var selection_x = $("#graph_data_himachal").data("x").split(',').map(JSON.parse);
var selection_y = $("#graph_data_himachal").data("y").split(',').map(JSON.parse);
var graph_data=[];

for(var i=0;i<selection_x.length;i++)
{
graph_data.push({"name":selection_x[i], "value":selection_y[i]});
}

Highcharts.chart('graph_data_himachal', {
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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            [graph_data[0].name,  graph_data[0].value],
            [graph_data[1].name,  graph_data[1].value],
            [graph_data[2].name,  graph_data[2].value],
           
        ]
    }]
});


*/