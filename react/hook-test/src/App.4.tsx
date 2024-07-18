import React, { Reducer, useEffect, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Guang: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  return <div>
    <input type="text" ref={ref} />
  </div>
}

const WarpGuang = React.forwardRef(Guang);

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log('123', inputRef.current);
    inputRef.current?.focus();
  })
  return (
    <div>
      <WarpGuang ref={inputRef}></WarpGuang>
    </div>
  );
}

export default App;
