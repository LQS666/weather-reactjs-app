import React from 'react';

const Result = props => {
    const { error, city, date, time, sunrise, sunset, temp, pressure, wind
    } = props.weather;

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
            </>
        )
    }

    return (
        <>
            {error ? `Niestety miasto ${city} nie istnieje w naszej bazie danych.` : content}
        </>
    );
}

export default Result;