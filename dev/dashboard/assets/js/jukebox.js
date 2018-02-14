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

	$("#moods_card").append('<div class="card"><div class="card-header"><h4><span>Moods #'+ moods_counter +'</span><button type="button" class="close question-close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4></div><div class="form_data card-body"><form><div class="form-group--main"><div class="form-group"><select class="select_category form-control"></select></div><div class="form-group"><input id="" type="text" class="song-title_1 form-control" placeholder="Song Title #1"></div><div class="form-group"><input id="" type="text" class="song-track_1 form-control" placeholder="Song Track #1"></div></div><div class="form-group"><a href="javascript:void(0);" class="add_track">+ Add Track #2</a></div></form></div></div>');

	resetEvents();
});


function addQuestionFunc(){
	quiz_data = [];
	//i = 0;
	$(".card").each(function(index){
		quiz_data.push({});

		//quiz_data[index]['y'] = $(this).find(".song-title_1").val().toString();

		quiz_data[index]['y'] = 20;
		quiz_data[index]['label'] = $(this).find(".song-title_1").val().toString();
		quiz_data[index]['embedCode'] = $(this).find(".song-track_1").val();

		quiz_data[index]['songTilte2'] = $(this).find(".song-title_2").val();
		quiz_data[index]['songTrack2'] = $(this).find(".song-track_2").val();
	});
}

$('.refresh-icon').click(function(){
	addQuestionFunc();
	console.log(quiz_data);
	//$(".display_results").html(quiz_data);
	$(".display_results").append(quiz_data);

	$.each(quiz_data , function (index, value){
	  	//console.log(index + ':' + value); 
	  	//console.log(quiz_data);
	  	$(".display_results").html( JSON.stringify(quiz_data));
	});
	

	function create_pie() {
	    var chart = new CanvasJS.Chart("chartContainer", {
	        animationEnabled: true,
	        title: {
	            text: "Making the jukebox dynamic"
	        },
	        data: [{
	            type: "pie",
	            startAngle: 240,
	            yValueFormatString: "##0.00\"%\"",
	          /*  index"label": "{"label"} {y}",*/
	            dataPoints: quiz_data,
	        }]
	    });
	    chart.render();
	}

	create_pie();

});





// On change
/*
$(".form_data .input_1").bind("keyup change", function(e) {
	var display_data = $(this).val();

	$(".display_results").html(display_data);

	data_array=[];

	$(".form_data .input_1").each(function () {
		console.log("yes");
        data_array.push($(this).val());
    });
   console.log(data_array);
});*/

/*
$("#update").click(function () {
    x = [];
    $('#input_value input').each(function () {
        x.push($(this).val());
    });

    //x.push("Lemon");
    console.log(x);
});*/