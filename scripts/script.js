// 84f583d3b70337f7a927c7209d583c78 OpenWeather API key

// Get Geolocation by Name http://api.openweathermap.org/geo/1.0/direct?q={city-name},{state-code},{country-code}&limit={limit}&appid=84f583d3b70337f7a927c7209d583c78

// Get weather by location api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=84f583d3b70337f7a927c7209d583c78

const value = document.querySelector("#hours");
const input = document.querySelector("#estimatedTime");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = `Estimated Work Hours: ${event.target.value}`;
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

// hoursEl.HTML = `Hours estimated: ${sliderEl.value}`;

// sliderEl.onchange = function() {
//     hoursEl.HTML = `Hours estimated: ${sliderEl.value}`;
//     console.log(sliderEl.value)
//     return (sliderEl.value);
//   }