import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {ListComponent} from './components/ListComponent'
import {data} from './data/data'

Enzyme.configure({ adapter: new Adapter() });

test('renders App without errors', () => {
  render(<App />);
});

test('should render heading', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h2').text()).toBe('Springfield Meetup')
})

test('should change btn text on click event', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button').text()).toBe('ASC')
  wrapper.find('button').simulate('click')
  expect(wrapper.find('button').text()).toBe('DESC')
});