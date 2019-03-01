import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

class App extends Component {
    state = {
        value: ""
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <>
                <Form change={this.handleInputChange} value={this.state.value} />
                <Result />
            </>
        );
    }
}

export default App;