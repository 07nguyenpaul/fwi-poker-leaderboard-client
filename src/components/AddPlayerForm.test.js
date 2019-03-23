import React from 'react';
import { mount, shallow } from 'enzyme';

import AddPlayerForm from './AddPlayerForm';

describe('Component: AddPlayerForm', () => {
  const items = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    toggleAddPlayerForm: jest.fn(),
    open: true,
    firstName: '',
    lastName: '',
    earnings: '',
    country: '',
    playerID: '',
    onEdit: jest.fn(),
  };
  
  const wrapper = mount(<AddPlayerForm {...items} />);

  it('should render form', () => {
    expect(wrapper.find('WithStyles(Dialog)').exists()).toBe(true);
  });

  it('should include 4 textfields', () => {
    expect(wrapper.find('.form-dialog--textfield__first-name label').text()).toBe("First Name");
    expect(wrapper.find('.form-dialog--textfield__last-name label').text()).toBe("Last Name");
    expect(wrapper.find('.form-dialog--textfield__earnings label').text()).toBe("Total Winnings Amount");
    expect(wrapper.find('.form-dialog--textfield__country label').text()).toBe("Native Country");
  });

  it('should render Cancel and Save button when form is prefilled', () => {
    expect(wrapper.find(".form-dialog--btn__cancel button").text()).toBe("Cancel")
    expect(wrapper.find(".form-dialog--btn__save button").text()).toBe("Save")
  });

  it('should render Cancel and Edit button when form is prefilled', () => {
    const items = {
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      toggleAddPlayerForm: jest.fn(),
      open: true,
      firstName: 'Luke',
      lastName: 'Skywalker',
      earnings: '1231',
      country: 'AU',
      playerID: '12',
      onEdit: jest.fn(),
    };
    const wrapper = mount(<AddPlayerForm {...items} />);

    expect(wrapper.find(".form-dialog--btn__cancel button").text()).toBe("Cancel")
    expect(wrapper.find(".form-dialog--btn__edit button").text()).toBe("Edit")
  });
});
