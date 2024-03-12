import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';
import dayjs from 'dayjs';

function App() {
  return <Calendar value={dayjs('2023-11-09')}></Calendar>
}

export default App;
