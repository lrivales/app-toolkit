// js for weather card

function getWeather() {
    // build queryUrl
    queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=7dddd78df5cbb905a33ba3be92421fbf&units=imperial"
    
    fetch(queryUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var city = (data.name);
            console.log(city);
        });
  
    //     .then(response => {
    //         //do stuff
    //         response.json()
    //     })
    // var city = (data.name);
    // console.log(city)
};

$("#weatherBtn").click(function() {
    // open modal
    $("#weatherModal").addClass("active");

    // update modal for weather form

    // get city name

    // exec getWeather
    getWeather();

    // update modal with weather info
});