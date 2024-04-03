import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0)
  return (

    <div className="App">
      <div className='counter'>
      <div className='value'>
        {value}
      </div>
      <button className ="btn1" onClick={() => {setValue(value+1)}}>Increase</button>
      <button className ="btn2" onClick={() => {setValue(value-1)}}>Decrease</button>
      <button className='btn3' onClick={() => {setValue(value-value)}}> Reset</button>
      </div>

   
    </div>
  );
}

export default App;
