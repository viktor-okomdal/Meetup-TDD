
import { RatingComp } from './RatingComponent';
import Enzyme, { shallow, mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('RatingComponent', () => {

  test('should render RatingComp without errors', () => {

    render(<RatingComp/>)

  })

  test('should ', () => {

    const wrapper = mount(<RatingComp/>)
    
    const radioInput = wrapper.find('[data-testid="rating-2"]')

    expect(radioInput.exists()).toBeTruthy()

    expect(radioInput.prop("value")).toEqual(2)


    

  })



})