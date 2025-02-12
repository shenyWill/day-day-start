const { Worker, MessageChannel } = require('node:worker_threads');

const { port1, port2 } = new MessageChannel();

const worker = new Worker('./node-worker.js');

worker.postMessage(
    { value: 10*10000*10000, channel: port2 },
    [port2]
);

port1.on('message', (value) => {
    console.log('res', value);
})