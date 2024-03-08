import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const countContext = createContext(111);

function Aaa() {
  const [count, setNum] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);
  function BbbCallback () {

  }
  return <div>
    <MemoBbb count={count} callback={BbbCallback}></MemoBbb>
  </div>
}

interface BbbProps {
  count: number;
  callback: Function;
}

function Bbb(props: BbbProps) {
  console.log('render Bbb...');
  return <div>{props.count}</div>
}

const MemoBbb = memo(Bbb);
export default Aaa;
