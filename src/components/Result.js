import React from 'react';
import './App.css';
import './weatherIcon.css'

const Result = props => {
    const { error, city, date, time, sunrise, sunset, temp, pressure, wind, weatherMain, weatherDesc
    } = props.weather;

    const renderWeatherIcon = () => {
        switch (weatherMain) {
            case "Clear": return "sunny";
            case "Clouds": return "cloudy";
            case "Rain": return "rainy";
            case "Thunderstorm": return "stormy";
            case "clear sky": return "snowy";
            case "few clouds": return "rainbow";
            default: return "clear"
        }
    }

    let content = null;

    if (!error && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <>
                <h3>Wyniki wyszukiwania dla miasta {city}.</h3>
                <h4>Dzień: {date}</h4>
                <h4>Czas: {time}</h4>
                <h4>Aktualna temperatura: {temp} &#176;C</h4>
                <h4>Wschód słońca o: {sunriseTime}</h4>
                <h4>Zachód słońca o: {sunsetTime}</h4>
                <h4>Siła wiatru: {wind} m/s</h4>
                <h4>Ciśnienie: {pressure} hPa</h4>
                <h4>Pogoda: {weatherMain} hPa</h4>
                <h4>Pogoda cd: {weatherDesc} hPa</h4>
                <div className={renderWeatherIcon()} >
                </div>
            </>
        )
    }

    return (
        <>
            {error ? (city.length <= 1 ? '' : `Niestety nie znaleziono miasta ${city}.`) : content}
        </>
    );
}

export default Result;