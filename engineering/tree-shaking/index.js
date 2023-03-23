import Menu from './menu.js';
import mock from './mock.json';
// import { name } from './mock.json';
let foo = () => {
  let x = 1;
  if(false) {
    console.log('never reached!')
  }
  let a = 3;
  return a;
}

let baz = () => {
  var x = 1;
  console.log(x);
  function unused() {
    return 5;
  }
  return x;
  let c = x + 3;
  return c;
}

baz();

// const menu = new Menu();

// console.log(menu.display)

// console.log(mock);

// console.log(name);