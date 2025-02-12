const { parentPort } = require('node:worker_threads');

function calc(num) {
    let total = 0;
    for(let i = 0; i< num; i++) {
        total += i;
    }
    return total
}

let tunnel;
let id;

parentPort.on('message', (message) => {
    if(message.type === 'startup') {
        id = message.id;
        tunnel = message.channel;

        tunnel.on('message', (msg) => {
            tunnel.postMessage({
                id,
                res: calc(msg.value)
            });
        })
    }
});
