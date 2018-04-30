
var category_array = [
	{name:"In Love", icon:"in-love.svg", colors:"#e84d4b"}, 
	{name:"Love Hell", icon:"love-hell-icon.svg", colors:"#02a1a4"},
	{name:"Let's party", icon:"party-icon.svg", colors:"#fdc246"},
	{name:"Surprise Me", icon:"surprise-icon.svg", colors:"#f09a9a"}, 
	{name:"Filmy", icon:"filmy-icon.svg", colors:"#ff8c94"},
	{name:"Soulful", icon:"soulful-icon.svg", colors:"#a8a7a7"},

	{name:"Chak De!", icon:"chak-de-icon.svg", colors:"#2a363b"},
	{name:"Unplugged", icon:"unplugged-icon.svg", colors:"#83af9b"},
	{name:"Mash Up", icon:"mash-up-icon.svg", colors:"#fc913a"},
	{name:"Sa Re Gaao", icon:"sa-re-gaao-icon.svg", colors:"#f8b195"},
	{name:"Zenning", icon:"zenning-icon.svg", colors:"#d3d1bc"},
	{name:"Ooh La La", icon:"ooh-la-la-icon.svg", colors:"#fe4365"},
	{name:"Covers", icon:"covers-icon.svg", colors:"#a7226e"},
	{name:"Haste Gaate", icon:"haste-gaate-icon.svg", colors:"#ff6f69"},
	{name:"Sing Along", icon:"sing-along-icon.svg", colors:"#cc527a"}
];

// $("#svg_circle").find("svg").addClass("rotating");

function pie_events() {


	//$("#svg_circle path").click(function(){
	//console.log($(this).attr('fill'));
	var color_attr = $(this).attr('fill');

	$("#svg_circle path").mouseover(function(){
		var color_attr = $(this).attr('fill');
		$(".main-wrap").css('background', color_attr);
		if($(this).hasClass("surprise_bg")) {
			$(".main-wrap").css({"background-image": "url('https://quintlab.herokuapp.com/dev/jukebox/assets/images/bg-surprise.svg')", "background-size": "110%"});
		}
	});

	$("#svg_circle path").mouseout(function(){
		$(".main-wrap").css('background', '#302f37');
	});

	$("#svg_circle path").click(function(){

		console.log("yes")

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

		$(".play-icon li").removeClass("hvr-ripple-out");

		$(".play-icon li").eq($(this).index()).addClass("hvr-ripple-out");
		
	});



	$("#svg_circle path").mouseover(function () {
        $('.pin-bottom').addClass('pin-rotate');
    });
    $("#svg_circle path").mouseout(function () {
        $('.pin-bottom').removeClass('pin-rotate');
    });

    
	$(".play-icon li").click(function(){

		$(".btn-track02.track-btn").removeClass("active");
		$(".btn-track01.track-btn").addClass("active");

		$(".play-icon li").removeClass("hvr-ripple-out");
		$(this).addClass("hvr-ripple-out");

		var data_title_1 = $(this).attr('data-title-1');
		console.log(data_title_1);
		$(".iframe-section .song-name marquee").html(data_title_1);

		$(".song-footer .btn-track01").attr('data-title-1', data_title_1);

		var data_track_1 = $(this).attr('data-track-1');
		$(".song-footer .btn-track01").attr('data-track-1', data_track_1);

		// Data Title #2
		var data_title_2 = $(this).attr('data-title-2');
		console.log(data_title_2);
		$(".song-footer .btn-track02").attr('data-title-2', data_title_2);

		var data_track_2 = $(this).attr('data-track-2');
		console.log(data_track_2);
		$(".song-footer .btn-track02").attr('data-track-2', data_track_2);

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

		console.log(data_title_1);

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
	 dashboard_data.size =$("#svg_circle").width(); // to assign dynamic width to the container based on the screen size
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
	    if(sector.moods=="Surprise Me") {
		    
		}

	    newSector.setAttribute('data-mood-icon', sector.moods_icon);

		newSector.setAttribute('fill',sector.moods_color);
		
	    newSector.setAttribute('data-title-1', sector.title_1);
	    newSector.setAttribute('data-track-1', sector.track_1);

	    newSector.setAttribute('data-title-2', sector.title_2);
	    newSector.setAttribute('data-track-2', sector.track_2);
		//console.log(sector)

	    newSVG.appendChild(newSector);
	    $("#svg-labels").append("<li>"+sector.moods+"</li>");


	    if(sector.moods=="Surprise Me") {
		    newSector.setAttribute('class', 'surprise_bg');
		    $(".play-icon").append("<li class='surprise_icon_bg' style='background-color:"+sector.moods_color+"' data-title-1='"+sector.title_1+"' data-track-1='"+sector.track_1+"' data-title-2='"+sector.title_2+"' data-track-2='"+sector.track_2+"'><img src='https://quintlab.herokuapp.com/dev/dashboard/jukebox/assets/images/icons/"+sector.moods_icon+"'></li>");
	    }else {
	    	$(".play-icon").append("<li style='background-color:"+sector.moods_color+"' data-title-1='"+sector.title_1+"' data-track-1='"+sector.track_1+"' data-title-2='"+sector.title_2+"' data-track-2='"+sector.track_2+"'><img src='https://quintlab.herokuapp.com/dev/dashboard/jukebox/assets/images/icons/"+sector.moods_icon+"'></li>");
	    }

	});

//class='"+sector.moods_color+"'

	var midCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	midCircle.setAttributeNS(null, 'cx', dashboard_data.size * 0.5);
	midCircle.setAttributeNS(null, 'cy', dashboard_data.size * 0.5);
	midCircle.setAttributeNS(null, 'r', dashboard_data.size * 0.14);
	midCircle.setAttributeNS(null, 'fill', '#302f37');

	newSVG.appendChild(midCircle);



	$("#svg_circle").append("<ul id='pie_labels'></ul>")
    $("#svg_circle").append("<ul id='pie_icons'></ul>")
    
    var n = $("#svg_circle path").length;
    $("#svg_circle path").each(function(index){
        var angle=((360/(n*2))+(360*index/n))
        console.log(n+"|"+angle);
        $("#svg_circle ul#pie_labels").append("<li style='transform:rotate("+ ((360/(n*2))+(360*index/n))+"deg)'>"+$(this).attr("data-mood")+"</li>")
        
        $("#svg_circle ul#pie_icons").append("<li style='transform:rotate("+ ((360/(n*2))+(360*index/n))+"deg)'><img src='https://quintlab.herokuapp.com/dev/dashboard/jukebox/assets/images/icons/"+$(this).attr("data-mood-icon")+"'></li>")
        console.log($(this).attr("data-mood"));
        
    })
    $("#svg_circle ul li").lettering();
    set_angle();
    
	$("#pie_labels").css("width",$("#svg_circle").width())
	$("#pie_labels").css("height",$("#svg_circle").width())
	$("#pie_icons").css("width",0.7*$("#svg_circle").width())
	$("#pie_icons").css("height",0.7*$("#svg_circle").width())  
	$("#pie_icons").css("top",77*$("#svg_circle").width()/510)  
	$("#pie_icons").css("left",77*$("#svg_circle").width()/510)  
	$("#pie_labels li span").css("top",10*$("#svg_circle").width()/510)  
	$("#pie_labels li span").css("left",250*$("#svg_circle").width()/510)  
}

function set_angle()
{
	var char_angle;
    if ($(window).width() < 375) {
	   	char_angle=2.8;
	}else if ($(window).width() < 420) {
	   	char_angle=3.1;
	}else if ($(window).width() < 480) {
	   	char_angle=3.5;
	}else {
	   	char_angle=4.1;
	}
    $("#pie_labels li").each(function(index){
        var char_length= $(this).find("span").length; 
        console.log(char_length);
        $(this).find("span").each(function(index){
        $(this).css("transform","rotate("+(index-(char_length/2))*char_angle+"deg)")
        })
    });
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

            moods_color:item.moods_color,

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