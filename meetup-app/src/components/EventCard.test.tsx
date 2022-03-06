
import { EventCardComp } from './EventCard';
import Enzyme, { shallow, mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { data } from '../data/data'
import { Event } from '../model/event'

Enzyme.configure({ adapter: new Adapter() });

const EventInfo = data[0]

describe('EventCard-component', () => {

  test('should render EventCardComp without errors', () => {

    render(<EventCardComp event={EventInfo} />)

  })

  test('should render a Event with the given props', () => {

    const testData: Event = {
      id: '4',
      name: 'Kalle',
      description: 'Häng med på en kul kväll med en drös härliga personer',
      time: '20:30',
      date: '2022-06-06',
      attendeces: ['Niklas', 'Lotta', 'Tommy', 'Isak'],
      image: 'Beerpic.png',
      comments:['Tjooho','Yippie']
    }

    render(<EventCardComp event={testData} />)


    screen.queryAllByText(testData.name, { exact: false })
    screen.queryAllByText(testData.description, { exact: false })
    screen.getByText(testData.time, { exact: false })
    screen.getByText(testData.date, { exact: false })

  })


  it('renders comment input with placeholder text initially', () => {
    const testData: Event = {
      id: '7',
      name: 'Golf',
      date: '2020-8-15',
      time:'19:30',
      description: 'Vi hoppas på sol och hole in ones',
      comments: [],
      attendeces:[],
      image:''
    };
    const wrapper = mount(<EventCardComp event={testData} />);

    const input = wrapper.find('.overlayInput');
    expect(input.exists()).toBe(true);
    expect(input.prop('placeholder')).toMatch('Skriv en kommentar...');
  });



})

