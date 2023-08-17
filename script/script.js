// 84f583d3b70337f7a927c7209d583c78
// 83689c9844b7838e59ff072878e7fe48 JO weather key


//Issue Creation variable delcaration
const value = document.querySelector("#hours");
const input = document.querySelector("#estimatedTime");
var acceptEl = $("#taskAccept");
var denyEl = $("#taskReject");
var workDay = document.getElementById("workDay");
var issueType = document.getElementById("issueType");
var assignedEmployee = document.getElementById("assignedEmployee");
var estimatedTime = document.getElementById("estimatedTime");

//Weather Search API

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

//Issue Creation

value.textContent = "Estimated Work Hours: 20";

input.addEventListener("input", (event) => {
  value.textContent = `Estimated Work Hours: ${event.target.value}`;
});


function addNewIssue() {
  const html = $(`<li class="m-3"> Issue: ${issueType.value}</li>
  <li class="m-3"> Employee: ${assignedEmployee.value}</li>
  <li class="m-3">Estimated Time: ${estimatedTime.value} Hours</li>`);

  if (workDay.value === "monday") {
    $("#mondayIssues").append(html)
  } 

  else if (workDay.value == "tuesday") {
    $("#tuesdayIssues").append(html)
  }

  else if (workDay.value == "wednesday") {
    $("#wednesdayIssues").append(html)
  }

  else if (workDay.value == "thursday") {
    $("#thursdayIssues").append(html)
  }

  else if (workDay.value == "friday") {
    $("#fridayIssues").append(html)
  }
};

acceptEl.on("click", addNewIssue);
acceptEl.on("click", function() {
    console.log("clicked")
})