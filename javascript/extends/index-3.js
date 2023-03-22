// 组合继承，原型链继承和借用构造函数继承合并，目前用的比较多
function Parent (name) {
  this.name = name;
  this.color = ['red'];
};

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 第一次
  this.age = age;
};

// Child.prototype = new Parent(); // 第二次
// 改造
Object.setPrototypeOf(Child.prototype, Parent.prototype);

Child.prototype.constructor = Child;

const child = new Child('zhangsan', 23);
child.color.push('blur');
console.log(child);


const child1 = new Child('lisi', 24);
child1.color.push('yellow');
console.log(child1);

// 缺点：会调用两次Parent构造函数