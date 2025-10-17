import React, { createContext, useCallback, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './App.css';

const Yuan = (props: { count: number, callback: () => void }) => {
  const { count } = props;
  console.log('Yuan渲染');
  return (
    <div>展示： {count}</div>
  )
}

const MemoYuan = React.memo(Yuan);

function App() {
  const [count, setCount] = useState(0);
  const [_, setNum] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 1000);
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }, []);

  const callback = useCallback(() => {
    console.log('回调函数');
  }, []);
  
  return (
    <MemoYuan count={count} callback={callback} />
  )
}

export default App;
