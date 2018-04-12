$('#input-height').val('');
$('#input-height-feet, #input-height-inch').val('');
$('#input-weight').val('');

$('#weight-kg').prop("checked", true);
$('#height-cm').prop('checked', true);

//$("#weight-kg:checked").val();
//$("#height-cm:checked").val();




$('#weight-kg').bind('change', function () {
	$('#input-weight').attr('placeholder', 'Your Weight in Kg');
});

$('#weight-lb').bind('change', function () {
	$('#input-weight').attr('placeholder', 'Your Weight in Lb');
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


	if ($('#weight-kg').is(':checked')) {
		weight = $('#input-weight').val();
	} else {
		weight = $('#input-weight').val() / 0.0022046;
	}

	// For Height


	if ($('#height-cm').is(':checked')) {

		height = $('#input-height').val();
	} else {
		height = $('#input-height-feet').val() / 0.032808 + $('#input-height-inch').val() / 0.39370;
	}


	var finalBmi = weight / (height / 100 * height / 100);
	$('.final-bmi').addClass('is-active').html(finalBmi.toFixed(2));


	if (($('#input-height').val() != '' && $('#input-weight').val() != '') || ($('#input-height-feet').val() != '' && $('#input-weight').val() != '')) {

		$('.final-bmi').addClass('is-active').html(finalBmi.toFixed(2));
		$(".bmi-point").css({
			"left": ((weight - 45) * 100 / (120 - 45)) + "%",
			"top": ((height - 120) * 100 / (210 - 120)) + "%"
		});

	} else {
		$('.final-bmi').removeClass('is-active').html('--.-');

	}
	if (weight != "" && height != "") {
		if (!$(".cal-bmi").hasClass("is-active")) {
			$(".cal-bmi").addClass("is-active");
			$('.cal-bmi.is-active').click(function () {
				$(this).toggleClass('is-slide');
				$('.result').toggle();
				$('.info').toggle();
				
			});
		}


	} else {
		$(".cal-bmi").removeClass("is-active");
		$(".cal-bmi").off("click");
	}


	if (finalBmi < 18.5) {
		$('.message').html("Underweight");
		new_weight = 18.5 * height * height / 10000;
		new_weight = new_weight - weight
		$(".weight-change").html(new_weight.toFixed(2));

	} else if (finalBmi >= 18.5 && finalBmi < 25) {
		$('.message').html("Normal Weight");
		$('.weight-change').html("");
	} else if (finalBmi >= 25) {
		new_weight = 25 * height * height / 10000;
		new_weight = weight - new_weight
		$(".weight-change").html(new_weight.toFixed(2));
		$('.message').html("Overweight");
	} else {
		new_weight = 25 * height * height / 10000;
		new_weight = weight - new_weight
		$(".weight-change").html(new_weight.toFixed(2));
		$('.message').html("Obesity");
	}
}


$("input").bind("keyup change", function (e) {
	calculateBmi();
});

$(".info i").click(function () {
	$('.info span').toggle(100);
});


var specialKeys = new Array();
specialKeys.push(8);
specialKeys.push(37);
specialKeys.push(39);
specialKeys.push(9); //Backspace
function IsNumeric(e) {
	var keyCode = e.which ? e.which : e.keyCode
	var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
	//document.getElementById("error").style.display = ret ? "none" : "inline";
	return ret;
}
