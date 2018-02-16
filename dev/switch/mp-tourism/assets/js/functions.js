$(document).ready(function(){
  	// $(".btn-01").on("click",function(){
   //   	$(".box-first").hide();
   //   	$(".box-second").show();
  	// });
  	// $(".btn-02").on("click",function(){
   //   	$(".box-first").show();
   //   	$(".box-second").hide();
  	// });
  	$(".btn-01").on("click",function(){
  		$(".box-wrap").addClass("slide");
  	});
  	$(".btn-02").on("click",function(){
  		$(".box-wrap").removeClass("slide");
  	});

  	//$('.content').css("background","lightgreen");
});

//$(".main-wrap--container").addClass("slide");

// $('.progress').addClass("filling").css("background","lightgreen").width("100%");