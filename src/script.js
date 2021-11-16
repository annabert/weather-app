let now = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",

  "Monday",

  "Tuesday",

  "Wednesday",

  "Thursday",

  "Friday",

  "Saturday"
];

let months = [
  "January",

  "February",

  "March",

  "April",

  "May",

  "June",

  "July",

  "August",

  "September",

  "October",

  "November",

  "December"
];

let month = months[now.getMonth()];

let day = days[now.getDay()];

let currentTime = `<em>${hours}:${minutes}</em>`;

console.log(currentTime);

let timeDisplay = document.querySelector("#current-time");

timeDisplay.innerHTML = currentTime;

let currentDate = `<em>${date} ${month} ${year}</em>`;

let dateDisplay = document.querySelector("#current-date");

dateDisplay.innerHTML = currentDate;

function displayWeatherCondition(response) {
  document.querySelector(".current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  //current - sky;
  document.querySelector(".current-sky").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "bf0859e801c6e17bde36a2feadb3de15";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search").value;
  searchCity(city);
}

// changing celsius

function changeCelsius(event) {
  event.preventDefault();

  temperature.innerHTML = "18°";
}

function changeFahrenheit(event) {
  event.preventDefault();

  temperature.innerHTML = "66°";
}

let celsius = document.querySelector("#celsius");

let fahrenheit = document.querySelector("#fahrenheit");

let temperature = document.querySelector("#temperature");

celsius.addEventListener("click", changeCelsius);

fahrenheit.addEventListener("click", changeFahrenheit);

let weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", handleSubmit);

searchCity("New York");
