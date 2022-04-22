import React, {useState} from 'react';
import  './App.css';
import { ListComponent } from './components/ListComponent'
import { data } from './data/data'



function App() {

  const [sorted, setSorted] = useState(false)

  const handleClick = () => {
    console.log(sorted)
    setSorted(!sorted)
  }

  return (
    <div>
      <h2 className='spring'>Springfield Meetup</h2>
      <button className='sortBtn' onClick={handleClick}>{sorted ? "DESC" : "ASC"}</button>
      <ListComponent data={sorted ? data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) 
        : data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())} />
    </div>
  );
}



export default App;
