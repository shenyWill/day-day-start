import React, { createContext, useContext, useEffect, useImperativeHandle, useRef } from 'react';
import './App.css';

const countContext = createContext<number>(0);

const Will = () => {
  const count = useContext(countContext);
  return (
    <div>
      {count}
    </div>
  )
}

const Yuan = () => {
  return (
    <countContext.Provider value={100}>
      <Will />
    </countContext.Provider>
  )
}

function App() {
  return (
    <Yuan />
  )
}

export default App;
