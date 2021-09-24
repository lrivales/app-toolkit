// js for weather card

function getWeather() {
    // build queryUrl
    queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=7dddd78df5cbb905a33ba3be92421fbf&units=imperial"

    fetch(queryUrl)
        .then(response => response.json())
        .then(currentWeather => {
            // get city name
            if (currentWeather.name) {
                console.log(currentWeather)
                // get city coordinates
                var lat = (currentWeather.coord.lat);
                var lon = (currentWeather.coord.lon);
                $("#weatherModalTitle").text(currentWeather.name);
                $("#weatherModalImg").attr("src", "https://openweathermap.org/img/wn/"+currentWeather.weather[0].icon+"@2x.png");
                $("weatherModalImg").attr("alt", currentWeather.weather[0].description);
                $("#weatherModalTemp").text("Temp: "+currentWeather.main.temp+"F");
                $("#weatherModalWind").text("Wind: "+currentWeather.wind.speed+" MPH");
                $("#weatherModalHumidity").text("Humidity: "+currentWeather.main.humidity+"%");
            } else {
                console.log("Invalid City Name");
            }
        });
};

$("#weatherBtn").click(function() {
    // open modal
    $("#weatherModal").addClass("active");

    // update modal for weather form
    $("#weatherModalTitle").text("What city are you in?");
    // get city name

    // exec getWeather
    // getWeather();

    // update modal with weather info
});