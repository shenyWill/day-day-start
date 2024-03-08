import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const countContext = createContext(111);

function Aaa() {
  const [, setNum] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);
  return <div>
    <MemoBbb count={2}></MemoBbb>
  </div>
}

interface BbbProps {
  count: number;
}

function Bbb(props: BbbProps) {
  console.log('render Bbb...');
  return <div>{props.count}</div>
}

const MemoBbb = memo(Bbb);
export default Aaa;
