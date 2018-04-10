var public_spreadsheet = 'https://docs.google.com/spreadsheets/d/1_eWCuXCI-GavXYEAp_KCUcsWWeDDjpLGCGZ100-pY0M/pubhtml';	
Tabletop.init({
				key: public_spreadsheet,
				callback: showInfo,
				simpleSheet: true
		});

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

		
var chat_data;
		function showInfo(data) {
			
		var id = getParameterByName('id');
		//console.log(id-2);
		//chat_data=JSON.parse(data[21].message);
		chat_data=JSON.parse(data[id-2].message);
		console.log(chat_data);
		//console.log(data.length);
		
			
		preview_data();
			//alert("yes");
			
		}