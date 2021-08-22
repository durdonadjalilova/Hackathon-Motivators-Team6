import React from 'react'

function ShowWeather({weatherData}) {

let imageLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    return (
        <div>
            <h5>{weatherData.name} </h5>
            <h5>{weatherData.weather[0].main}</h5>
            <img src={imageLink} placeholder="weather-icon"/>
            <h5>{Math.round(weatherData.main.temp)}{`° F`}</h5>

            
        </div>
    )
}

export default ShowWeather
