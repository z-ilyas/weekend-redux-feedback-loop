import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const feedBack = {};

const feelings = (state = feedBack, action) => {
    if(action.type === 'ADD_FEELINGS'){
    const copyOfState = {...state};
        copyOfState.feelings = action.payload;
    return copyOfState
    }
    return state;
}

const theStore = createStore(
    combineReducers({
        feelings
    }),
    applyMiddleware(
      logger
    )
  )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store = {theStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
