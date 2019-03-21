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

export function addPlayer(firstName, lastName, earnings, country) {
  return async dispatch => {
    dispatch(addPlayerRequest());
    try {
      const response = await Player.addPlayer(
        firstName,
        lastName,
        earnings,
        country
      );
      dispatch(addPlayerSuccess(response.data.user));
    } catch (error) {
      dispatch(addPlayerFailure());
    }
  };
};

export function addPlayerRequest() {
  return { type: types.ADD_PLAYER__REQUEST };
};

export function addPlayerSuccess(player) {
  return { type: types.ADD_PLAYER__SUCCESS, player };
};

export function addPlayerFailure() {
  return { type: types.ADD_PLAYER__FAILURE };
};

export function editPlayer(id, firstName, lastName, earnings, country) {
  return async dispatch => {
    dispatch(editPlayerRequest());
    try {
      const response = await Player.editPlayer(
        id,
        firstName,
        lastName,
        earnings,
        country
      );
      dispatch(editPlayerSuccess(response.data.user));
    } catch (error) {
      dispatch(editPlayerFailure());
    }
  };
};

export function editPlayerRequest() {
  return { type: types.EDIT_PLAYER__REQUEST };
};

export function editPlayerSuccess(player) {
  return { type: types.EDIT_PLAYER__SUCCESS, player };
};

export function editPlayerFailure() {
  return { type: types.EDIT_PLAYER__FAILURE };
};
