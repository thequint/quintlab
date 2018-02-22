
var category_array = [
	{name:"In Love", icon:"heart-icon.svg"}, 
	{name:"Soulful", icon:"soulful-icon.svg"}, 
	{name:"Let's party", icon:"party-icon.svg"},
	{name:"Love Hell", icon:"heartbreak-icon.svg"},
	{name:"Surprise Me", icon:"surprise-icon.svg"}, 
	{name:"Filmy", icon:"filmy-icon.svg"}
];

function pie_events() {

	//$("#svg_circle path").click(function(){
	//console.log($(this).attr('fill'));
	var color_attr = $(this).attr('fill');

	$("#svg_circle path").mouseover(function(){
		var color_attr = $(this).attr('fill');
		$(".main-wrap").css('background', color_attr);
	});

	$("#svg_circle path").mouseout(function(){
		$(".main-wrap").css('background', '#302f37');
	});

	$("#svg_circle path").click(function(){

		if(($(this).attr("data-title-2") =="undefined") && ($(this).attr("data-track-2") =="undefined")){

		//if ( (!$(this).hasClass("current")) && (!$("body").hasClass("home"))  ){

			$(".track-btn").hide();
		}else{
			$(".track-btn").show();
		}
		
		$(".main-wrap--container").addClass("slide");

		// Data Title #1
		var data_title_1 = $(this).attr('data-title-1');
		$(".iframe-section .song-name marquee").html(data_title_1);
		$(".song-footer .btn-track01").attr('data-title-1', data_title_1);

		// Data Title #2
		var data_title_2 = $(this).attr('data-title-2');
		console.log(data_title_2);
		$(".song-footer .btn-track02").attr('data-title-2', data_title_2);

		// Data Track #1
		var data_track_1 = $(this).attr('data-track-1');
		$(".iframe-section .song-iframe").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+data_track_1+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");

		// Data Track #1
		$(".song-footer .btn-track01").attr('data-track-1', data_track_1);

		// Data Track #2
		var data_track_2 = $(this).attr('data-track-2');
		console.log(data_track_2);
		$(".song-footer .btn-track02").attr('data-track-2', data_track_2);


		var data_mood_icon = $(this).attr('data-mood-icon');
		//$(".play-icon li").attr('data-mood-icon', data_mood_icon);

		$(".play-icon li").eq($(this).index()).addClass("hvr-ripple-out");
		

	});
	$(".play-icon li").click(function(){

		$(".btn-track02.track-btn").removeClass("active");
		$(".btn-track01.track-btn").addClass("active");

		$(".play-icon li").removeClass("hvr-ripple-out");
		$(this).addClass("hvr-ripple-out");

		var data_title_1 = $(this).attr('data-title-1');
		console.log(data_title_1);
		$(".iframe-section .song-name marquee").html(data_title_1);

		var data_track_1 = $(this).attr('data-track-1');
		console.log(data_track_1);
		$(".iframe-section .song-iframe").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+data_track_1+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
		
		if($(this).attr("data-title-2") =="undefined"){
			$(".track-btn").hide();
		}else{
			$(".track-btn").show();
		}

	});

	$(".song-footer .btn-track01").click(function(){

		$(".track-btn").removeClass("active");
		$(this).addClass("active");

		var data_title_1 = $(this).attr('data-title-1');
		$(".iframe-section .song-name marquee").html(data_title_1);

		var data_track_1 = $(this).attr('data-track-1');
		$(".iframe-section .song-iframe").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+data_track_1+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
	});


	$(".song-footer .btn-track02").click(function(){

		$(".track-btn").removeClass("active");
		$(this).addClass("active");

		var data_title_2 = $(this).attr('data-title-2');
		$(".iframe-section .song-name marquee").html(data_title_2);

		var data_track_2 = $(this).attr('data-track-2');
		$(".iframe-section .song-iframe").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+data_track_2+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
	});



	$(".back-btn").click(function(){
        $(".main-wrap--container").removeClass("slide");
        $(".iframe-section .song-iframe").html('');
    });
}


// Create PIE
function create_pie() {
	 $("#svg-labels").html("");
	 $(".play-icon").html("");
	sectors = calculateSectors(dashboard_data);
	var newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	newSVG.setAttributeNS(null, 'style', "width: " + dashboard_data.size + "px; height: " + dashboard_data.size + "px");
	$("#svg_circle").html("")
	$("#svg_circle")[0].appendChild(newSVG)// adding code to body

	sectors.map(function(sector) {
		//console.log(sector);
	    var newSector = document.createElementNS("http://www.w3.org/2000/svg", "path");
	    newSector.setAttributeNS(null, 'fill', sector.color);
	    newSector.setAttributeNS(null, 'd', 'M' + sector.L + ',' + sector.L + ' L' + sector.L + ',0 A' + sector.L + ',' + sector.L + ' 0 ' + sector.arcSweep + ',1 ' + sector.X + ', ' + sector.Y + ' z');
	    newSector.setAttributeNS(null, 'transform', 'rotate(' + sector.R + ', ' + sector.L + ', ' + sector.L + ')');

	    newSector.setAttribute('id', sector.moods);

	    newSector.setAttribute('data-mood', sector.moods);
	    newSector.setAttribute('data-mood-icon', sector.moods_icon);
	    newSector.setAttribute('data-title-1', sector.title_1);
	    newSector.setAttribute('data-track-1', sector.track_1);

	    newSector.setAttribute('data-title-2', sector.title_2);
	    newSector.setAttribute('data-track-2', sector.track_2);
		//console.log(sector)

	    newSVG.appendChild(newSector);
	    $("#svg-labels").append("<li>"+sector.moods+"</li>");

	    //$(".song-footer .btn-track01").attr('data-title-1', sector.title_1);

	    // $(".btn-track01").append("<li data-title-1="+sector.title_1+" data-track-1="+sector.track_1+">"+sector.moods+"</li>");

	    //$(".play-icon").append("<li data-title-1="+sector.title_1+"data-track-1="+sector.track_1+">"+"<img src='jukebox/assets/images/"+sector.moods_icon+"'>"+"</li>");

	    $(".play-icon").append("<li data-title-1='"+sector.title_1+"' data-track-1='"+sector.track_1+"' data-title-2='"+sector.title_2+"' data-track-2='"+sector.track_2+"'><img src='jukebox/assets/images/"+sector.moods_icon+"'></li>");
	})

	var midCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	midCircle.setAttributeNS(null, 'cx', dashboard_data.size * 0.5);
	midCircle.setAttributeNS(null, 'cy', dashboard_data.size * 0.5);
	midCircle.setAttributeNS(null, 'r', dashboard_data.size * 0.14);
	midCircle.setAttributeNS(null, 'fill', '#424149');

	newSVG.appendChild(midCircle);
}



function calculateSectors(dashboard_data) {
    var sectors = [];
    var colors = [
        "#e94d4b", "#fdd44d", "#02a2a4", "#d3d1bc",  "#f29a99", "#e94d4b", "#fdd44d", "#02a2a4", "#d3d1bc",  "#f29a99"
    ];

    var l = dashboard_data.size / 2
    var a = 0 // Angle
    var aRad = 0 // Angle in Rad
    var z = 0 // Size z
    var x = 0 // Side x
    var y = 0 // Side y
    var X = 0 // SVG X coordinate
    var Y = 0 // SVG Y coordinate
    var R = 0 // Rotation


    dashboard_data.sectors.map(function(item, key) {
        a = 360 * item.percentage;
        aCalc = (a > 180) ? 360 - a : a;
        aRad = aCalc * Math.PI / 180;
        z = Math.sqrt(2 * l * l - (2 * l * l * Math.cos(aRad)));
        if (aCalc <= 90) {
            x = l * Math.sin(aRad);
        } else {
            x = l * Math.sin((180 - aCalc) * Math.PI / 180);
        }

        y = Math.sqrt(z * z - x * x);
        Y = y;

        if (a <= 180) {
            X = l + x;
            arcSweep = 0;
        } else {
            X = l - x;
            arcSweep = 1;
        }

        sectors.push({
            percentage: item.percentage,
            moods: item.moods,
            moods_icon:item.moods_icon,
            title_1: item.title_1,
            track_1: item.track_1,
            title_2: item.title_2,
            track_2: item.track_2,
            color: colors[key],
            arcSweep: arcSweep,
            L: l,
            X: X,
            Y: Y,
            R: R
        });

        R = R + a;
    })
    return sectors
}
    


// Jukebox animation
/*
var isPause = 0;
//
$("#svg_circle").mouseover(function(){
    isPause=1;
    $(".rotating").addClass("paused");
})
$("#svg_circle").mouseout(function(){
    isPause=0;
    $(".rotating").removeClass("paused");
});

$('#svg_circle').mouseover(function () {
    $('.pin-bottom').addClass('pin-rotate');
});
$('#svg_circle').mouseout(function () {
    $('.pin-bottom').removeClass('pin-rotate');
});*/