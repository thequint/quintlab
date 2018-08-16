

// Charts


$(document).ready(function(){
    $("#tabs ul li a.tab-nav").click(function(){
		
		
		

$(function () {
$('#punjabvote').highcharts({  colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],

	chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Total<br>Seats<br>117',
            align: 'center',
            verticalAlign: 'middle',
            y: -20
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
                        color: 'white'
                    }
                },
                startAngle: -180,
                endAngle: 180,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Punjab Legislative Assembly <br> Election 2012 Results',
            innerSize: '50%',
            data: [
                ['INC',   46],
                ['BJP',   12],
                ['SAD', 56],
                ['IND',    3],
                
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]

});
});

$(function () {

    var ranges = [
     
       
        ],
        averages = [
            [2000, 7331],
            [2001, 10732],
            [2002, 7927],
			  [2003, 2821],
            [2004, 3785],
			  [2005, 4397],
            [2006, 4960],
			  [2007, 6144],
            [2008, 8009],
			  [2009, 7522],
            [2010, 6272],
			  [2011, 7702],
            [2012, 6202],
			  [2013, 7078],
            [2014, 8075],
			  [2015, 8538]
        ];


   $('#chart2').highcharts({
	     colors: ['#CB2826'],

        title: {
            text: 'Title Here'
        },

        xAxis: {
            type: 'year'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: false
        },

        legend: {
        },

        series: [{showInLegend: false,
            name: false,
            data: averages,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: '#CB2826' 
            }
        }, {
            name: 'Range',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }]
    });
});

$(function () {
    Highcharts.chart('punjabcrorepatis', {colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Percentage of Crorepatis in Political Parties'
        },
        series: [{
            name: 'Percentage',
            data: [
                ['SAD', 23.7],
                ['INC', 16.1],
                ['BJP', 14.2],
                ['AAP', 14.0],
                ['Apna<br>Punjab<br>Party', 12.5],
                ['IND', 12.1],
                ['SAD(A)', 11.8]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});

$(function () {
    Highcharts.chart('punjabpartycriminal', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'INC',
                'AAP',
                'SAD',
                'BJP',
                'Apna Punjab Party',
                'SAD(A)',
                'Independent'
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '% of Candidates'
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: '% of candidates with criminal cases',
            color: 'rgba(165,170,217,1)',
            data: [12, 11, 11, 9, 9, 9, 6],
            pointPadding: 0.1,
            pointPlacement: -0
        }, {
            name: '% of candidates with serious criminal cases',
            color: 'rgba(126,86,134,.9)',
            data: [8, 9, 9, 4, 7, 9, 6],
            pointPadding: 0.1,
            pointPlacement: -0
        }]
    });
});

$(function () {
    $(document).ready(function () {

        // Build the chart
        Highcharts.chart('educationpunjab', { colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				formatter: function() {
      			return '<b>'+ this.point.name +'</b>: '+ this.point.y ;
   			}
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                name: 'Education',
                colorByPoint: true,
                data: [{
                    name: 'Illiterate',
                    y: 41
                }, {
                    name: 'Literate',
                    y: 14
                   
                }, {
                    name: '5th Pass',
                    y: 76
                }, {
                    name: '8th Pass',
                    y: 117
                }, {
                    name: '10th Pass',
                    y: 280
                }, {
                    name: '12th Pass',
                    y: 214
                }, {
                    name: 'Graduate',
                    y: 144
                }, {
                    name: 'Graduate Professional',
                    y: 98
                }, {
                    name: 'Post Graduate',
                    y: 117
                }, {
                    name: 'Doctorate',
                    y: 6
                }, {
                    name: 'Ot',
                    y: 26
                }, {
                    name: 'Not Given',
                    y: 11
                }]
            }]
        });
    });
});
		

$(function () {
    Highcharts.chart('ukcrorepatis', {colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Percentage of Crorepatis in Political Parties'
        },
        series: [{
            name: 'Percentage',
            data: [
                ['INC', 74],
                ['BJP', 69],
                ['BSP', 28],
                ['UKD', 24],
                ['IND', 20],
                ['SP', 20]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});

$(function () {
    Highcharts.chart('ukpartycriminal', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'BJP',
                'INC',
                'IND',
                'BSP',
                'SP',
                'UKD'         ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '% of Candidates'
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: '% of candidates with criminal cases',
            color: 'rgba(165,170,217,1)',
            data: [27, 24, 12, 10, 10, 7],
            pointPadding: 0.1,
            pointPlacement: -0
        }, {
            name: '% of candidates with serious criminal cases',
            color: 'rgba(126,86,134,.9)',
            data: [14, 17, 5, 9, 10, 6],
            pointPadding: 0.1,
            pointPlacement: -0
        }]
    });
});
		
$(function () {
    $(document).ready(function () {

        // Build the chart
        Highcharts.chart('educationuk', { colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				formatter: function() {
      			return '<b>'+ this.point.name +'</b>: '+ this.point.y ;
   			}
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                name: 'Education',
                colorByPoint: true,
                data: [{
                    name: 'Illiterate',
                    y: 6
                }, {
                    name: 'Literate',
                    y: 26
                   
                }, {
                    name: '5th Pass',
                    y: 17
                }, {
                    name: '8th Pass',
                    y: 51
                }, {
                    name: '10th Pass',
                    y: 91
                }, {
                    name: '12th Pass',
                    y: 97
                }, {
                    name: 'Graduate',
                    y: 134
                }, {
                    name: 'Graduate Professional',
                    y: 55
                }, {
                    name: 'Post Graduate',
                    y: 131
                }, {
                    name: 'Doctorate',
                    y: 20
                }, {
                    name: 'Ot',
                    y: 9
                }]
            }]
        });
    });
});
		
		
		
		
		
               
// chart data here without function
 
$('#goavote').highcharts({  
	 colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],

	chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Total<br>Seats<br>40',
            align: 'center',
            verticalAlign: 'middle',
            y: -20
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
                        color: 'white'
                    }
                },
                startAngle: -180,
                endAngle: 180,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Goa Legislative Assembly <br> Election 2012 Results',
            innerSize: '50%',
            data: [
                ['BJP',   21],
                ['GVP',   2],
                ['IND', 5],
                ['INC',    9],
                ['MAG', 3],
                
            ]
        }]

});
$('#upvote').highcharts({
	colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],

	chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Total<br>Seats<br>403',
            align: 'center',
            verticalAlign: 'middle',
            y: -20
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
                        color: 'white'
                    }
                },
                startAngle: -180,
                endAngle: 180,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Uttar Pradesh Legislative Assembly <br> Election 2012 Results',
            innerSize: '50%',
            data: [
                ['SP',   224],
                ['BSP',   80],
                ['BJP', 47],
                ['INC',    28],
                 ['Ot',   24],
               
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]

});
$('#ukvote').highcharts({
	colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],

	chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Total<br>Seats<br>70',
            align: 'center',
            verticalAlign: 'middle',
            y: -20
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
                        color: 'white'
                    }
                },
                startAngle: -180,
                endAngle: 180,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Uttarakhand Legislative Assembly <br> Election 2012 Results',
            innerSize: '50%',
            data: [
                ['INC',   32],
                ['BJP',   31],
                ['BSP', 3],
                ['UKD(P)',    1],
                ['IND', 3],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]

});
$('#manipurvote').highcharts({
	colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],

	chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Total<br>Seats<br>60',
            align: 'center',
            verticalAlign: 'middle',
            y: -20
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
                        color: 'white'
                    }
                },
                startAngle: -180,
                endAngle: 180,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Manipur Legislative Assembly <br> Election 2012 Results',
            innerSize: '50%',
            data: [
                ['INC',   42],
                ['NCP',   1],
                ['AITC', 7],
                ['LJP',   1],
				['MSCP', 5],
				['NPF', 4],
                
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]

});
 
$(function () {
    Highcharts.chart('goacrorepatis', {colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Percentage of Crorepatis in Political Parties'
        },
        series: [{
            name: 'Percentage',
            data: [
                ['BJP', 97],
                ['INC', 92],
                ['IND', 47],
                ['AAP', 49],
                ['Maharashtrawad<br>Gomantak', 52],
                ['NCP', 59]            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});

$(function () {
    Highcharts.chart('goapartycriminal', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'AAP',
                'INC',
                'BJP',
                'Maharashtrawadi Gomantak',
                'NCP',
                'Independent'
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '% of Candidates'
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: '% of candidates with criminal cases',
            color: 'rgba(165,170,217,1)',
            data: [8, 24, 17, 8, 29, 16],
            pointPadding: 0.1,
            pointPlacement: -0
        }, {
            name: '% of candidates with serious criminal cases',
            color: 'rgba(126,86,134,.9)',
            data: [0, 16, 8, 8, 6, 7],
            pointPadding: 0.1,
            pointPlacement: -0
        }]
    });
});

  $(document).ready(function () {

        // Build the chart
        Highcharts.chart('educationgoa', { colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				formatter: function() {
      			return '<b>'+ this.point.name +'</b>: '+ this.point.y ;
   			}
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{colors: ['#461211', '#CB2826', '#FAA31B', '#FFCC06', '#D9B89C', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                name: 'Education',
                colorByPoint: true,
                data: [{
                    name: 'Illiterate',
                    y: 1
                },  {
                    name: '5th Pass',
                    y: 9
                }, {
                    name: '8th Pass',
                    y: 19
                }, {
                    name: '10th Pass',
                    y: 56
                }, {
                    name: '12th Pass',
                    y: 43
                }, {
                    name: 'Graduate',
                    y: 58
                }, {
                    name: 'Graduate Professional',
                    y: 21
                }, {
                    name: 'Post Graduate',
                    y: 23
                }, {
                    name: 'Ot',
                    y: 21
                }]
            }]
        });
    });


    });
});