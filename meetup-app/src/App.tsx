import React from 'react';
import './App.css';
import { ListComponent } from './components/ListComponent'
import { data } from './data/data'

function App() {

  return (
    <div>
      <h2 className='Spring'>Springfield Meetup</h2>
      <ListComponent data={data} />
    </div>
  );
}

export default App;
