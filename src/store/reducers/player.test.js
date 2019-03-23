import player from './player';
import {
  FETCH_PLAYERS__FAILURE,
  FETCH_PLAYERS__REQUEST,
  FETCH_PLAYERS__SUCCESS,
  ADD_PLAYER__SUCCESS,
  ADD_PLAYER__FAILURE,
  ADD_PLAYER__REQUEST,
  EDIT_PLAYER__SUCCESS,
  EDIT_PLAYER__FAILURE,
  EDIT_PLAYER__REQUEST,
} from '../actions/actionTypes';

import {getMockAddPlayer} from '../mockCreatePlayer';

describe('Task Reducer', () => {
  const responseUserList = [
    {
      id: 1,
      firstName: 'Luke',
      lastName: 'Skywalker',
      earnings: '2018004',
      country: 'USA',
    },
    {
      id: 2,
      firstName: 'Han',
      lastName: 'Solo',
      earnings: '91210445',
      country: 'AU',
    }
  ];

  const initialState = {
    users: [],
    requesting: false,
  };

  it('should return the initial state without changing', () => {
    const expected = initialState;
    expect(player(initialState, {})).toBe(expected);
  });

  it('should set "requesting" as "true" in the state for action type "FETCH_PLAYERS__REQUEST"', () => {
    const expected = {
      users: [],
      requesting: true,
    };
    const action = { type: FETCH_PLAYERS__REQUEST };
    expect(player(initialState, action)).toEqual(expected);
  });

  it('should set "users" in the state for action type "FETCH_PLAYERS__SUCCESS"', () => {
    const expected = {
      users: responseUserList,
      requesting: false,
    };
    const action = { type: FETCH_PLAYERS__SUCCESS, users: responseUserList };
    expect(player(initialState, action)).toEqual(expected);
  });

  it('should set "requesting" as "false" in the state for action type "FETCH_PLAYERS__FAILURE"', () => {
    const expected = {
      users: [],
      requesting: false,
    };
    const action = { type: FETCH_PLAYERS__FAILURE };
    expect(player(initialState, action)).toEqual(expected);
  });

  it('should set "requesting" as "true" in the state for action type "ADD_PLAYER__REQUEST"', () => {
    const expected = {
      users: [],
      requesting: true,
    };
    const action = { type: ADD_PLAYER__REQUEST };
    expect(player(initialState, action)).toEqual(expected);
  });

  it('should set new "user" in the state for action type "ADD_PLAYER__SUCCESS"', () => {
    const newPlayer = {
      id: 3,
      firstName: 'Fred',
      lastName: 'Flintstone',
      earnings: '945',
      country: 'GR',
    };

    let newUserList = responseUserList.concat(newPlayer)

    const expected = {
      users: newUserList,
      requesting: false,
    };
    const action = { type: ADD_PLAYER__SUCCESS, users: newUserList };
  });

  it('should set "requesting" as "false" in the state for action type "ADD_PLAYER__FAILURE"', () => {
    const expected = {
      users: [],
      requesting: false,
    };
    const action = { type: ADD_PLAYER__FAILURE };
    expect(player(initialState, action)).toEqual(expected);
  });

  it('should set "requesting" as "true" in the state for action type "EDIT_PLAYER__REQUEST"', () => {
    const expected = {
      users: [],
      requesting: true,
    };
    const action = { type: EDIT_PLAYER__REQUEST };
    expect(player(initialState, action)).toEqual(expected);
  });

  it('should set editted "user" in the state for action type "EDIT_PLAYER__SUCCESS"', () => {
    const editPlayer = {
      id: 2,
      firstName: 'Han',
      lastName: 'Solo',
      earnings: '9121',
      country: 'AU',
    };

    const expected = {
      users: editPlayer,
      requesting: false,
    };
    const action = { type: EDIT_PLAYER__SUCCESS, editPlayer };
  });

  it('should set "requesting" as "false" in the state for action type "EDIT_PLAYER__FAILURE"', () => {
    const expected = {
      users: [],
      requesting: false,
    };
    const action = { type: EDIT_PLAYER__FAILURE };
    expect(player(initialState, action)).toEqual(expected);
  });
});
