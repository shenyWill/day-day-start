import React, { useEffect, useImperativeHandle, useRef } from 'react';
import './App.css';

interface RefProps {
  test: () => void;
  click: () => void;
}

const Yuan: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      test: () => {
        console.log(1)
      },
      click: () => {
        console.log(2)
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
    }
  }, [inputRef]);
  return (
    <input type="text" ref={inputRef} {...props} />
  );
}

const YuanComponent = React.forwardRef(Yuan);

function App() {

  const inputRef = useRef<RefProps>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  return (
    <YuanComponent ref={inputRef}></YuanComponent>
  );
}

export default App;
