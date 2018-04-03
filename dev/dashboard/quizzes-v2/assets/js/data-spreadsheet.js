// New form quiz sheet
var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/16ryxF_1uxrtDwc6GWqUaJCs_CjE_cJ8Ab8ZjrkIafG4/pubhtml'; // New form quiz sheet

function init() {
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true
	});
	// console.log("init");
}

window.addEventListener('DOMContentLoaded', init);

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var sheet_data, data_array;

function showInfo(data) {
	// console.log("showInfo");
	//var id = getParameterByName('id'); //when pulling from the sheet
	sheet_data = data;
	//data_array = JSON.parse(data[id].array); //when pulling from the sheet

	data_array = JSON.parse(data[parseInt(getParameterByName('id'))-2].Comments); //when feting the array directly from the url
	//console.log(data_array);

	display_data();
	// console.log(data_array[0].questionText);
}

function display_data() {

	//console.log(data_array.length);
	var str = '';
	for (var index = 0; index < data_array.length - 1; index++) {

		for(var j = 0; j < data_array[index].options.length; j++){
			var media = '';
			if(data_array[index].options[j].optionImageUrl)//image
			{
				media = media + '<li><img src = "' + data_array[index].options[j].optionImageUrl + '"></li>';
			}
			if(data_array[index].options[j].optionVideoUrl)// video
			{
				media = media + '<li><iframe src="https://www.youtube.com/embed/' + data_array[index].options[j].optionVideoUrl + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></li>';
			}
			if(data_array[index].options[j].optionAudioUrl)//Audio
			{
				media = media + '<li><iframe width="100%" height="300" style="background-color:transparent; display:block; padding: 0; max-width: 700px;" frameborder="0" allowtransparency="allowtransparency" scrolling="no" src="https:' + data_array[index].options[j].optionAudioUrl + '" title="Audioboom player"></iframe></li>';
			}
			// str = str + '<li><label for="input-' + (index + 1) + '" class="' + ((data_array[index].options[j].isCorrect == true) ? 'right': 'wrong')+ '"><input type="radio" name="ques' + index + '" value="' + ((data_array[index].options[j].isCorrect == true) ? 1: 0) + '"> ' + data_array[index].options[j].optionText + '</label><ul class="options-media">' + media + '</ul></li>'; //commented li checkbox

			str = str + '<li class="'+ ((data_array[index].options[j].isCorrect == true) ? 'right': 'wrong')+'">' + data_array[index].options[j].optionText + '<ul class="options-media">' + media + '</ul></li>';

			// console.log((data_array[index].options[j].isCorrect == true) ? 1: 0);
			// console.log((data_array[index].options[j].isCorrect == true) ? 'right': 'wrong');
		}

		var media = '';
		if(data_array[index].questionImageUrl)//image
		{
			media = media + '<div class="question-media--image"><img src = "' + data_array[index].questionImageUrl + '"></div>';
		}
		if(data_array[index].questionVideoUrl)// video
		{
			media = media + '<div class="question-media--video"><iframe src="https://www.youtube.com/embed/' + data_array[index].questionVideoUrl + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>';
		}	
		if(data_array[index].questionAudioUrl)//Audio
		{
			media = media + '<div class="question-media--audio">' + data_array[index].questionAudioUrl + '</div>';
		}


		var ans_media = '';
		if(data_array[index].answeredImageUrl)//image
		{
			ans_media = ans_media + '<div class="question-media--image"><img src = "' + data_array[index].answeredImageUrl + '"></div>';
		}
		if(data_array[index].answeredVideoUrl)// video
		{
			ans_media = ans_media + '<div class="question-media--video"><iframe src="https://www.youtube.com/embed/' + data_array[index].answeredVideoUrl + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>';
		}	
		if(data_array[index].answeredAudioUrl)//Audio
		{
			ans_media = ans_media + '<div class="question-media--audio">' + data_array[index].answeredAudioUrl + '</div>';
		}


		// console.log(media);
		$('.questions').append('<div class="question-box"><div class="question-headline"><div class="bullet"><span>' + (index + 1) + '</span></div> <h1 class="headline-text">' + data_array[index].questionText + '</h1></div><div class="question-media">' + media + '</div><div class="question-media--caption">' + data_array[index].mediaCaption + '</div><div class="question-options"><ul class="answer-type demo-list">' + str + '<input type="hidden" id="ques0' + index + '" value="0"></ul><div class="answered-text" style="display:none"><div class="answered-description">' + data_array[index].answeredText + '</div><div class="hyperlink-link">Read More: <a href='+data_array[index].hyperlinkLink+' target="_blank">' + data_array[index].hyperlinkText + '</a></div><div class="answered-media">' + ans_media + '</div><div class="answered-caption">' + data_array[index].answeredCaption + '</div></div></div></div>');
		str = '';
	}

	$(".question-media").each(function(){
		if($(this).html()=="")
		{
			$(this).remove();
		}
	});

	$(".question-media--caption").each(function(){
		if($(this).html()=="")
		{
			$(this).remove();
		}
	});

	$('.highlight').html(data_array.length-1);
	$('.tag-line-1').html(data_array[data_array.length-1].tagLine1);
	$('.tag-line-2').html(data_array[data_array.length-1].tagLine2);
	$('.tag-line-3').html(data_array[data_array.length-1].tagLine3);
	initNew();
	listClick();
}

function listClick(){
	$(".demo-list li").click(function(){
		if(!$(this).closest("ul").hasClass("answered")){
			$(this).closest("ul").addClass("answered");
			$(this).addClass("active");

			console.log($(".answer-type").length+ "|" +$(".answered").length);

			if($(".answer-type").length == $(".answered").length) {
				$(".score-card").fadeIn();
				//console.log($("li.right.active").length);

				var total_length = $(".answer-type").length;
				var score_length = $("li.right.active").length;

				console.log(total_length);
				console.log(score_length);
				$(".total_length").html(total_length);
				$(".score_length").html(score_length);

			}
		}
		$(this).closest(".question-options").find(".answered-text").fadeIn();
   	});
}

function initNew(){
	 var total=0;
    $('input').on('ifChecked', function(event){
	    //$(".demo-list li label").removeClass("active");
	  	//$(this).addClass("active");
	  	total=0;
	  	$(this).parents('ul').find("input[Type='hidden']").val(this.value);
	  	$(".demo-list").each(function(){
	    	total+=parseInt($(this).find("input[type='hidden']").val());
	   	});
	   	// console.log(total);
	   	$("#lblTotalMarks").text(total);
   	});
   	$("#btn").on("click",function(){

      	var total_score = $('#lblTotalMarks').html();
      	$(".total-score").html(total_score);

      	if($("#lblTotalMarks").text() <= ((data_array.length*30) / 100) ){  //0-3
        	$(".lessGreater div").hide();
        	$(".lessGreater div.minimum").show();

      	} else if($("#lblTotalMarks").text() > ((data_array.length*30) / 100) && $("#lblTotalMarks").text() <= ((data_array.length*60) / 100)){  //4-6
       		$(".lessGreater div").hide();
        	$(".lessGreater div.middle").show();

      	} else if($("#lblTotalMarks").text() > ((data_array.length*60) / 100) ){  //10-12
        	$(".lessGreater div").hide();
        	$(".lessGreater div.maximum").show();

      	}else if($("#lblTotalMarks").text() < 1) {
        	$(".lessGreater div").hide();
      	}

      	$(".demo-list li label").addClass("answer");

      	$(".demo-list").find(".right").addClass("active");

      	adjust_iframe_height();
   	});

   	var callbacks_list = $('.demo-callbacks');
   	$('.demo-list input').on('ifCreated ifClicked ifChanged ifChecked ifUnchecked ifDisabled ifEnabled ifDestroyed', function(event){
    	callbacks_list.prepend('<p><span>#' + this.id + '</span> is ' + event.type.replace('if', '').toLowerCase() + '</p>');
   	}).iCheck({
    	checkboxClass: 'icheckbox_square-blue',
     	radioClass: 'iradio_square-blue',
     	increaseArea: '20%'
   	});

   	// Check Active
   	$(".demo-list li label").click(function(){
      	$(this).parents("ul").find("label").removeClass("active");
      	$(this).addClass("active");
      	$(this).removeClass("answer");
   	});

   	$(".iCheck-helper").click(function(){
      	$(this).parents("label").click();
   	});
}

function adjust_iframe_height(){
    var actual_height = document.body.scrollHeight; 
    // console.log("height is",actual_height);
    parent.postMessage(JSON.stringify({'msg-type':"resize-iframe", height:actual_height,src:window.location.href}),"*"); 
    //* allows this to post to any parent iframe regardless of domain
}