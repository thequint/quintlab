
var public_spreadsheet_bol = 'https://docs.google.com/spreadsheets/d/123K1UBXTDboRF2w1PaxcXejIp8pFe0X6ywaZf2SfRaQ/pubhtml';

var juke_data;

//var track_data=1;

function reset_video(video_var,video_name) {
	$(".iframe-section").show();
	$(".main-wrap--container").addClass("slide");
    //setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2000);
    $(".track-party").fadeIn();
    $(".song-footer").fadeIn();
	$("#step02 .song-name marquee").html(video_name);
	
    $("#step02 .song-iframe").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+video_var+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
   /* <iframe width="560" height="315" src="https://www.youtube.com/embed/gWn4Csu3Kc8?autoplay=1" frameborder="0" allowfullscreen></iframe>*/
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function showInfo(data) {
	
	console.log(getParameterByName('id'));
	
	$(".main-wrap").addClass("show");
	juke_data = data[getParameterByName('id')];
    console.log(juke_data);	
	
	$(".heart-icon").attr("data-video",juke_data.love_url);
	$(".heart-icon").attr("data-videoname",juke_data.love_name);
	
	$(".soulful-icon").attr("data-video",juke_data.soul_url);
	$(".soulful-icon").attr("data-videoname",juke_data.soul_name);
	
	$(".heartbreak-icon").attr("data-video",juke_data.heartbreak_url);
	$(".heartbreak-icon").attr("data-videoname",juke_data.heartbreak_name);
	
	$(".party-icon").attr("data-video",juke_data.party_url);
	$(".party-icon").attr("data-videoname",juke_data.party_name);
	
	$(".surprise-icon").attr("data-video",juke_data.surprise_url);
	$(".surprise-icon").attr("data-videoname",juke_data.surprise_name);
	
	$("#IN_LOVE").attr("data-video",juke_data.love_url);
	$("#IN_LOVE").attr("data-videoname",juke_data.love_name);
	
	$("#SOULFUL").attr("data-video",juke_data.soul_url);
	$("#SOULFUL").attr("data-videoname",juke_data.soul_name);
	
	$("#HEARTBREAK").attr("data-video",juke_data.heartbreak_url);
	$("#HEARTBREAK").attr("data-videoname",juke_data.heartbreak_name);
	
	$("#PARTY").attr("data-video",juke_data.party_url);
	$("#PARTY").attr("data-videoname",juke_data.party_name);
	
	$("#SURPRISE_ME").attr("data-video",juke_data.surprise_url);
	$("#SURPRISE_ME").attr("data-videoname",juke_data.surprise_name);
	
	
}
$(document).ready(function() {
	Tabletop.init({
		key: public_spreadsheet_bol,
		callback: showInfo,
		simpleSheet: true
	});
	
    $(".svg_hover").click(function(){
        $(".btn-track01").addClass("active");
        $(".btn-track02").removeClass("active");
        reset_video($(this).attr("data-video"),$(this).attr("data-videoname"));
    });

    $(".track-btn").click(function(){
        if( $(this).hasClass("active")){
            //
        }else {  
            $(".track-btn").removeClass("active");
            $(this).addClass("active");
            reset_video($(this).attr("data-video"),$(this).attr("data-videoname"));
        }
    });

    $(".play-icon li").click(function(){
        $(".btn-track01").addClass("active");
        $(".btn-track02").removeClass("active");
        reset_video($(this).attr("data-video"),$(this).attr("data-videoname"));

        console.log($(this).attr("class"));

        //console.log(juke_data.love_name_2);

        switch($(this).attr("class")){
            case "heart-icon":
                if(juke_data.love_url_2 == "" || juke_data.love_name_2 == "") {
                    $(".track-btn").hide();
                }else {
                    $(".track-btn").show();
                    $(".btn-track01").attr("data-video",juke_data.love_url);
                    $(".btn-track01").attr("data-videoname",juke_data.love_name);
                    $(".btn-track02").attr("data-video",juke_data.love_url_2);
                    $(".btn-track02").attr("data-videoname",juke_data.love_name_2);
                }
                break;
            case "soulful-icon":
                if(juke_data.soul_url_2 == "" || juke_data.soul_name_2 == "") {
                    $(".track-btn").hide();
                }else {
                    $(".track-btn").show();
                    $(".btn-track01").attr("data-video",juke_data.soul_url);
                    $(".btn-track01").attr("data-videoname",juke_data.soul_name);
                    $(".btn-track02").attr("data-video",juke_data.soul_url_2);
                    $(".btn-track02").attr("data-videoname",juke_data.soul_name_2);
                }
                break;
            case "heartbreak-icon":
                if(juke_data.heartbreak_url_2 == "" || juke_data.heartbreak_name_2 == "") {
                    $(".track-btn").hide();
                }else {
                    $(".track-btn").show();
                    $(".btn-track01").attr("data-video",juke_data.heartbreak_url);
                    $(".btn-track01").attr("data-videoname",juke_data.heartbreak_name);
                    $(".btn-track02").attr("data-video",juke_data.heartbreak_url_2);
                    $(".btn-track02").attr("data-videoname",juke_data.heartbreak_name_2);
                }
                break;
            case "party-icon":
                if(juke_data.party_url_2 == "" || juke_data.party_name_2 == "") {
                    $(".track-btn").hide();
                }else {
                    $(".track-btn").show();
                    $(".btn-track01").attr("data-video",juke_data.party_url);
                    $(".btn-track01").attr("data-videoname",juke_data.party_name);
                    $(".btn-track02").attr("data-video",juke_data.party_url_2);
                    $(".btn-track02").attr("data-videoname",juke_data.party_name_2);
                }
                break;
           case "surprise-icon":
                 if(juke_data.surprise_url_2 == "" || juke_data.surprise_name_2 == "") {
                    $(".track-btn").hide();
                }else {
                    $(".track-btn").show();
                    $(".btn-track01").attr("data-video",juke_data.surprise_url);
                    $(".btn-track01").attr("data-videoname",juke_data.surprise_name);
                    $(".btn-track02").attr("data-video",juke_data.surprise_url_2);
                    $(".btn-track02").attr("data-videoname",juke_data.surprise_name_2);
                }
                break;    

            default:
                break;
        }

    });

    var isPause = 0;
    //
    $(".svg_hover_parent").mouseover(function(){
        isPause=1;
        $(".rotating").addClass("paused");
    })
    $(".svg_hover_parent").mouseout(function(){
        isPause=0;
        $(".rotating").removeClass("paused");
    });

    //
    $("#IN_LOVE").mouseover(function(){
        $(".main-wrap").addClass("bg-love");
    });
    $("#IN_LOVE").mouseout(function(){
        $(".main-wrap").removeClass("bg-love");
    });
    $("#IN_LOVE").click(function() {
        $(".play-icon li.heart-icon").addClass("hvr-ripple-out");

        console.log(juke_data.love_url_2);
        console.log(juke_data.love_name_2);

        if(juke_data.love_url_2 == "" || juke_data.love_name_2 == "") {
            $(".track-btn").hide();
        }else {
            $(".track-btn").show();
            $(".btn-track01").attr("data-video",juke_data.love_url);
            $(".btn-track01").attr("data-videoname",juke_data.love_name);
            $(".btn-track02").attr("data-video",juke_data.love_url_2);
            $(".btn-track02").attr("data-videoname",juke_data.love_name_2);
        }
    });

    //
    $("#PARTY").mouseover(function(){
        $(".main-wrap").addClass("bg-party");
    });
    $("#PARTY").mouseout(function(){
        $(".main-wrap").removeClass("bg-party");
    });
    $("#PARTY").click(function() {
        $(".play-icon li.party-icon").addClass("hvr-ripple-out");

        if(juke_data.party_url_2 == "" || juke_data.party_name_2 == "") {
            $(".track-btn").hide();
        }else {
            $(".track-btn").show();
            $(".btn-track01").attr("data-video",juke_data.party_url);
            $(".btn-track01").attr("data-videoname",juke_data.party_name);
            $(".btn-track02").attr("data-video",juke_data.party_url_2);
            $(".btn-track02").attr("data-videoname",juke_data.party_name_2);
        }
    });

    //
    $("#SOULFUL").mouseover(function(){
        $(".main-wrap").addClass("bg-soulful");
    });
    $("#SOULFUL").mouseout(function(){
        $(".main-wrap").removeClass("bg-soulful");
    });
    $("#SOULFUL").click(function() {
        $(".play-icon li.soulful-icon").addClass("hvr-ripple-out");

        if(juke_data.soul_url_2 == "" || juke_data.soul_name_2 == "") {
            $(".track-btn").hide();
        }else {
            $(".track-btn").show();
            $(".btn-track01").attr("data-video",juke_data.soul_url);
            $(".btn-track01").attr("data-videoname",juke_data.soul_name);
            $(".btn-track02").attr("data-video",juke_data.soul_url_2);
            $(".btn-track02").attr("data-videoname",juke_data.soul_name_2);
        }
    });

    //
    $("#HEARTBREAK").mouseover(function(){
        $(".main-wrap").addClass("bg-heartbreak");
    });
    $("#HEARTBREAK").mouseout(function(){
        $(".main-wrap").removeClass("bg-heartbreak");
    });
    $("#HEARTBREAK").click(function() {
        $(".play-icon li.heartbreak-icon").addClass("hvr-ripple-out");

        if(juke_data.heartbreak_url_2 == "" || juke_data.heartbreak_name_2 == "") {
            $(".track-btn").hide();
        }else {
            $(".track-btn").show();
            $(".btn-track01").attr("data-video",juke_data.heartbreak_url);
            $(".btn-track01").attr("data-videoname",juke_data.heartbreak_name);
            $(".btn-track02").attr("data-video",juke_data.heartbreak_url_2);
            $(".btn-track02").attr("data-videoname",juke_data.heartbreak_name_2);
        }
    });

    $("#SURPRISE_ME").mouseover(function(){
        $(".main-wrap").addClass("bg-surprise");
    });
    $("#SURPRISE_ME").mouseout(function(){
        $(".main-wrap").removeClass("bg-surprise");
    });
    $("#SURPRISE_ME").click(function() {
        $(".play-icon li.surprise-icon").addClass("hvr-ripple-out");
        //console.log(juke_data.surprise_url_2);
        if(juke_data.surprise_url_2 == "" || juke_data.surprise_name_2 == "") {
            $(".track-btn").hide();
        }else {
            $(".track-btn").show();
            $(".btn-track01").attr("data-video",juke_data.surprise_url);
            $(".btn-track01").attr("data-videoname",juke_data.surprise_name);
            $(".btn-track02").attr("data-video",juke_data.surprise_url_2);
            $(".btn-track02").attr("data-videoname",juke_data.surprise_name_2);
        }
    });

    //
    $(".play-icon li").on("click", function () {
        $(".play-icon li").removeClass("hvr-ripple-out");
        $(this).addClass("hvr-ripple-out");
    });

    $('#IN_LOVE, #PARTY, #SOULFUL, #HEARTBREAK, #SURPRISE_ME').mouseover(function () {
        $('.pin-bottom').addClass('pin-rotate');
    });
    $('#IN_LOVE, #PARTY, #SOULFUL, #HEARTBREAK, #SURPRISE_ME').mouseout(function () {
        $('.pin-bottom').removeClass('pin-rotate');
    });

    $(".back-btn").click(function(){
        $(".btn-track01").addClass("active");
        $(".btn-track02").removeClass("active");

        $(".main-wrap--container").removeClass("slide");
        $(".iframe-section").fadeOut();
        $(".song-footer").fadeOut();
        $(".play-icon li").removeClass("hvr-ripple-out");
        $("#step02 .song-iframe").html("");
    });

});