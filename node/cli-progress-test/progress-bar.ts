import ansiEscapes from "ansi-escapes";
import chalk from "chalk";
import { EOL } from 'os';

const write = process.stdout.write.bind(process.stdout);

export class ProgressBar {
    private total: number = 0;
    private current: number = 0;
    private hideCursor: boolean = false;

    constructor(hideCursor: boolean = false) {
        this.hideCursor = hideCursor;
    }

    start(total: number, initValue: number) {
        if (this.hideCursor) {
            write(ansiEscapes.cursorHide);
        }
        // 保存光标
        write(ansiEscapes.cursorSavePosition);
        this.total = total;
        this.current = initValue;
        this.render();
    }

    render() {
        let percent = this.current / this.total;
        if (percent < 0) {
            percent = 0;
        }
        if (percent > 1) {
            percent = 1;
        }
        // 进度条长度
        const barLength = 50;

        const completedLength = Math.floor(barLength * percent);
        const unCompletedLength = barLength - completedLength;

        write(ansiEscapes.cursorRestorePosition);
        write(chalk.blue('█').repeat(completedLength));
        write('░'.repeat(unCompletedLength));
        write(` ${this.current} / ${this.total}`)
    }

    update(value: number) {
        this.current = value;
        this.render();
    }

    getTotalSize() {
        return this.total;
    }
    stop() {
        write(ansiEscapes.cursorShow);
        write(EOL)
    }
}