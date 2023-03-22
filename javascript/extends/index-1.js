// 原型链继承
function Parent () {
  this.name = ['zhangsan'];
};
Parent.prototype.getName = function() {
  console.log(this.name);
};

function Child () {

};

Child.prototype = new Parent();

const child = new Child();

console.log(child.name);

child.getName();


// 存在问题，1. Parent中的数据被所有实例共享  2. 不能在Child中传参

const child1 = new Child();

child1.name.push('lisi');

console.log(child.name, child1.name);