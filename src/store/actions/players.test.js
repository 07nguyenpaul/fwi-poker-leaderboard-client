import nock from 'nock';
import { mockInitialState, mockStore } from '../mockInitialStore';
import { getMockEditPlayer } from '../mockEditPlayer';
import { getMockAddPlayer } from '../mockCreatePlayer';

import * as actions from './players';

import {
  FETCH_PLAYERS__FAILURE,
  FETCH_PLAYERS__REQUEST,
  FETCH_PLAYERS__SUCCESS,
  ADD_PLAYER__SUCCESS,
  ADD_PLAYER__FAILURE,
  ADD_PLAYER__REQUEST,
  EDIT_PLAYERS__SUCCESS,
  EDIT_PLAYERS__FAILURE,
  EDIT_PLAYERS__REQUEST,
} from './actionTypes';

describe('Actions: players', () => {
  const expectedData = [
    {
      id: 1,
      firstName: 'Daniel',
      lastName: 'Negreanu',
      earnings: 34151327,
      country: 'USA'
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'John',
      earnings: 23418600,
      country: 'ID'
    },
    {
      id: 3,
      firstName: 'Erik',
      lastName: 'Seidel',
      earnings: 33333,
      country: 'GHA'
    },
  ];

  const url = '/users';
  const updateUrl = '/users/1';
  let store = mockStore(mockInitialState);

  afterEach(() => {
    nock.cleanAll();
  });

  it('should create FETCH_PLAYERS__REQUEST actions', () => {
    const expected = {
      "type": "FETCH_PLAYERS__REQUEST"
    };
    expect(actions.getPlayersRequest()).toEqual(expected);
  });

  it('should create FETCH_PLAYERS__SUCCESS actions', () => {
    const players = [getMockAddPlayer(), getMockAddPlayer()];
      const expected = {
        "type": "FETCH_PLAYERS__SUCCESS", "users": players
      };
      expect(actions.getPlayersSuccess(players)).toEqual(expected);
  });

  it('should create FETCH_PLAYERS__FAILURE actions', () => {
    const expected = {
      "type": "FETCH_PLAYERS__FAILURE"
    };
    expect(actions.getPlayersFailure()).toEqual(expected);
  });

  it('should create ADD_PLAYER__REQUEST actions', () => {
    const expected = {
      "type": "ADD_PLAYER__REQUEST"
    };
    expect(actions.addPlayerRequest()).toEqual(expected);
  });

  it('should create ADD_PLAYER__SUCCESS actions', () => {
    const player = getMockAddPlayer();
      const expected = {
        "type": "ADD_PLAYER__SUCCESS", player
      };
      expect(actions.addPlayerSuccess(player)).toEqual(expected);
  });

  it('should create ADD_PLAYER__FAILURE actions', () => {
    const expected = {
      "type": "ADD_PLAYER__FAILURE"
    };
    expect(actions.addPlayerFailure()).toEqual(expected);
  });

  it('should create EDIT_PLAYER__REQUEST actions', () => {
    const expected = {
      "type": "EDIT_PLAYER__REQUEST"
    };
    expect(actions.editPlayerRequest()).toEqual(expected);
  });

  it('should create EDIT_PLAYER__SUCCESS actions', () => {
    const player = getMockEditPlayer();
      const expected = {
        "type": "EDIT_PLAYER__SUCCESS", player
      };
      expect(actions.editPlayerSuccess(player)).toEqual(expected);
  });

  it('should create EDIT_PLAYER__FAILURE actions', () => {
    const expected = {
      "type": "EDIT_PLAYER__FAILURE"
    };
    expect(actions.editPlayerFailure()).toEqual(expected);
  });
});
