import react from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const API_URL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${API_KEY}`;
const zipCode = 11756;
const API_KEY = `be4aceb4cdf59db0f6328334127e108`;

const useForecast = () => {
  const [forecast, setForecast] = useState(null);

  const fetchForecastData = async () => {
    try {
      const res = await axios.get(`${API_URL}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return fetchForecastData
};

export default useForecast;
