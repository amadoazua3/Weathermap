function buildDOMObjects(forecastData, location){

    $('#forecast-container').html('');

    // console.log(forecastData);
    // console.log(location);

    $('#city').html('');
    let city = location.name;

    $('#city').append(`<h3 class="text-center pb-4 pt-5">The weather in: ${city}</h3>`)

        renderCards(forecastData);
}


function renderCards(forecastData) {
    for (let i = 0; i < forecastData.length; i++) {

        let temp = forecastData[i].main.temp;
        let feels = forecastData[i].main.feels_like;
        let max = forecastData[i].main.temp_max;
        let low = forecastData[i].main.temp_min;
        let des = forecastData[i].weather[0].description;

        let timeDate = forecastData[i].dt;
        // console.log(timeDate);
        timeDate = new Date(timeDate * 1000);
        let formattedTime = new Date(timeDate).toDateString();
        // console.log(formattedTime);

    $('#forecast-container').append(`
<div class="card col-2 mx-5" >
        <div class=“card-body”>
            <p class=“card-title”>${formattedTime}</p>
            <p class=“card-text”> <hr>${temp}
            <hr>
            ${des}
            <hr>
            it feels like ${feels}
            <hr>
            high: ${max}
            <hr>
            low: ${low}
            </p>
        </div>
</div> `)

}

}

$(document).ready(function (event) {
    $('body').css('background-color', '#ecf0f1');
    $('#nav').css('background-color', '#9b59b6');
})


