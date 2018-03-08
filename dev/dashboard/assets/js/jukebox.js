// sortable cards
$(".sortable").sortable();
$(".sortable").disableSelection();

// Select category array


function resetEvents(){

	// delete on change select mood
	$(".select_category").change(function(){
        console.log($(this).val());
        for (var i = 0; i < category_array.length; i++)
	    if (category_array[i].name === $(this).val()) {
	    	//alert(i);
	        category_array.splice(i, 1);
	        break;
	    }
	    //alert(category_array[i].icon);
	    $(this).attr("data-icon",$("option:selected", this).attr("data-icon"));
    });

    // Default add "Select mood"
	$(".card:last-child").find(".select_category").append('<option selected disabled hidden value="Select">'+ "Select mood" +'</option>');

	// select category call in select option
	$.each(category_array , function (index, value){
	  	console.log(index + ':' + value.name); 
	  	$(".card:last-child").find(".select_category").append('<option value="'+ value.name +'" data-icon="'+value.icon+'">'+ value.name +'</option>');
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


var dashboard_data={};

function addQuestionFunc(){
	dashboard_data = {};
	dashboard_data['size']=500;
	dashboard_data['sectors']=[];
	//i = 0;
	//console.log($(".card").length);

	var card_length = $(".card").length;

	$(".card").each(function(index){
		dashboard_data['sectors'].push({});
		
		if(card_length==1) {
			card_length=1/0.99999
		}
		dashboard_data['sectors'][index]['percentage'] = 1/card_length;

		dashboard_data['sectors'][index]['moods'] = $(this).find(".select_category").val();
		dashboard_data['sectors'][index]['moods_icon'] = $(this).find(".select_category").attr("data-icon");
		dashboard_data['sectors'][index]['title_1'] = $(this).find(".song-title_1").val();
		dashboard_data['sectors'][index]['track_1'] = $(this).find(".song-track_1").val();

		dashboard_data['sectors'][index]['title_2'] = $(this).find(".song-title_2").val();
		dashboard_data['sectors'][index]['track_2'] = $(this).find(".song-track_2").val();
	});
}

$('#jukebox_preview').click(function(){
	var check_mood_null=[];
	jukeboxFormValidation();
	$(".main-wrap--container").removeClass("slide");
    $(".iframe-section .song-iframe").html('');
	/*$(".card").each(function(index){
		if($(this).find(".select_category").val()==null){
			check_mood_null.push("empty");
		}
	});

	if(jQuery.inArray("empty",check_mood_null) !== -1){
		alert("Select Moods");
	}
	else {
		addQuestionFunc();
		create_pie();
		$(".display_results").html( JSON.stringify(dashboard_data));
		pie_events();
	}
	*/
	console.log(dashboard_data);
	$("#jukeboxPushArray").val(JSON.stringify(dashboard_data));
});

function jukeboxFormValidation(){

	$(".card").each(function(index){
		if($(this).find(".select_category").val()==null){
			alert("Select Moods");
			return 0;

		}else if($(this).find(".song-title_1").val() =="") {
			alert("Insert Title");
			return 0;

		}else if($(this).find(".song-track_1").val() =="") {
			alert("Insert Track");
			return 0;
		}else {
			$(".main-wrap").addClass("show");
			addQuestionFunc();
			create_pie();
			$(".display_results").html( JSON.stringify(dashboard_data));
			pie_events();
		}
	});
}


// function generateFormValidation(){

// 	$(".card").each(function(index){
// 		if($(this).find(".select_category").val()==null){
// 			alert("Select Moods");
// 			return 0;

// 		}else if($(this).find(".song-title_1").val() =="") {
// 			alert("Insert Title");
// 			return 0;

// 		}else if($(this).find(".song-track_1").val() =="") {
// 			alert("Insert Track");
// 			return 0;
// 		}
// 	});
// }

/*
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
}*/

// create svg pie




// $(".main-wrap--container").addClass("slide");

// $("#Soulful").click(function(){
// 	alert("working");
// });

// $("#Soulful").mouseover(function(){
// 	console.log("yes");
//     $(".main-wrap").addClass("bg-soulful");
// });

    