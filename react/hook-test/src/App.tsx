import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';

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
const onChange = (date: Date) => {
  console.log(date);
}

function App() {
  return <Calendar value={new Date(2021,3,15)} onChange={onChange}></Calendar>
}

export default App;
