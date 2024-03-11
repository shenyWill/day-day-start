import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const countContext = createContext(111);

interface AaaProps {
  count: number;
  content: React.ReactElement;
}

function Aaa(props: AaaProps) {
  
  return <div>
    <h3>{props.count}</h3>
    {props.content}
  </div>
}

function App() {
  return <Aaa count={3} content={<div>123</div>}></Aaa>
}

export default App;
