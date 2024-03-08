import React, { createContext, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const countContext = createContext(111);

function Aaa() {
  return <div>
    <countContext.Provider value={222}>
      <Bbb></Bbb>
    </countContext.Provider>
  </div>
}

function Bbb() {
  return <div><Ccc></Ccc></div>
}

function Ccc() {
  const count = useContext(countContext);
  return <h2>context的值为： {count}</h2>
}

export default Aaa;
