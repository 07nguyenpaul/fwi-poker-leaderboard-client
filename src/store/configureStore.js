/*global module*/

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import callAPIMiddleware from './callAPIMiddleware';
import createRootReducer from './rootReducers';

export const history = createBrowserHistory()

export default function configureStore() {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    composeEnhancer(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
        callAPIMiddleware,
      ),
    ),
  )

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store
}
