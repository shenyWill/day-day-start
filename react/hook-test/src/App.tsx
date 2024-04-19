import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';
import dayjs from 'dayjs';
import SuspenseTest from './APITest/Suspense';

function App() {
  return <div data-testid="test">
    <SuspenseTest></SuspenseTest>
  </div>
}

export default App;
