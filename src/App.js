import React, { Component } from 'react';
import './app.scss';
import store from './store';
import { Provider } from 'react-redux';
import TestComponent from './components/Test/TestComponent';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Provider store={store}>
                <TestComponent />
            </Provider>
        )
    }
}

export default App;