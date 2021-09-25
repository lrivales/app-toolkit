// js for weather card

function getWeather(searchCity) {
    // build queryUrl
    queryUrl = "https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&APPID=7dddd78df5cbb905a33ba3be92421fbf&units=imperial"

    // fetch weather info from openweatherapi
    fetch(queryUrl)
        .then(response => response.json())
        .then(currentWeather => {
            // get city name
            if (currentWeather.name) {
                // delete weather form
                $("#weatherFormGrp").empty();
                // get city coordinates
                var lat = (currentWeather.coord.lat);
                var lon = (currentWeather.coord.lon);
                // update modal with weather info
                $("#weatherModalTitle").text(currentWeather.name);
                $("#weatherModalTitle").removeClass("text-error");
                $("#weatherModalTitle").addClass("text-success");
                $("#weatherModalImg").attr("src", "https://openweathermap.org/img/wn/"+currentWeather.weather[0].icon+"@2x.png");
                $("weatherModalImg").attr("alt", currentWeather.weather[0].description);
                $("#weatherModalTemp").text("Temp: "+currentWeather.main.temp+"F");
                $("#weatherModalWind").text("Wind: "+currentWeather.wind.speed+" MPH");
                $("#weatherModalHumidity").text("Humidity: "+currentWeather.main.humidity+"%");
            } else {
                // if city name is invalid
                $("#weatherModalTitle").text("City is invalid. Please try again.");
                $("#weatherModalTitle").addClass("text-error");
                localStorage.clear();
            }
        });
};

$("#weatherBtn").click(function() {
    // get city name from local storage
    var city = JSON.parse(localStorage.getItem("city"));
    // if localstorage is not empty
    if (city) {
        // exec getWeather
        getWeather(city);
        $("#weatherModal").addClass("active");
    // if localstorage is empty
    } else {
        // open modal
        $("#weatherModal").addClass("active");
        // update modal for weather form
        $("#weatherModalTitle").text("What city are you in?");
    }
});

$("#weatherFormBtn").click(function() {
    // get the user's input
    var searchCity = $("#searchCity").val()
    // exec get weather
    getWeather(searchCity);
    // store user input in local storage
    localStorage.setItem("city", JSON.stringify(searchCity));
});