import React, { createContext, memo, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';
import dayjs from 'dayjs';

function App() {
  return <Calendar value={dayjs('2023-11-09')} dateInnerContent={value => <div>
          <p style={{background: 'yellowgreen', height: '50px'}}>{value.format('YYYY/MM/DD')}</p>
        </div>}></Calendar>
}

export default App;
