import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import './assets/index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
