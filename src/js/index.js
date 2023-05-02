//Import css
import "../css/reset.css";
import "../css/styles.css";

//Import js

const getWeather = async () => {
  const fetchWeather = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=" +
      process.env.weatherApi_key +
      "&q=" +
      "Edmonton",
    {
      mode: "cors",
    }
  );
  const weatherObj = await fetchWeather.json();
  console.log(weatherObj);
};

getWeather();
