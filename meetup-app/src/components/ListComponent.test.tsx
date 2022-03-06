import { ListComponent } from './ListComponent';
import Enzyme, { shallow, mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { data } from '../data/data'

Enzyme.configure({ adapter: new Adapter() });

describe('ListComponent', () => {

  test('should render ListComponent without errors', () => {

    render(<ListComponent data={data} />)

  })

  test('should check if List component has a length of 6', () => {
    const meetups = data.length
    const wrapper = shallow(<ListComponent data={data} />);
    expect(wrapper.find('EventCardComp').length).toBe(meetups)
  })

})