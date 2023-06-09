import magnify from "../img/magnify.svg";

const createWeatherDisplay = () => {
  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather-container");
  weatherContainer.classList.add("hide");

  const weatherLeftDiv = document.createElement("div");
  weatherLeftDiv.classList.add("weather-left");
  const weatherCenterDiv = document.createElement("div");
  weatherCenterDiv.classList.add("weather-center");
  const weatherRightDiv = document.createElement("div");
  weatherRightDiv.classList.add("weather-right");

  const weatherRightDivExcess = document.createElement("div");
  weatherRightDivExcess.classList.add("weather-right-excess");

  const weatherTitle = document.createElement("h2");
  weatherTitle.classList.add("weather-title");
  weatherTitle.textContent = "Weather";

  const timeToday = document.createElement("h3");
  timeToday.classList.add("weather-time");
  timeToday.textContent = "Time Placeholder";

  const condition = document.createElement("h3");
  condition.classList.add("weather-condition");
  condition.textContent = "condition Placeholder";

  const conditionIcon = document.createElement("img");
  conditionIcon.classList.add("weather-condition-icon");
  conditionIcon.alt = "An image for a condition";

  const temperature = document.createElement("h3");
  temperature.classList.add("weather-temperature");
  temperature.textContent = "temperature Placeholder";

  const humidity = document.createElement("h3");
  humidity.classList.add("weather-humidity");
  humidity.textContent = "humidity Placeholder";

  const wind = document.createElement("h3");
  wind.classList.add("weather-wind");
  wind.textContent = "wind Placeholder";

  weatherLeftDiv.appendChild(timeToday);
  weatherLeftDiv.appendChild(condition);

  weatherCenterDiv.appendChild(conditionIcon);

  weatherRightDivExcess.appendChild(humidity);
  weatherRightDivExcess.appendChild(wind);

  weatherRightDiv.appendChild(temperature);
  weatherRightDiv.appendChild(weatherRightDivExcess);

  weatherContainer.appendChild(weatherTitle);
  weatherContainer.appendChild(weatherLeftDiv);
  weatherContainer.appendChild(weatherCenterDiv);
  weatherContainer.appendChild(weatherRightDiv);

  document.body.appendChild(weatherContainer);
};

const createSearch = () => {
  const searchForm = document.createElement("form");
  searchForm.setAttribute("action", "");
  searchForm.setAttribute("id", "search-form");

  const searchLabel = document.createElement("label");
  searchLabel.setAttribute("for", "city");
  searchLabel.textContent = "City Name: ";

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");

  const searchInput = document.createElement("input");
  searchInput.setAttribute("id", "city");
  searchInput.setAttribute("name", "city");
  searchInput.setAttribute("maxLength", "85");

  const searchSubmit = document.createElement("button");
  searchSubmit.setAttribute("type", "submit");

  const searchIcon = document.createElement("img");
  searchIcon.src = magnify;
  searchIcon.alt = "Magnify icon from material design icons";
  searchIcon.classList.add("search-icon");

  searchSubmit.appendChild(searchIcon);

  searchForm.appendChild(searchLabel);
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchSubmit);

  searchForm.appendChild(searchContainer);

  document.body.appendChild(searchForm);
};

const createHeader = () => {
  const header = document.createElement("h1");
  header.textContent = "Weather App";
  document.body.appendChild(header);
};

const createDom = () => {
  createHeader();
  createSearch();
  createWeatherDisplay();
};

export default createDom;
