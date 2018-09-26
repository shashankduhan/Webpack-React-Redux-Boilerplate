import React, { Component } from 'react';
import './app.scss';
import store from './store';
import { Provider } from 'react-redux';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Provider store={store}>
                <SettingsPanel />
            </Provider>
        )
    }
}

export default App;