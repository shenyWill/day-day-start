// 借用构造函数继承
function Parent (name) {
  this.name = name;
}

function Child (name) {
  Parent.call(this, name);
}

const child = new Child('zhangsan');

const child1 = new Child('lisi');

console.log(child, child1);