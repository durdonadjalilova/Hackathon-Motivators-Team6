import React from 'react'

function ShowWeather({weatherData}) {

let imageLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    return (
        <div>
            <h2>{weatherData.name} </h2>
            <h2>{weatherData.weather[0].main}</h2>
            <img src={imageLink} placeholder="weather-icon"/>
            <h2>{Math.round(weatherData.main.temp)}{`° F`}</h2>

            
        </div>
    )
}

export default ShowWeather
