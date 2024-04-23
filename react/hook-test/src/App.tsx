import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Calendar from './Calendar';
// import dayjs from 'dayjs';
// import SuspenseTest from './APITest/Suspense';
import { IconAdd } from './components/Icon/IconAdd';
import { IconEmail } from './components/Icon/IconEmail';
import { createFromIconfont } from './components/Icon/createFromtIconfont';

const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_4520108_xeag7mtm34a.js');

function App() {
  return <div data-testid="test">
    <IconAdd spin></IconAdd>
    <IconEmail></IconEmail>
    <IconFont type='icon-bingtutubiao' size='40px'></IconFont>
  </div>
}

export default App;
