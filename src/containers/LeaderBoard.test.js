import React from 'react';
import { shallow } from 'enzyme';
import configureStore from '../store/configureStore';

import { LeaderBoard } from './LeaderBoard';
import * as ActionTypes from '../store/actions/actionTypes';
import * as player from '../store/actions/players';
import { mockInitialState, mockStore } from '../store/mockInitialStore';

const store = configureStore({});

const players = [
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

describe('Container: LeaderBoard', () => {
  const props = {
    players: players,
    requesting: false,
    fetchPlayers: jest.fn(),
    editPlayer: jest.fn(),
    addPlayer: jest.fn(),
  };

  const clearedState = {
    country: '',
    earnings: '',
    firstName: '',
    id: '',
    lastName: '',
    open: false,
  };

  const wrapper = shallow(
    <LeaderBoard {...props} />
  );

  it('calls toggleAddPlayerForm and sets open state to TRUE', () => {
    const instance = wrapper.instance()

    expect(instance.state.open).toBe(false);
    instance.toggleAddPlayerForm();
    expect(instance.state.open).toBe(true);
    expect(wrapper.state('firstName')).toEqual('');
    expect(wrapper.state('lastName')).toEqual('');
    expect(wrapper.state('earnings')).toEqual('');
    expect(wrapper.state('country')).toEqual('');
    expect(wrapper.state('id')).toEqual('');
    expect(wrapper.state('open')).toEqual(true);
  });

  it('should add a player onSubmit()', () => {
    const event = {
      country: 'GR',
      earnings: 2,
      firstName: 'Fred',
      id: 1,
      lastName: 'Flintstone',
    };

    wrapper.instance().props.addPlayer(event)
    expect(wrapper.instance().props.addPlayer).toHaveBeenCalledWith(event);
  });

  it('should change the firstName state value when handleValueChange() is called', () => {
    const event = {
      target: {
        value: 'Bob',
      },
    };

    wrapper.instance().handleValueChange('firstName', event);
    expect(wrapper.state('firstName')).toBe('Bob');
  });

  it('should change the lastName state value when handleValueChange() is called', () => {
    const event = {
      target: {
        value: 'Ross',
      },
    };

    wrapper.instance().handleValueChange('lastName', event);
    expect(wrapper.state('lastName')).toBe('Ross');
  });

  it('should change the earnings state value when handleValueChange() is called', () => {
    const event = {
      target: {
        value: '123',
      },
    };

    wrapper.instance().handleValueChange('earnings', event);
    expect(wrapper.state('earnings')).toBe('123');
  });

  it('should change the country state value when handleValueChange() is called', () => {
    const event = {
      target: {
        value: 'CA',
      },
    };

    wrapper.instance().handleValueChange('country', event);
    expect(wrapper.state('country')).toBe('CA');
  });

  it('should edit Player information on onEdit() and then clear state on toggleAddPlayerForm()', () => {
    const event = {
      country: 'CA',
      earnings: 12345,
      firstName: 'Bobby',
      id: 1,
      lastName: 'Ross',
    };

    wrapper.instance().props.editPlayer(event)
    expect(wrapper.instance().props.editPlayer).toHaveBeenCalledWith(event);
    wrapper.instance().toggleAddPlayerForm();
    expect(wrapper.instance().state).toEqual(clearedState);
  });
});
