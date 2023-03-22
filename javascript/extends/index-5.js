// 寄生式继承
// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象
function createObj(o) {
  const clone = Object.create(o);
  clone.sayName = function() {
    console.log('...');
  };
  return clone;
}