import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

async function queryData() {
  const data = await new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  })
  return data;
}
function App() {
  const [num, setNum] = useState(1);
  useEffect(() => {
    console.log('useEffect');
    // const timer = setInterval(() => {
    //   console.log(num);
    // }, 1000);
    // return () => {
    //   console.log('clean up');
    //   clearInterval(timer);
    // }
  }, [num])
  return (
    <div onClick={() => setNum(num + 1)}>{num}</div>
  );
}

export default App;
