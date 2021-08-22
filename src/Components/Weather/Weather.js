import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";


const Weather = ({ zipCode, setZipCode, changeKeyword }) => {
  const [weatherData, setWeatherData] = useState(null);

  const zipCode = 96795;
  const API_KEY = `3be4aceb4cdf59db0f6328334127e108`;
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${API_KEY}`;

  useEffect(async () => {
    const fetchWeatherData = async () => {
      try {
        const res = await axios.get(`${API_URL}`);

        changeKeyword(res.data.weather[0].main);
        setWeatherData(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };


    await fetchWeatherData();

    fetchForecastData();
        setZipCode(localStorage.getItem("zipValue"));

  }, []);
  return (
    <div>
      <h3>Here is your weather for today:</h3>
      {weatherData && <ShowWeather weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
