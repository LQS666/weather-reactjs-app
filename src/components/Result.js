import React from 'react';

const Result = props => {

    return (
        <>
            {props.error ? `Niestety takie miasto nie istnieje w naszej bazie danych.` : null}
        </>
    );
}

export default Result;