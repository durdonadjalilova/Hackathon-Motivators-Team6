import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const zipCode = 11756;
  const API_KEY = `3be4aceb4cdf59db0f6328334127e108`;
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${API_KEY}`;

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const res = await axios.get(`${API_URL}`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchForecastData();
  }, []);
  return (
    <div>
      <h3>Here is your weather for today:</h3>
      <ShowWeather/>
    </div>
  );
};

export default Weather;