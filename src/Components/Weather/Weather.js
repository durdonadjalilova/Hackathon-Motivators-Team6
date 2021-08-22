import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";

const Weather = ({ zipCode, setKeyword }) => {
  const [weatherData, setWeatherData] = useState(null);

  let currentZip = zipCode || window.localStorage.getItem("zipValue")

  //   const currenzipCode = 96795;
  const API_KEY = `3be4aceb4cdf59db0f6328334127e108`;
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?zip=${currentZip},us&units=imperial&appid=${API_KEY}`;

  useEffect(async () => {
    const fetchWeatherData = async () => {
      try {
        const res = await axios.get(API_URL);

        setKeyword(res.data.weather[0].main);
        setWeatherData(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h3>Here is your weather for today:</h3>
      {weatherData && <ShowWeather weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
