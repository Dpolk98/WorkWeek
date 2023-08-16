// 84f583d3b70337f7a927c7209d583c78
// 83689c9844b7838e59ff072878e7fe48 JO weather key
// issue creation
// add weather inergration so that when a user inputs their work location the weather will pop up for that day
// and also show lat long for their location.
var saveButton = $('#search');
var city = $('.city')
saveButton.click(function () {
    var city = $('#cityInput').val();
    var weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=84f583d3b70337f7a927c7209d583c78';
    
    console.log(city);
    // console.log(geoCode);

    fetch(weatherAPI)
        .then(function (repsonse) {
            return repsonse.json();
        })
        .then(function (data) {
            console.log(data);
            $("#weatherDayOne").empty()
            const html = $(`
               <div class="card col-4">
                    <div class="card-body">
                        <h5 class="card-title">${data.city.name} ${data.list[3].dt_txt.split(' ')[0]} <img src="https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png" alt="img"></h5>
                        <p>location: ${data.city.coord.lat} lat, ${data.city.coord.lon} lon </p>
                        <p>Temp: ${data.list[3].main.temp}&#8457</p>
                        <p>Wind: ${data.list[3].wind.speed} MPH</p>
                        <p>humidity: ${data.list[3].main.humidity}%</p>
                    </div>
                </div>
            `)
            $("#weatherDayOne").append(html);
        })
        .catch(function (error) {
            console.error('Error fetching weather data: ', error);
        });
})