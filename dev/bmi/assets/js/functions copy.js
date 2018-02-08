
function ClearForm(form){

    form.weight.value = "";
    form.height.value = "";
    form.bmi.value = "";
    form.my_comment.value = "";

}

/*
function checkform(form) {

       if (form.weight.value==null||form.weight.value.length==0 || form.height.value==null||form.height.value.length==0){
            alert("\nPlease complete the form first");
            return false;
       }

       else if (parseFloat(form.height.value) <= 0||
                parseFloat(form.height.value) >=500||
                parseFloat(form.weight.value) <= 0||
                parseFloat(form.weight.value) >=500){
                alert("\nReally know what you're doing? \nPlease enter values again. \nWeight in kilos and \nheight in cm");
                ClearForm(form);
                return false;
       }
       return true;

}*/
/*
function computeform(form) {

       if (checkform(form)) {

       yourbmi=Math.round(bmi(form.weight.value, form.height.value/100));
       form.bmi.value=yourbmi;

       if (yourbmi >40) {
          form.my_comment.value="You are grossly obese, consult your physician!";
       }

       else if (yourbmi >30 && yourbmi <=40) {
          form.my_comment.value="Umm... You are obese, want some liposuction?";
       }

       else if (yourbmi >27 && yourbmi <=30) {
          form.my_comment.value="You are very fat, do something before it's too late";
       }

       else if (yourbmi >22 && yourbmi <=27) {
          form.my_comment.value="You are fat, need dieting and exercise";
       }

       else if (yourbmi >=21 && yourbmi <=22) {
          form.my_comment.value="I envy you. Keep it up!!";
       }

       else if (yourbmi >=18 && yourbmi <21) {
          form.my_comment.value="You are thin, eat more.";
       }

       else if (yourbmi >=16 && yourbmi <18) {
          form.my_comment.value="You are starving. Go Find some food!";
       }

       else if (yourbmi <16) {
          form.my_comment.value="You're grossly undernourished, need hospitalization ";
       }

       }
       return;
}
*/


$('#weight-kg').bind('change', function () {
	$('#input-weight').attr('placeholder', 'Your Weight in kg');
});

$('#weight-lb').bind('change', function () {
	$('#input-weight').attr('placeholder', 'Your Weight in lb');
});

$('#height-cm').bind('change', function () {
	$('.cm-height').show();
	$('.feet-height').hide();
	
});

$('#height-feet').bind('change', function () {
	$('.cm-height').hide();
	$('.feet-height').show();
});

$('.btn-reset').click(function () {
	$('.cm-height').show();
	$('.feet-height').hide();
	
});



// All in CM


var feet_val = $('#input-height-feet').val();
/*
$("#input-height-feet").bind("keyup change", function(e) {
	console.log("yes");
	$("#all-in-cm").val($(this).val()/3.5+ );
});*/
	
$("input").bind("keyup change", function(e) {
	 show_BMI();
});
	
function show_BMI()
	{
		
		var weight, height;
		
		
		if()
		   {
		   weight= $("#input-kg").val()
		   }
	else{
		   weight= $("#input-kg").val()/
	}
		   
		
		   
		   bmi= weight/ height);
	}
	



var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumeric(e) {
	var keyCode = e.which ? e.which : e.keyCode
	var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
	//document.getElementById("error").style.display = ret ? "none" : "inline";
	return ret;
}








