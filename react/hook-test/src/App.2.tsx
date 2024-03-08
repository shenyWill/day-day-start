import React, { Reducer, useEffect, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Data {
  result: number;
}

interface Action {
  type: 'add' | 'minus',
  num: number
}

function reducer(state: Data, action: Action) {
  switch(action.type) {
    case 'add':
      return {
        result: state.result + action.num
      }
    case 'minus':
      return {
        result: state.result - action.num
      }
  }
}

function App() {
  const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, {result: 0});
  return (
    <div>
      <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
      <div onClick={() => dispatch({ type: 'minus', num: 1 })}>减</div>
      <div>{res.result}</div>
    </div>
  );
}

export default App;
