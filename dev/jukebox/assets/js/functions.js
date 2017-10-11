
var public_spreadsheet_bol = 'https://docs.google.com/spreadsheets/d/123K1UBXTDboRF2w1PaxcXejIp8pFe0X6ywaZf2SfRaQ/pubhtml';




var juke_data;



    function reset_video(video_var,video_name) {
		$(".iframe-section").show();
		$(".main-wrap--container").addClass("slide");
        //setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2000);
        $(".track-party").fadeIn();
        $(".song-footer").fadeIn();
    	$("#step02 .song-name marquee").html(video_name)
		
        //$("#step02 .song-iframe").html("");
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
		
        reset_video($(this).attr("data-video"),$(this).attr("data-videoname") );

    })

    $(".play-icon li").click(function(){
       reset_video($(this).attr("data-video"),$(this).attr("data-videoname"));

    })

    var isPause = 0;
    //
    $("#IN_LOVE").mouseover(function(){
        $(".main-wrap").addClass("bg-love");
    });
    $("#IN_LOVE").mouseout(function(){
        $(".main-wrap").removeClass("bg-love");
    });
    $("#IN_LOVE").click(function() {
        $(".play-icon li.heart-icon").addClass("hvr-ripple-out");
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
    });
    $(".svg_hover_parent").mouseover(function(){

        isPause=1;
        $(".rotating").addClass("paused");
    })
    $(".svg_hover_parent").mouseout(function(){

        isPause=0;
        $(".rotating").removeClass("paused");
    })
    //
    $("#SOULFUL").mouseover(function(){
        $(".main-wrap").addClass("bg-soulful");
    });
    $("#SOULFUL").mouseout(function(){
        $(".main-wrap").removeClass("bg-soulful");
    });
    $("#SOULFUL").click(function() {
        $(".play-icon li.soulful-icon").addClass("hvr-ripple-out");
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
    });

    $("#SURPRISE_ME").mouseover(function(){
        $(".main-wrap").addClass("bg-surprise");
    });
    $("#SURPRISE_ME").mouseout(function(){
        $(".main-wrap").removeClass("bg-surprise");
    });
    $("#SURPRISE_ME").click(function() {
        $(".play-icon li.surprise-icon").addClass("hvr-ripple-out");
    });

    //
    $(".play-icon li").on("click", function () {
        //$("#step02 .iframe-section").hide();
        //$("#step02 .iframe-section").eq($(this).index()).show();

        $(".play-icon li").removeClass("hvr-ripple-out");
        $(this).addClass("hvr-ripple-out");
      //  $("#step02 .song-name marquee").removeClass("open");
       // setTimeout(function(){ $("#step02 .song-name marquee").addClass("open") }, 2500);
    });

    $('#IN_LOVE, #PARTY, #SOULFUL, #HEARTBREAK, #SURPRISE_ME').mouseover(function () {
        $('.pin-bottom').addClass('pin-rotate');
    });
    $('#IN_LOVE, #PARTY, #SOULFUL, #HEARTBREAK, #SURPRISE_ME').mouseout(function () {
        $('.pin-bottom').removeClass('pin-rotate');
    });

    $(".back-btn").click(function(){
        $(".main-wrap--container").removeClass("slide");
        $(".iframe-section").fadeOut();
        $(".song-footer").fadeOut();
        $(".play-icon li").removeClass("hvr-ripple-out");
       // $("#step02 .song-name marquee").removeClass("open");
        $("#step02 .song-iframe").html("");
    });

});