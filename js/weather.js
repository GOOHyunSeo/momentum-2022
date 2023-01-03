const API_KEY = "eb5686b7e55a057a047f8997167d6489";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const info = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      info.innerText = `${data.weather[0].main} / ${data.main.temp} °`;
    });
}

function geoError() {
  alert("Can't get position. No weather for you.😢");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
