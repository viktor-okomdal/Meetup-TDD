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

  const testingProp = [
    {
      id: '1',
      name: 'Bowlingafton',
      description: 'Härlig bowlingkväll med goagubbar',
      time:'19:40',
      date:'2022-1-23',
      attendeces:['Kalle', 'Lotta', 'Tommy', 'Gustavo', 'Thorsten'],
      image: 'https://m.media-amazon.com/images/M/MV5BZTBmNGUyYjctMjcxZC00OWM1LTllY2YtODMxYzBmZjRjYzViXkEyXkFqcGdeQXVyODEyMzI2OTE@._V1_.jpg',
      comments:[],
    },
    {
      id: '2',
      name: 'Bokklubb',
      description: 'Djupa tankar och samtal kring böcker',
      time:'12:20',
      date:'2022-4-14',
      attendeces:['Liselotte', 'Karsten', 'Tommy', 'Sean', 'Fabbe'],
      image: 'https://y.yarn.co/792a08d8-23a8-4d9f-b711-a81160b86571_screenshot.jpg',
      comments:['kalle', 'hej']
    },
    {
      id: '3',
      name: 'LaserTag',
      description: 'Pew Pew!',
      time:'20:00',
      date:'2022-5-18',
      attendeces:['Bob', 'Blob', 'Timmy', 'Baba', 'Roffe'],
      image: 'https://static.wikia.nocookie.net/simpsons/images/7/78/Laser_Tag.jpg',
      comments:[]
    },
  ]
  const wrapper = shallow(<ListComponent data={testingProp} />)
    const firstEvent = wrapper.find('EventCardComp').first().prop('event')
    expect(firstEvent).toBe(testingProp[0])

})