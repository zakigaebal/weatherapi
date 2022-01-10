const weather = document.querySelector(".js-weather");

const API_KEY = "aa6ceff75ee966bc45ddbfba4edf90b1";

function getWeather() {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`
  )
    .then(function (respone) {
      return respone.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `서울의 현재 온도는  ${Math.ceil(
        temperature - 273.15
      )}도`;
    });
}

function init() {
  getWeather();
}
init();
