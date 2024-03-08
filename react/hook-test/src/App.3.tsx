import React, { Reducer, useEffect, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(123);
    inputRef.current?.focus();
  })
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
