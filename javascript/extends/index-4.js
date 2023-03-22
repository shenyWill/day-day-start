// 原型式继承 其实就是Object.create的实现
function createObj(o) {
  function F() {};
  F.prototype = o;
  return new F();
}

const person = {
  name: 'zhangsan',
  color: ['red'],
};

// 存在问题，始终会共享person中的数据，和原型链类似

const person1 = createObj(person);

const person2 = createObj(person);

person1.name = 'lisi';

person1.color.push('blue');

// 修改person1.name的值，person2.name的值并未发生改变，并不是因为person1和person2有独立的 name 值，而是因为person1.name = 'lisi'，给person1添加了 name 值，并非修改了原型上的 name 值。
console.log(person1.name, person2.name); 
console.log(person1.color, person2.color);