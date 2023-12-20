/**
 * 使用MessageChannel深拷贝不含函数的对象
 */
function structuralClone(obj) {
  return new Promise(resolve => {
    const { port1, port2 } = new MessageChannel();
    port2.onmessage = ev => resolve(ev.data);
    port1.postMessage(obj);
  })
}

var obj = {
  a: 1,
  b: {
    c: 2
  }
}

obj.b.d = obj.b;

const test = async () => {
  const clone = await structuralClone(obj);
  console.dir(clone);
}
test();