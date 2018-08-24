import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../assets/styles/main.scss';
import store from './store/index';
import App from './components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
