// sortable cards
$(".sortable").sortable();
$(".sortable").disableSelection();

// Select category array
var category_array = ["In Love", "Soulful", "Let's party", "Love Hell", "Surprise Me", "Filmy"];

function resetEvents(){

	// delete on change select mood
	$(".select_category").change(function(){
        console.log($(this).val());
        for (var i = 0; i < category_array.length; i++)
	    if (category_array[i] === $(this).val()) {
	    	//alert(i);
	        category_array.splice(i, 1);
	        break;
	    }
    });

    // Default add "Select mood"
	$(".card:last-child").find(".select_category").append('<option selected disabled hidden value="Select">'+ "Select mood" +'</option>');

	// select category call in select option
	$.each(category_array , function (index, value){
	  	//console.log(index + ':' + value); 
	  	$(".card:last-child").find(".select_category").append('<option value="'+ value +'">'+ value +'</option>');
	});

	// $('.clickMe').on('click', function() { 
	//     console.log($('.select_category option:selected').val());
	// });

	// onclick remove cards
	$(".card:last-child").find(".question-close").click(function(){
		console.log("click");
		$(this).closest(".card").remove();
	});

	// on click add track #2
	$(".card:last-child").find(".add_track").click(function(){
		$(this).hide();
		$(this).closest(".card").find(".form-group--main").append('<div class="form-group"><input id="" type="text" class="song-title_2 form-control" placeholder="Song Title #2"></div><div class="form-group"><input id="" type="text" class="song-track_2 form-control" placeholder="Song Track #2"></div>');
	});
}

resetEvents();


// Adding moods card
var moods_counter = 1;

$(".add_card").click(function(){
	moods_counter++;

	$("#moods_card").append('<div class="card"><div class="card-header"><h4><span>Moods #'+ moods_counter +'</span><button type="button" class="close question-close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4></div><div class="form_data card-body"><form><div class="form-group--main"><div class="form-group"><select class="select_category form-control"></select></div><div class="form-group"><input id="" type="text" class="song-title_1 form-control" placeholder="Song Title #1"></div><div class="form-group"><input id="" type="text" class="song-track_1 form-control" placeholder="Song Track #1"></div></div><div class=""><a href="javascript:void(0);" class="add_track">+ Add Track #2</a></div></form></div></div>');

	resetEvents();
});


var quiz_data={};

function addQuestionFunc(){
	quiz_data = {};
	quiz_data['size']=500;
	quiz_data['sectors']=[];
	//i = 0;
	console.log($(".card").length);

	var card_length = $(".card").length;

	$(".card").each(function(index){
		quiz_data['sectors'].push({});
		
		if(card_length==1) {
			card_length=1/0.99999
		}
		quiz_data['sectors'][index]['percentage'] = 1/card_length;

		quiz_data['sectors'][index]['moods'] = $(this).find(".select_category").val();
		quiz_data['sectors'][index]['title_1'] = $(this).find(".song-title_1").val();
		quiz_data['sectors'][index]['track_1'] = $(this).find(".song-track_1").val();

		quiz_data['sectors'][index]['title_2'] = $(this).find(".song-title_2").val();
		quiz_data['sectors'][index]['track_2'] = $(this).find(".song-track_2").val();
		
	});

}

$('.refresh-icon').click(function(){
	var check_mood_null=[];
	$(".card").each(function(index){
		if($(this).find(".select_category").val()==null){
			check_mood_null.push("empty")
		}
	});

	if(jQuery.inArray("empty",check_mood_null) !== -1){
		alert("Select Moods");
	}
	else {
		addQuestionFunc();
		create_pie();
		$(".display_results").html( JSON.stringify(quiz_data));
		pie_events();
	}
});


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
		console.log("yes");
		$(".main-wrap--container").addClass("slide");
	});

	$(".back-btn").click(function(){
        $(".main-wrap--container").removeClass("slide");
    });
}
// create svg pie

function calculateSectors(quiz_data) {
    var sectors = [];
    var colors = [
        "#e94d4b", "#fdd44d", "#02a2a4", "#d3d1bc",  "#f29a99", "#e94d4b", "#fdd44d", "#02a2a4", "#d3d1bc",  "#f29a99"
    ];

    var l = quiz_data.size / 2
    var a = 0 // Angle
    var aRad = 0 // Angle in Rad
    var z = 0 // Size z
    var x = 0 // Side x
    var y = 0 // Side y
    var X = 0 // SVG X coordinate
    var Y = 0 // SVG Y coordinate
    var R = 0 // Rotation


    quiz_data.sectors.map(function(item, key) {
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
    
function create_pie() {
	 $("#svg-labels").html("");
	sectors = calculateSectors(quiz_data);
	var newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	newSVG.setAttributeNS(null, 'style', "width: " + quiz_data.size + "px; height: " + quiz_data.size + "px");
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
	    newSector.setAttribute('data-title_1', sector.title_1);
	    newSector.setAttribute('data-track_1', sector.track_1);

	    newSector.setAttribute('data-title_2', sector.title_2);
	    newSector.setAttribute('data-track_2', sector.track_2);
		//console.log(sector)

	    newSVG.appendChild(newSector);
	    $("#svg-labels").append("<li>"+sector.moods+"</li>");
	})

	var midCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	midCircle.setAttributeNS(null, 'cx', quiz_data.size * 0.5);
	midCircle.setAttributeNS(null, 'cy', quiz_data.size * 0.5);
	midCircle.setAttributeNS(null, 'r', quiz_data.size * 0.14);
	midCircle.setAttributeNS(null, 'fill', '#424149');

	newSVG.appendChild(midCircle);
}


// Jukebox animation
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
});



// $(".main-wrap--container").addClass("slide");

// $("#Soulful").click(function(){
// 	alert("working");
// });

// $("#Soulful").mouseover(function(){
// 	console.log("yes");
//     $(".main-wrap").addClass("bg-soulful");
// });

    