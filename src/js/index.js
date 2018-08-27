import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import thunk from 'redux-thunk';

import '../assets/styles/main.scss';
import rootReducer from './reducers/index';
import App from './components/App';

let composeEnhancers = compose;
let middleware = [thunk];

if (process.env.NODE_ENV === 'develop') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
