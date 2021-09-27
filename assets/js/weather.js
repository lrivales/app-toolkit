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
                // hide weather form
                $("#weatherFormGrp").hide();
                // update modal with weather info
                $("#weatherModalTitle").text(currentWeather.name);
                $("#weatherModalTitle").removeClass("text-error");
                $("#weatherModalTitle").addClass("text-success");
                $("#weatherModalImg").attr("src", "https://openweathermap.org/img/wn/"+currentWeather.weather[0].icon+"@2x.png");
                $("weatherModalImg").attr("alt", currentWeather.weather[0].description);
                $("#weatherModalTemp").text("Temp: "+currentWeather.main.temp+"F");
                $("#weatherModalWind").text("Wind: "+currentWeather.wind.speed+" MPH");
                $("#weatherModalHumidity").text("Humidity: "+currentWeather.main.humidity+"%");
                // show weather content
                $("#weatherContent").show();
                // show delete button
                $("#weatherModalFooter").show()

            } else {
                // if city name is invalid
                $("#weatherModalTitle").text("City is invalid. Please try again.");
                $("#weatherModalTitle").addClass("text-error");
                // localStorage.clear();
                $("#weatherModalFooter").hide()
            }
        });
};

$("#weatherBtn").click(function() {
    // hide delete button
    $("#weatherModalFooter").hide()
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

$("#weatherDeleteBtn").click(function() {
    // localStorage.clear();
    $("#weatherModalFooter").hide()
    $("#weatherContent").hide();
    $("#weatherFormGrp").show();
    $("#weatherModalTitle").text("What city are you in?");
    $("#weatherModalTitle").removeClass("text-success");
});