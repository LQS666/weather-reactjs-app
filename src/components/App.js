import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

class App extends Component {
    state = {}

    render() {
        return (
            <>
                <Form />
                <Result />
            </>
        );
    }
}

export default App;