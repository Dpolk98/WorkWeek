// 84f583d3b70337f7a927c7209d583c78 OpenWeather API key

// Get Geolocation by Name http://api.openweathermap.org/geo/1.0/direct?q={city-name},{state-code},{country-code}&limit={limit}&appid=84f583d3b70337f7a927c7209d583c78

// Get weather by location api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=84f583d3b70337f7a927c7209d583c78

const value = document.querySelector("#hours");
const input = document.querySelector("#estimatedTime");
var acceptEl = $("#taskAccept");
var denyEl = $("#taskReject");
var workDay = document.getElementById("workDay");
var issueType = document.getElementById("issueType");
var assignedEmployee = document.getElementById("assignedEmployee");
var estimatedTime = document.getElementById("estimatedTime")
var newIssuesEl = document.getElementById("newIssues");

value.textContent = "Estimated Work Hours: 40";

input.addEventListener("input", (event) => {
  value.textContent = `Estimated Work Hours: ${event.target.value}`;
});


acceptEl.on("click", function(){
    localStorage.setItem(`taskDay`, workDay.value);
    localStorage.setItem(`taskType`, issueType.value);
    localStorage.setItem(`taskEmployee`, assignedEmployee.value);
    localStorage.setItem(`taskTime`, estimatedTime.value);
    newIssuesEl.append(localStorage.getItem(`taskDay`));
    console.log(localStorage.getItem(`taskDay`));
})

