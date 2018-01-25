var city_id,
   cur_city_name,
   city_temp, city_cond,
   forecasts_data,
   cond_icon;

function get_weather(city_id) { 
   var url = "https://apidev.accuweather.com/currentconditions/v1/" + city_id + ".json?language=en&apikey=1bbb649ae0174399b320067bbc1c3aa8";
   $.getJSON(url, {
         tagmode: "any",
         format: "json"
      })
      .done(function(data) {
         city_temp = data[0].Temperature.Metric.Value + "°C";
         city_cond = data[0].WeatherText;
         cond_icon = (data[0].WeatherIcon);
         $('.cond-ico').html("<img src='assets/images/icons/" + data[0].WeatherIcon + ".png'>");
         $('.cond-temp').html(city_temp);

         $("body").attr('class', 'cleanstate');

         if (cond_icon == "19" || cond_icon == "20" || cond_icon == "21" || cond_icon == "22" || cond_icon == "23" || cond_icon == "24" || cond_icon == "25" || cond_icon == "26" || cond_icon == "29") {
            $("body").addClass("bg-white");
         }

         //black
         else if (cond_icon == "15" || cond_icon == "16" || cond_icon == "17" || cond_icon == "18" || cond_icon == "39" || cond_icon == "40" || cond_icon == "41" || cond_icon == "42" || cond_icon == "43" || cond_icon == "44") {

            $("body").addClass("bg-black");
         }

         //blue
         else if (cond_icon == "8" || cond_icon == "1" || cond_icon == "2" || cond_icon == "3" || cond_icon == "4" || cond_icon == "6" || cond_icon == "7" || cond_icon == "11" || cond_icon == "12" || cond_icon == "13" || cond_icon == "31" || cond_icon == "32") {
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

function toCelsius(f) {
   var celsius = (5 / 9) * (f - 32);
   return celsius
}


function getForecastsInfo(city_id) {
   var url = "https://apidev.accuweather.com/forecasts/v1/daily/1day/" + city_id + "?apikey=1bbb649ae0174399b320067bbc1c3aa8&details=true";
   $.getJSON(url, {
         tagmode: "any",
         format: "json"
      })
      .done(function(forecast_data) {
         $('.temp-min').html(toCelsius(forecast_data.DailyForecasts[0].Temperature.Minimum.Value).toFixed(1) + '°C');
         $('.temp-max').html(toCelsius(forecast_data.DailyForecasts[0].Temperature.Maximum.Value).toFixed(1) + '°C');
      });
}

function getIdByCityName(city_name) { 
   var url = "https://apidev.accuweather.com/locations/v1/search?q=" + city_name + ",%20india&apikey=1bbb649ae0174399b320067bbc1c3aa8";
   $.getJSON(url, {
         tagmode: "any",
         format: "json"
      })
      .done(function(data) {
         $('.weather-widget-location').html(data[0].LocalizedName);
         get_weather(data[0].Key);
         getForecastsInfo(data[0].Key);
      });
}

var city_array = ["Delhi", "Mumbai", "Bangalore", "Kolkata"];

getIdByCityName(city_array[0]);

var x = 0;

setInterval(function() {
   if (x < city_array.length - 1) {
      x = x + 1;
   } else {
      x = 0;
   }

   getIdByCityName(city_array[x]);

}, 5000);