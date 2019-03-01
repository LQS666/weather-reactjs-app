import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

const APIKey = 'a414734d1e27f16a92ff5009b0a579e3';

class App extends Component {
    state = {
        value: "",
        date: "",
        city: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        error: ""
    }


    handleInputChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleCitySubmit = e => {
        e.preventDefault();
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error('Niestety takie miasto nie istnieje w naszej bazie danych.')
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    error: false,
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: true
                })
            })
    }

    render() {
        return (
            <>
                <Form
                    submit={this.handleCitySubmit}
                    change={this.handleInputChange}
                    value={this.state.value}
                />
                <Result error={this.state.error} />
            </>
        );
    }
}

export default App;