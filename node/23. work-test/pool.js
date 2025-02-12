const os = require('node:os');
const { Worker, MessageChannel } = require('node:worker_threads');

// 获取CPU核心数作为线程池大小
// 通过os.cpus()获取CPU信息数组,其长度即为CPU核心数
const poolSize = os.cpus().length;

const workers = [];
const tunnels = [];

for (let i = 0; i < poolSize; i++) {
    const { port1, port2 } = new MessageChannel();

    const worker = new Worker('./pool-worker.js');

    worker.postMessage(
        { 
            type: 'startup', 
            id: i,
            channel: port2 
        },
      [port2],
    );
    tunnels.push(port1);
    workers.push(worker);
}

for (let i = 0; i < tunnels.length; i ++) {
    tunnels[i].on('message', (msg) => {
        console.log(`线程 ${msg.id} 计算出了结果 ${msg.res}`);
    });
}

let curIndex = 0;

function addJob(num) {
    const tunnel = tunnels[curIndex];

    tunnel.postMessage({ 
        value: num
    });

    curIndex = curIndex >= workers.length - 1 ? 0 : curIndex + 1;
}

for(let i = 0; i< 100; i++) {
    addJob(Math.floor(Math.random() * 1000000));
}