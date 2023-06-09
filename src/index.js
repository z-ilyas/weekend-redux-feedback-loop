import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const feedback = (state = {}, action) => {
    if(action.type === 'ADD_FEELINGS'){
    const copyOfState = {...state};
        copyOfState.feelings = action.payload;
    return copyOfState
    }else if(action.type === 'ADD_UNDERSTANDING'){
        const copyOfState = {...state};
        copyOfState.understanding = action.payload;
    return copyOfState
    }else if(action.type === 'ADD_SUPPORT'){
        const copyOfState = {...state};
        copyOfState.support = action.payload;
    return copyOfState
    }else if(action.type === 'ADD_COMMENTS'){
        const copyOfState = {...state};
        copyOfState.comments = action.payload;
    return copyOfState
    }else if(action.type === 'RESET'){
        return {};
    }
return state;
}

const theStore = createStore(
    combineReducers({
        feedback
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
