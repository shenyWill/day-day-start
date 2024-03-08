import React, { Reducer, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface RefProps {
  aaa: () => void;
}

const Guang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => {
    return {
      aaa() {
        inputRef.current?.focus();
      }
    }
  }, [inputRef]);
  return <div>
    <input type="text" ref={inputRef} />
  </div>
}

const WarpGuang = React.forwardRef(Guang);

function App() {
  const inputRef = useRef<RefProps>(null);
  useEffect(() => {
    console.log('123', inputRef.current);
    inputRef.current?.aaa();
  })
  return (
    <div>
      <WarpGuang ref={inputRef}></WarpGuang>
    </div>
  );
}

export default App;
