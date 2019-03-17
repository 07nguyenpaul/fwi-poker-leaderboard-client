import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

describe('Container: App', () => {
  const store = configureStore({});

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );

  it('renders without crashing', () => {
    expect(wrapper.find('App').exists()).toBe(true);
  });
})
