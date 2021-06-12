
function fetchForecast(coordinates) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: coordinates[1],
            lon: coordinates[0]
        },
        success: function (data) {

            console.log("SUCCESSFUL");
            console.log(data);

        }
    });
}