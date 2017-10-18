var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1oh1Lb01NH5wzCPWXOotApA7gP7HERuFLuZNwltyYi6s/pubhtml';
	

function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}


function update_count(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: updateInfo,
		simpleSheet: true 
	});
}


//window.addEventListener('DOMContentLoaded', init);

	
function showInfo(data) {
	
	console.log(data[data.length-1].counter);
	
	var counter = parseInt(data[data.length-1].counter);
	
	
	$("#counter").val(counter);
	$("#totalCount").html(counter);
	
	
}
	
function updateInfo(data) {
	
	console.log(data[data.length-1].counter);
	
	var counter = parseInt(data[data.length-1].counter);
	
	counter = counter +1;
	
	$("#counter").val(counter);
	
	
	if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $("#foo");
		// let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");
		// serialize the data in the form
		var serializedData = $form.serialize();
	
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);
		$('#result').text('Sending data...');
	
		// fire off the request to /form.php
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycbxUskOvNUz9yb6LMBLchjs_IU2xBRLxwqaH8nCMwowhy-_xeLQ1/exec",
			type: "post",
			data: serializedData
		});
	
		// callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			$('#result').html('<span class="success">Success</span>');
			console.log("Hooray, it worked!");
			flag=0;	
			$("#totalCount").html(counter);
			if(cta_var<cta.length-1)
				{
			cta_var=cta_var+1;
				}
			else
				{
				cta_var=0
				}
			$(".diwali-message").html("<h3>"+cta[cta_var]+"</h3>")
			$word1 = $('#arc-wrapper').find('h3');
			//console.log($word1);
			cta_init();
			
		});
	
		// callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			// log the error to the console
			console.error(
				"The following error occured: "+
				textStatus, errorThrown
			);
			flag=0;		
			$("#totalCount").html(counter);
		});
	
		// if the request failed or succeeded
		request.always(function () {
			// reenable the inputs
			$inputs.prop("disabled", false);
		});
}

	init();