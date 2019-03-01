import React from 'react';

const Result = props => {
    const { error, city } = props.weather;
    return (
        <>
            {error ? `Niestety miasto ${city} nie istnieje w naszej bazie danych.` : null}
        </>
    );
}

export default Result;