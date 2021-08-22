import React from 'react'

function ShowWeather({weatherData}) {

let imageLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    return (
        <div>
            <h3>{weatherData.name} </h3>
            <h3>{weatherData.weather[0].main}</h3>
            <img src={imageLink} placeholder="weather-icon"/>
            <h3>{Math.round(weatherData.main.temp)}{`° F`}</h3>
        </div>
    )
}

export default ShowWeather
