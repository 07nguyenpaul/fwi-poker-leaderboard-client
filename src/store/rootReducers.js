import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import players from './reducers/player';

const rootReducer = (history) => combineReducers({
  players,
  router: connectRouter(history)
})

export default rootReducer;
