let apiKey = "9e6951d7bf7f6b004179d0efcea33701";

const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".input-btn");
const notFoundSection = document.querySelector(".not-found");
const searchCitySection = document.querySelector(".search-city");
const weatherInfoSection = document.querySelector(".weather-info");
const cityName = document.querySelector(".country-txt");
const tempTxt = document.querySelector(".temp-text");
const conditionTxt = document.querySelector(".condition-txt");
const humidityInfo = document.querySelector(".humidity-info");
const windSpeedInfo = document.querySelector(".windspeed-info");
const weatherImg = document.querySelector(".main-img");
const currentDate = document.querySelector(".current-date-txt");
const forecastItemsContainer = document.querySelector(".forecast-container");

searchBtn.addEventListener("click", () => {
  if (cityInput.value.trim() != "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});
cityInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && cityInput.value.trim() != "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});
function getWeatherIcon(id) {
  if (id <= 232) return `thunderstorm.svg`;
  if (id <= 321) return `drizzle.svg`;
  if (id <= 531) return `rain.svg`;
  if (id <= 622) return `snow.svg`;
  if (id <= 781) return `atmosphere.svg`;
  if (id <= 800) return `clear.svg`;
  else return `clouds.svg`;
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };
  return currentDate.toLocaleDateString("en-GB", options);
}
async function getFetchData(endpoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  return response.json();
}
async function updateWeatherInfo(city) {
  const weatherData = await getFetchData("weather", city);

  if (weatherData.cod != 200) {
    showDisplaySection(notFoundSection);
    return;
  }
  const {
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
  } = weatherData;
  cityName.textContent = country;
  tempTxt.textContent = Math.round(temp) + "°C";
  conditionTxt.textContent = main;
  humidityInfo.textContent = humidity + "%";
  windSpeedInfo.textContent = speed + "M/s";
  weatherImg.src = `../assets/weather/${getWeatherIcon(id)}`;

  await updateForecastInfo(city);
  showDisplaySection(weatherInfoSection);
}

async function updateForecastInfo(city) {
  const foreCastData = await getFetchData("forecast", city);

  const timeTaken = "12:00:00";
  const todayDate = new Date().toISOString().split("T")[0];

  forecastItemsContainer.innerHTML = ``;
  foreCastData.list.forEach((forecastWeather) => {
    if (
      forecastWeather.dt_txt.includes(timeTaken) &&
      !forecastWeather.dt_txt.includes(todayDate)
    ) {
      updateForecastItems(forecastWeather);
    }
  });
}

function updateForecastItems(weatherData) {
  const {
    dt_txt: date,
    weather: [{ id }],
    main: { temp },
  } = weatherData;

  const dateTaken = new Date(date);
  const dateOption = {
    day: "2-digit",
    month: "short",
  };
  const dateResult = dateTaken.toLocaleDateString("en-US", dateOption);
  const forecastItem = `
      <div class="card" id="1">
                <p>${dateResult}</p>
                <img
                  class="card-img"
                  src="../assets/weather/${getWeatherIcon(id)}"
                  alt=""
                />
                <p>${Math.round(temp) + "°C"}</p>
      </div>
  `;
  forecastItemsContainer.insertAdjacentHTML("beforeend", forecastItem);
}
function showDisplaySection(section) {
  [weatherInfoSection, searchCitySection, notFoundSection].forEach(
    (section) => (section.style.display = "none")
  );
  section.style.display = "flex";
}
