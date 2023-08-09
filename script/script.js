// 84f583d3b70337f7a927c7209d583c78
// issue creation
// add weather inergration so that when a user inputs their work location the weather will pop up for that day
// and also show lat long for their location.
var saveButton = $('#search');
var city = $('.city')
saveButton.click(function () {
    var city = $('#cityInput').val();
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=83689c9844b7838e59ff072878e7fe48';
    
    console.log(city);
    // console.log(geoCode);

    fetch(weatherAPI)
        .then(function (repsonse) {
            return repsonse.json();
        })
        .then(function (data) {
            console.log(data);

        })
        .catch(function (error) {
            console.error('Error fetching weather data: ', error);
        });
})