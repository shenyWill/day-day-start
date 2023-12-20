// new Promise((resolve, reject) => {
//   console.log('start....');
//   // setTimeout(() => {
//   //   console.log('setTimeout >>> 2s');
//   //   // resolve('one....');
//   //   reject('onexxxxx');
//   // }, 2000);
//   queueMicrotask(() => {
//     console.log('setTimeout >>> 2s');
//     // resolve('one....');
//     reject('onexxxxx');
//   })
// }).then(data => {
//   console.log('one then....');
//   console.log(data);
// }, error => {
//   console.log('one error....');
//   console.log(error);
// })

setTimeout(() => {
  console.log('timer1')

  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)

process.nextTick(() => {
  console.log('nextTick')
  process.nextTick(() => {
    console.log('nextTick')
    process.nextTick(() => {
      console.log('nextTick')
      process.nextTick(() => {
        console.log('nextTick')
      })
    })
  })
})