import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './containers';
import store from './store';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
