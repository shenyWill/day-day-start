import { BaseUI } from './base-ui.js';
import chalk from 'chalk';

export class ScrollList extends BaseUI {
    curSelectedIndex = 0;
    curScrollTop = 0;
    private readonly KEYS = {
        up: () => this.cursorUp(),
        down: () => this.cursorDown(),
    }
    constructor(private list: Array<string> = []) {
        super();
        this.render();
    }

    onKeyInput(name: string) {
        if (name !== 'up' && name !== 'down') {
            return;
        }
        const action: Function = this.KEYS[name];
        action();
        this.render();
    }
    cursorUp() {
        this.moveCursor(-1);
    }
    cursorDown() {
        this.moveCursor(1);
    }

    private moveCursor(offset: number) {
        this.curSelectedIndex += offset;
        if (this.curSelectedIndex < 0) {
            this.curSelectedIndex = 0;
        }
        if (this.curSelectedIndex >= this.list.length) {
            this.curSelectedIndex = this.list.length - 1;
        }
        this.fitScroll();
    }

    fitScroll() {
        const shouldScrollUp = this.curSelectedIndex < this.curScrollTop;
        const shouldScrollDown = this.curSelectedIndex > this.curScrollTop + this.terminalSize.rows - 2;
        if(shouldScrollUp) {
            this.curScrollTop -= 1;
        } 
        if(shouldScrollDown) {
            this.curScrollTop += 1;
        }
        this.clear();
    }
    clear() {
        for (let row = 0; row < this.terminalSize.rows; row++) {
            this.clearLine(row);
        }
    }
    bgRow(text: string) {
        return chalk.bgBlue(text + ' '.repeat(this.terminalSize.columns - text.length))
    }
    render() {
        const visibleList = this.list.slice(this.curScrollTop, this.curScrollTop + this.terminalSize.rows)

        visibleList.forEach((item: string, index: number) => {
            const row = index;
            
            // this.clearLine(row);

            let content = item;

            if (this.curSelectedIndex === this.curScrollTop + index) {
                content = this.bgRow(content);
            }
            
            this.printAt(content, {
                x: 0,
                y: row,
            });
        });
    }
}
  
