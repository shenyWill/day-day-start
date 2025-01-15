import EventEmitter from "events";
import readline from 'node:readline';

export interface Key {
    name: string;
    sequence: string;
};

let onKeyPress: (str: string, key: Key) => void;

export abstract class Prompt extends EventEmitter {
    value = ''
    rl: readline.Interface;
    constructor() {
        super();

        // 启用键盘输入
        readline.emitKeypressEvents(process.stdin);

        // 设置输入模式为 raw 模式
        this.rl = readline.createInterface({ input: process.stdin });

        process.stdin.setRawMode(true);

        onKeyPress = this.onKeyPress.bind(this);

        process.stdin.on('keypress', onKeyPress);
    }

    abstract onKeyInput(str: string, key: Key): void;

    onKeyPress(str: string, key: Key) {
        if(key.sequence === '\u0003') {
            process.exit();
        }
        
        if(key.name === 'return') {
            this.close();
            return;
        }
        this?.onKeyInput(str, key)
    }

    close() {
        process.stdout.write('\n');
        process.stdin.removeListener('keypress', onKeyPress);
        process.stdin.setRawMode(false);
        this.rl.close();
        this.emit('submit', this.value);
    }
}