import { useState } from 'react';
import './App.css';

function App() {

  const [light, setMode] = useState(true)

  return (
    <div className={light ? "App" : "App dark-mode"}>
      <div className='toggle-switch'>
        <label className="switch">
          <input type="checkbox" 
          onChange={() => setMode(!light)}/>
          <span className="slider round"></span>
        </label>
        <h1>{light? 'Light Mode' : 'Dark Mode'}</h1>
        <p>
          Enable or disable dark mode 
        </p>
      </div>
    </div>
  );
}

export default App;
