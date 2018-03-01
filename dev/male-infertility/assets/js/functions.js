


$(document).ready(function(){
	$('.assets a path,.assets a circle,.assets a polygon,.assets a text,.assets a rect').click(function(){
		$('.modal-outer').show();
	});
	
	$('.modal-close').click(function(){
		$('.modal-outer').hide();
	});
	
	$("path,circle,polygon,text,rect").mouseenter(function(){
		console.log("hover");
		$(this).closest("a").addClass("hover_class");
	})
	$("a").mouseleave(function(){
		console.log("leave");
		$(this).removeClass("hover_class");
	})
});