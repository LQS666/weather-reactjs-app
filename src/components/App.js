import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import Footer from './Footer';
import './App.css';

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
        error: "",
        weatherMain: "",
        weatherDesc: ""
    }


    handleInputChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.value.length === 0) return
        if (prevState.value !== this.state.value) {

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
                    console.log(data)
                    const date = new Date().toLocaleDateString();
                    const time = new Date().toLocaleTimeString();
                    const city = this.state.value;
                    this.setState({
                        error: false,
                        date,
                        time,
                        city,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        wind: data.wind.speed,
                        weatherMain: data.weather[0].main,
                        weatherDesc: data.weather[0].description,
                    })
                })
                .catch(error => {
                    console.log(error);
                    this.setState(prevState => ({
                        error: true,
                        city: prevState.value
                    }))
                })
        }
    }

    render() {
        return (
            <>
                <Form
                    change={this.handleInputChange}
                    value={this.state.value}
                />
                <Result weather={this.state} />
                <Footer />
            </>
        );
    }
}

export default App;