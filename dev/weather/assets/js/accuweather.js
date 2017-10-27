var city_id, cur_city_name, city_temp, city_cond, forecasts_data, cond_icon;



function get_weather(id) { // for current location

	
    var url = "https://apidev.accuweather.com/currentconditions/v1/" + id + ".json?language=en&apikey=1bbb649ae0174399b320067bbc1c3aa8";
    $.getJSON(url, {
            tagmode: "any",
            format: "json"
        })
        .done(function(data) {
			
            city_temp = data[0].Temperature.Metric.Value + "°C";
            city_cond = data[0].WeatherText;
            //console.log(city_temp, city_cond);
			cond_icon = (data[0].WeatherIcon);
            append_data();
            getForecastsInfo(city_id);
            $('.local-weather--left').html("<img src='assets/images/icons/" + data[0].WeatherIcon + ".png'>");
            $('.aside--top-icon').html("<img src='assets/images/icons/" + data[0].WeatherIcon + ".png'>");
			
		
			//console.log(cond_icon);
		
            //white

            if (cond_icon == "19" || cond_icon == "20" || cond_icon == "21" || cond_icon == "22" || cond_icon == "23" || cond_icon == "24" || cond_icon == "25" || cond_icon == "26" || cond_icon == "29") {
                $("body").addClass("bg-white");
            }

            //black
            else if (cond_icon == "8" || cond_icon == "15" || cond_icon == "16" || cond_icon == "17" || cond_icon == "18" || cond_icon == "39" || cond_icon == "40" || cond_icon == "41" || cond_icon == "42" || cond_icon == "43" || cond_icon == "44") {
                $("body").addClass("bg-black");
            }

            //blue
            else if (cond_icon == "1" || cond_icon == "2" || cond_icon == "3" || cond_icon == "4" || cond_icon == "6" || cond_icon == "7" || cond_icon == "11" || cond_icon == "12" || cond_icon == "13" || cond_icon == "31" || cond_icon == "32" || cond_icon == "aaa") {
                $("body").addClass("bg-blue");
            }

            //yellow
            else if (cond_icon == "5" || cond_icon == "14" || cond_icon == "30") {
                $("body").addClass("bg-yellow");
            }
		
		//purple
            else if (cond_icon == "33" || cond_icon == "34" || cond_icon == "35" || cond_icon == "36" || cond_icon == "37" || cond_icon == "38") {
                $("body").addClass("bg-purple");
            }
        });
}



function getCityInfoByLatLong(x, y) { //for current location


    var url = "https://apidev.accuweather.com/locations/v1/cities/geoposition/search.json?q=" + x + "," + y + "&apikey=1bbb649ae0174399b320067bbc1c3aa8";
    $.getJSON(url, {
            tagmode: "any",
            format: "json"
        })
        .done(function(data) {
		
            cur_city_name = data.LocalizedName;
            city_id = data.Key;
            get_weather(city_id);

        });

}

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

function getForecastsInfo(city_id) {
    //console.log(city_id);



    var url = "https://apidev.accuweather.com/forecasts/v1/daily/5day/" + city_id + "?apikey=1bbb649ae0174399b320067bbc1c3aa8&details=true";
    $.getJSON(url, {
            tagmode: "any",
            format: "json"
        })
        .done(function(forecast_data) {
            for (var i = 0; i < 5; i++) {
                //console.log(d);
				
				
				 //toCelsius(f);
				//console.log(toCelsius(forecast_data.DailyForecasts[i].Temperature.Maximum.Value).toFixed(2));
				
				

               var cur_date = new Date();
                //console.log(cur_date.addDays(i))
				
				//forecast_data.DailyForecasts[i].Temperature.Maximum.Value
				if(i==0){
					$(".daily-weather--slider").html('');
					$(".daily-weather--slider").removeClass("slick-initialized")
					$(".daily-weather--slider").removeClass("slick-slider");
				}
                $(".daily-weather--slider").append("<li><h4 class='daily-weather--headline'>" + weekday[cur_date.addDays(i).getDay()] + "</h4><span class='daily-weather--icon'><img src='assets/images/icons/" + forecast_data.DailyForecasts[i].Day.Icon + ".png'></span><div class='daily-weather--temp'><span class='small-temp'>" + toCelsius(forecast_data.DailyForecasts[i].Temperature.Maximum.Value).toFixed(1) + '°C' + "</span><span class='large-temp'>" +toCelsius(forecast_data.DailyForecasts[i].Temperature.Minimum.Value).toFixed(1) + '°C' + "</span></div></li>");
				
				

            }
		init_weather_slider();
        });
}




function getLatLong(){ // for current location

    navigator.geolocation.getCurrentPosition(latlong_success);

    function latlong_success(pos) {
        var crd = pos.coords;
        getCityInfoByLatLong(crd.latitude, crd.longitude);
    };
}

function append_data(){ // for current location
	
	//alert(cur_city_name)
    $("#currentLocation").html(cur_city_name);
    $("#currentTemp").html(city_temp);
    $("#currentCond").html(city_cond);
}


getLatLong();

// current location ends

// begin listing 

var city_array = ["Agra", "Mumbai", "Chennai", "Kolkata", "Bangalore", "Lucknow", "Assam", "Rajasthan"];
var city_id_array = [];
var city_weather_array = []; // use this
var city_list_array_count = 0;
var id_list_array_count = 0;


function get_weather_list(id) { // for current location
	
    var url = "https://apidev.accuweather.com/currentconditions/v1/" + id + ".json?language=en&apikey=1bbb649ae0174399b320067bbc1c3aa8";
    $.getJSON(url, {
            tagmode: "any",
            format: "json"
        })
        .done(function(data) {
            //city_temp = data[0].Temperature.Metric.Value+ "°C";
            //city_cond= data[0].WeatherText;
            city_weather_array.push(data[0].Temperature.Metric.Value + "°C");
            //console.log(city_weather_array);
            id_list_array_count = id_list_array_count + 1;
            //console.log("yes");
            if (id_list_array_count < city_array.length) {
                append_city_weather_array(id_list_array_count)
            } else {
                //console.log(city_weather_array);
                // append list
                for (var i = 0; i < city_array.length; i++) {
                    $(".city_list").append("<li><span class='city_name'>" + city_array[i] + "</span><span class='city_border'></span><span class='city_temp'>" + city_weather_array[i] + "</span></li>");
                    if (i == city_array.length - 1) {
                        reset_dash();
                    }
                }
            }

        });

}


function getIdByCityName(city_name) { // For the city listing
	
    var url = "https://apidev.accuweather.com/locations/v1/search?q=" + city_name + ",%20india&apikey=1bbb649ae0174399b320067bbc1c3aa8";
    $.getJSON(url, {
            tagmode: "any",
            format: "json"
        })
        .done(function(data) {
            //get_weather_array(data[0].Key)
            //console.log(data[0].Key)
            //console.log(data[0].Key);
		
            city_id_array.push(data[0].Key);
            //console.log(city_id_array);
            city_list_array_count = city_list_array_count + 1;
            if (city_list_array_count < city_array.length) {
                append_city_id_array(city_list_array_count)
            } else {
                append_city_weather_array(id_list_array_count);
            }

        });

}



function getIdByChangeCityName(city_name) { // For the city listing
	
    var url = "https://apidev.accuweather.com/locations/v1/search?q=" + city_name + ",%20india&apikey=1bbb649ae0174399b320067bbc1c3aa8";
    $.getJSON(url, {
            tagmode: "any",
            format: "json"
        })
        .done(function(data) {
            //get_weather_array(data[0].Key)
            //console.log(data[0].Key)
            console.log(data);
			
			cur_city_name = data[0].LocalizedName;
			city_id = data[0].Key;
            get_weather(city_id);
 //console.log(city_id_array);

        });

}


function append_city_id_array(x) {
    getIdByCityName(city_array[x]);

}

function append_city_weather_array(x) {
    get_weather_list(city_id_array[x]);

}
append_city_id_array(city_list_array_count)


var d = new Date();

var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

document.getElementById("toDay").innerHTML = weekday[d.getDay()];

var current_day_index = weekday.indexOf(weekday[d.getDay()]);


function toCelsius(f) {
	var celsius = (5/9) * (f-32);
   return celsius
	
	
}


get_weather("202396");
