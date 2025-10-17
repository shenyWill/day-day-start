import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const inputRef = useRef<HTMLInputElement>(null);

  const numRef = useRef<number>(0);

  const [,setCount] = useState<number>(0);

  const handleClick = () => {
    numRef.current += 1;
    setCount(numRef.current);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} />
      <div onClick={handleClick}>{numRef.current}</div>
    </>
  );
}

export default App;
