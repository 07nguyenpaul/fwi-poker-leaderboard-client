import Player from '../../services/Player';
import * as types from './actionTypes';

export function fetchPlayers() {
  return async dispatch => {
    dispatch(getPlayersRequest());
    try {
      const response = await Player.getAll();
      dispatch(getPlayersSuccess(response.data.users));
    } catch (error) {
      dispatch(getPlayersFailure());
    }
  };
};

export function getPlayersRequest() {
  return { type: types.FETCH_PLAYERS__REQUEST };
};

export function getPlayersSuccess(users) {
  return { type: types.FETCH_PLAYERS__SUCCESS, users };
};

export function getPlayersFailure() {
  return { type: types.FETCH_PLAYERS__FAILURE };
};
