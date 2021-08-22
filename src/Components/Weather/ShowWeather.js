import React from "react";
import "./showWeather.css";

function ShowWeather({ weatherData }) {
  let imageLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  return (
    <div>
        <h2>{weatherData.name} </h2>
        <h2>{weatherData.weather[0].main}</h2>
        <img src={imageLink} placeholder="weather-icon"/>
        <h2>{Math.round(weatherData.main.temp)}{`° F`}</h2>

    </div>
    // <div className="card">
    //   <img
    //     className="card-img-top"
    //     src={imageLink}
    //     placeholder="weather-icon"
    //   />
    //   <div className="card-body">
    //   <p className="card-text">{weatherData.name} </p>
    //   <p className="card-text">{weatherData.weather[0].main}</p>
    //   <p className="card-text">
    //     {Math.round(weatherData.main.temp)}
    //     {`° F`}
    //   </p>

    //   </div>
    // </div>
  );
}

export default ShowWeather;
