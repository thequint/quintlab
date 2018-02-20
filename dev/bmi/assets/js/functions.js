
$('#input-height').val('');
$('#input-height-feet, #input-height-inch').val('');
$('#input-weight').val('');

$('#weight-kg').prop("checked", true);
$('#height-cm').prop('checked',true); 

//$("#weight-kg:checked").val();
//$("#height-cm:checked").val();




$('#weight-kg').bind('change', function () {
	$('#input-weight').attr('placeholder', 'Your Weight in kg');
});

$('#weight-lb').bind('change', function () {
	$('#input-weight').attr('placeholder', 'Your Weight in lb');
});

$('#height-cm').bind('change', function () {
	$('.cm-height').show();
	$('.feet-height').hide();
	$('#input-height-feet, #input-height-inch').val('');
	$('#input-height').val('');
	
});

$('#height-feet').bind('change', function () {
	$('.cm-height').hide();
	$('.feet-height').show();
	$('#input-height-feet, #input-height-inch').val('');
	$('#input-height').val('');
});

$('.btn-reset').click(function () {
	$('.cm-height').show();
	$('.feet-height').hide();
	
});


function calculateBmi() {
	
	var weight, height;
	
	
	// For Weight
	
	
	if($('#weight-kg').is(':checked')){ 
		weight = $('#input-weight').val();
	} 
	
	else{
		weight = $('#input-weight').val() / 0.0022046;
	}
	
	// For Height
	
	
	if($('#height-cm').is(':checked')){ 
		
		height = $('#input-height').val();
	} 
	
	else{
		height = $('#input-height-feet').val()/0.032808+$('#input-height-inch').val()/0.39370;	
	}
	
	
	var finalBmi = weight/(height/100*height/100);
	$('.final-bmi').addClass('is-active').html(finalBmi.toFixed(2));
	
	
	if(($('#input-height').val() != '' && $('#input-weight').val() != '') || ($('#input-height-feet').val() != '' && $('#input-weight').val() != '')){
		
	   $('.final-bmi').addClass('is-active').html(finalBmi.toFixed(2));
		$(".bmi-point").css({"left":((weight-45)*100/(120-45))+"%","top":((height-120)*100/(210-120))+"%"});

	}

	else{
		$('.final-bmi').removeClass('is-active').html('--.-');
		
	}
}



$("input").bind("keyup change", function(e) {
	 calculateBmi();
});




var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumeric(e) {
	var keyCode = e.which ? e.which : e.keyCode
	var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
	//document.getElementById("error").style.display = ret ? "none" : "inline";
	return ret;
}






