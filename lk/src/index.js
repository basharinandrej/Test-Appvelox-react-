import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from "redux-thunk"


import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

