import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createLogger from 'redux-logger';

const initialState = {
    test: {
        value: true
    }
};

const middleware = [thunk, createLogger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    initialState, 
    composeEnhancers (
        applyMiddleware(...middleware)
    ));

export default store;
