function buildDOMObjects(forecastData, location){

    $('#forecast-container').html('');
    $('#city').html('');

    console.log(forecastData);
    console.log(location);

    let city = location.name;

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
<div class="card col-2" style="width: 18em">
        <div class=“card-body”>
            <h5 class=“card-title”>${formattedTime}</h5>
            <p class=“card-text”> ${temp}
            <br>
            ${des}
            <br>
            it feels like ${feels}
            <br>
            high: ${max}
            <br>
            low: ${low}
            <br>
            </p>
        </div>
</div> `)
    }

    $('#city').append(`<h3 class="text-center">The weather in: ${city}</h3>`)

}



