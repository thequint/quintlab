$(document).ready(function(){
  	$(".btn-01").on("click",function(){
     	$(".box-first").hide();
     	$(".box-second").show();
  	});
  	$(".btn-02").on("click",function(){
     	$(".box-first").show();
     	$(".box-second").hide();
  	});
  	//$('.content').css("background","lightgreen");
});


// $('.progress').addClass("filling").css("background","lightgreen").width("100%");