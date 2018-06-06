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

	data_array = JSON.parse(data[parseInt(getParameterByName('id'))-2].Comments+data[parseInt(getParameterByName('id'))-1].Comments_2+data[parseInt(getParameterByName('id'))].Comments_3); //when feting the array directly from the url
	console.log(data_array);

	display_data();
	// console.log(data_array[0].qT);

	// alert("yes");
	$(".quiz-template-02").show();
}

function display_data() {

	//console.log(data_array.length);
	var str = '';

	$('.quiz-headline').html('<span>' + data_array[data_array.length-1].qH + '</span>');

	$('.quiz-template-02').addClass(data_array[data_array.length-2].selectTemp);

	$('.quiz-template-02.fit-quiz .quiz-header img').attr('src','assets/images/fit-banner.jpg');

	$('.quiz-template-02.bollywood-quiz .quiz-header img').attr('src','assets/images/bollywood-banner.jpg');

	for (var index = 0; index < data_array.length - 1; index++) {

		for(var j = 0; j < data_array[index].options.length; j++){
			var media = '';
			if(data_array[index].options[j].oIU)//image
			{
				media = media + '<li><img src = "' + data_array[index].options[j].oIU + '"></li>';
			}
			if(data_array[index].options[j].oVU)// video
			{
				media = media + '<li><iframe src="https://www.youtube.com/embed/' + data_array[index].options[j].oVU + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></li>';
			}
			if(data_array[index].options[j].optionAudioUrl)//Audio
			{
				media = media + '<li><iframe width="100%" height="300" style="background-color:transparent; display:block; padding: 0; max-width: 700px;" frameborder="0" allowtransparency="allowtransparency" scrolling="no" src="https:' + data_array[index].options[j].optionAudioUrl + '" title="Audioboom player"></iframe></li>';
			}
			// str = str + '<li><label for="input-' + (index + 1) + '" class="' + ((data_array[index].options[j].isCorrect == true) ? 'right': 'wrong')+ '"><input type="radio" name="ques' + index + '" value="' + ((data_array[index].options[j].isCorrect == true) ? 1: 0) + '"> ' + data_array[index].options[j].oT + '</label><ul class="options-media">' + media + '</ul></li>'; //commented li checkbox

			str = str + '<li class="'+ ((data_array[index].options[j].isC == true) ? 'right': 'wrong')+'">' + data_array[index].options[j].oT + '<ul class="options-media">' + media + '</ul></li>';

			// console.log((data_array[index].options[j].isCorrect == true) ? 1: 0);
			// console.log((data_array[index].options[j].isCorrect == true) ? 'right': 'wrong');
		}

		var media = '';
		if(data_array[index].qIU)//image
		{
			media = media + '<div class="question-media--image"><img src = "' + data_array[index].qIU + '"></div>';
		}
		if(data_array[index].qVU)// video
		{
			media = media + '<div class="question-media--video"><iframe src="https://www.youtube.com/embed/' + data_array[index].qVU + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>';
		}	
		if(data_array[index].qAU)//Audio
		{
			media = media + '<div class="question-media--audio">' + data_array[index].qAU + '</div>';
		}


		var ans_media = '';
		if(data_array[index].aIU)//image
		{
			ans_media = ans_media + '<div class="question-media--image"><img src = "' + data_array[index].aIU + '"></div>';
		}
		if(data_array[index].aVU)// video
		{
			ans_media = ans_media + '<div class="question-media--video"><iframe src="https://www.youtube.com/embed/' + data_array[index].aVU + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>';
		}	
		if(data_array[index].aAU)//Audio
		{
			ans_media = ans_media + '<div class="question-media--audio">' + data_array[index].aAU + '</div>';
		}


		// console.log(media);
		$('.questions').append('<div class="question-box"><div class="question-media">' + media + '</div><div class="question-media--caption">' + data_array[index].mC + '</div><div class="question-headline"><div class="bullet"><span>' + (index + 1) + '</span></div> <h1 class="headline-text">' + data_array[index].qT + '</h1></div><div class="question-options"><ul class="answer-type demo-list">' + str + '<input type="hidden" id="ques0' + index + '" value="0"></ul><div class="answered-text" style="display:none"><div class="answered-description">' + data_array[index].aT + '</div><div class="answered-media">' + ans_media + '</div><div class="answered-caption">' + data_array[index].aC + '</div></div></div></div>');
		str = '';
	}

	$(".question-media, .answered-media").each(function(){
		if($(this).html()=="")
		{
			$(this).remove();
		}
	});

	$(".question-media--caption, .answered-caption").each(function(){
		if($(this).html()=="" || $(this).html()=="undefined")
		{
			$(this).remove();
		}
	});
	// $(".answered-media").each(function(){
	// 	if($(this).html()==""){
	// 		$(this).remove();
	// 	}
	// });

	$('.highlight').html(data_array.length-1);
	$('.tag-line-1').html(data_array[data_array.length-1].tL1);
	$('.tag-line-2').html(data_array[data_array.length-1].tL2);
	$('.tag-line-3').html(data_array[data_array.length-1].tL3);
	initNew();
	listClick();
}

function listClick(){
	$(".demo-list li").click(function(){
		if(!$(this).closest("ul").hasClass("answered")){
			$(this).closest("ul").addClass("answered");

			$(".answered li").addClass("option-list");

			$(this).addClass("active");

			console.log($(".answer-type").length+ "|" +$(".answered").length);

			if($(".answer-type").length == $(".answered").length) {
				$(".score-card").slideDown();
				//console.log($("li.right.active").length);

				var total_length = $(".answer-type").length;
				var score_length = $("li.right.active").length;

				var percent = score_length*100/total_length

				if(percent<33.33) {
					$(".score-message").html(data_array[data_array.length-1].tL1);
				}else if(percent<65) {
					$(".score-message").html(data_array[data_array.length-1].tL2);
				}else {
					$(".score-message").html(data_array[data_array.length-1].tL3);
				}

				console.log(total_length);
				console.log(score_length);
				$(".total_length").html(total_length);
				$(".score_length").html(score_length);

			}
		}
		$(this).closest(".question-options").find(".answered-text").slideDown();
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