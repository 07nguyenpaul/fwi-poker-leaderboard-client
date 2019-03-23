import React from 'react';
import { mount, shallow } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';

import { Player } from './Player';

describe('Component: Player', () => {
  const items = {
    handleClick: jest.fn(),
    country: 'AU',
    earnings: '1234',
    firstName: 'Luke',
    index: 1,
    lastName: 'Skywalker',
    id: '2',
  };

  const wrapper = shallow(<Player {...items} />).dive();

  it('should render Player info', () => {
    expect(wrapper.find('.Player--row__name').render().html()).toBe('2. Luke Skywalker');
    expect(wrapper.find('.Player--row__winnings').render().html()).toBe('$ 1,234');
    expect(wrapper.find('.Player__table--country span').render().html()).toBe('AU');
  });
});
