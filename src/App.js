
import { useState } from 'react';
import './App.css';
import Slider from 'react-slider';


const min = 1;
const max = 100;
function App() {
  const [values,setValues]=useState([min,max]);
  
  return (
    <div className="App">

      <div className='Range-container'>
        <h1>Range</h1>

        <div className='minmaxdiv'>Minimum Range {values[0]} - Maximun Range {values[1]}</div>
        <Slider onChange={setValues} value={values} min={min} max={max}/>

        <div className='curdiv'>Current Range - {values[1]-values[0]}</div>
      </div>
    </div>
  );
}

export default App;
