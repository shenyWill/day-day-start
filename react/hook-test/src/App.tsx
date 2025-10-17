import React, { useReducer } from 'react';
import './App.css';
import { produce } from 'immer';

interface Data {
  a: {
    b: {
      c: {
        d: number;
        e: number;
      }
    }
  },
  f: number
}

function add(state: Data, num: number) {
  // return {
  //   ...state,
  //   a: {
  //     ...state.a,
  //     b: {
  //       ...state.a.b,
  //       c: {
  //         ...state.a.b.c,
  //         d: state.a.b.c.d + num,
  //         e: state.a.b.c.e + num,
  //       }
  //     }
  //   },
  //   f: state.f,
  // }
  return produce(state, draft => {
    draft.a.b.c.d += num;
    draft.a.b.c.e += num;
  })
}

function App() {

  const [num, dispatch] = useReducer(add, {
    a: {
      b: {
        c: {
          d: 0,
          e: 0,
        }
      }
    },
    f: 0,
  });

  return (
    <div onClick={() => dispatch(1)}>{JSON.stringify(num)}</div>
  );
}

export default App;
