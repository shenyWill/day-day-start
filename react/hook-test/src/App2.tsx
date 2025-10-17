import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const Yuan: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  return (
    <input type="text" ref={ref} {...props} />
  );
}

const YuanComponent = React.forwardRef(Yuan);

function App() {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <YuanComponent ref={inputRef}></YuanComponent>
  );
}

export default App;
