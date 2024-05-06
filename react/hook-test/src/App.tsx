import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Calendar from './Calendar';
// import dayjs from 'dayjs';
// import SuspenseTest from './APITest/Suspense';
// import { IconAdd } from './components/Icon/IconAdd';
// import { IconEmail } from './components/Icon/IconEmail';
// import { createFromIconfont } from './components/Icon/createFromtIconfont';
// import Space from './components/Space';
import './app.scss'

// import Portal from './components/Portal';

// import MutateObserver from './components/MutateObserver';

// const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_4520108_xeag7mtm34a.js');

// import Position from './APITest/Position'

// import UseMountedState from './APITest/UseMountedStateTest';

import UseCookieTest from './APITest/UseCookieTest';

function App() {
  // const content = <div className='btn'>
  //   <button>按钮</button>
  // </div>
  // const [ className, setClassName] = useState('aaa');
  // useEffect(() => {
  //   setTimeout(() => setClassName('bbb'), 2000);
  // }, []);
  // const callback = function (mutationsList: MutationRecord[]) {
  //   console.log(mutationsList);
  // };
  return <div data-testid="test">
    {/* <IconAdd spin></IconAdd>
    <IconEmail></IconEmail>
    <IconFont type='icon-bingtutubiao' size='40px'></IconFont> */}

    {/* <Space className='container' direction="horizontal" align="end" warp={true} size={['large', 'small']}>
      <div className='box'>111</div>
      <div className='box'>222</div>
      <div className='box'>333</div>
    </Space> */}

    {/* <Portal attach={document.body}>{content}</Portal> */}
     {/* <MutateObserver onMutate={callback}>
        <div id="container">
          <div className={className}>
            {
              className === 'aaa' ? <div>aaa</div> : <div>
                <p>bbb</p>
              </div>
            }
          </div>
        </div>
      </MutateObserver> */}
      {/* <Position></Position> */}
      {/* <UseMountedState></UseMountedState> */}
      <UseCookieTest></UseCookieTest>
  </div>
}

export default App;
