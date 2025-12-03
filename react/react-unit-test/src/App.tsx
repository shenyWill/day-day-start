import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import useCounter from './useCounter';



function App() {
  const [count, increment, decrement] = useCounter(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Toggle />
      <div>
        <div>
          {count}
        </div>
        <div>
          <button onClick={() => increment(1)}>加一</button>
          <button onClick={() => decrement(2)}>减二</button>
        </div>
      </div>
    </div>
  );
}

export default App;
