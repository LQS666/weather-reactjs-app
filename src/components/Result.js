import React from 'react';
import './weatherIcon.css';
import './Result.css';

const Result = props => {
    const { error, city, date, time, sunrise, sunset, temp, pressure, wind, weatherMain
    } = props.weather;

    const renderWeatherIcon = () => {
        switch (weatherMain) {
            case "Clear": return "sunny";
            case "Clouds": return "cloudy";
            case "Rain": return "rainy";
            case "Thunderstorm": return "stormy";
            case "Snow": return "snowy";
            default: return "clear"
        }
    }

    const renderWeatherInfoLangPL = () => {
        switch (weatherMain) {
            case "Clear": return "Słonecznie";
            case "Clouds": return "Pochmurno";
            case "Rain": return "Deszcz";
            case "Thunderstorm": return "Burza";
            case "Snow": return "Śnieg";
            default: return "Słonecznie"
        }
    }

    let content = null;

    if (!error && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <>
                <div className='weatherInfoContainer'>
                    <div className='weatherInfoCity'>
                        <h4>{time}</h4>
                        <h2>{city}</h2>
                        <h4>{renderWeatherInfoLangPL()}</h4>
                    </div>
                    <div className='weatherInfoDetails'>
                        <h2>{temp.toFixed()} &#176;C</h2>
                        <h5>Dzisiaj, {date}</h5>
                        <div>
                            <h4>Wschód słońca: {sunriseTime}</h4>
                            <h4>Zachód słońca: {sunsetTime}</h4>
                            <h4>Ciśnienie: {pressure} hPa</h4>
                            <h4>Siła wiatru: {wind} m/s</h4>
                        </div>
                    </div>
                    <div className={renderWeatherIcon()} />
                </div>
            </>
        )
    }

    return (
        <>
            {error ? (city.length <= 1 ? '' : <h4 className='error'>Nie znaleziono miasta {city}...😢</h4>) : content}
        </>
    );
}

export default Result;