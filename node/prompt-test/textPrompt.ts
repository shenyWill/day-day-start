import ansiEscapes from "ansi-escapes";
import { Key, Prompt } from "./prompt.js";
import chalk from "chalk";

function isNonPrintableChar(char: string) {
    return /^[\x00-\x1F\x7F]$/.test(char);
}

export interface TextPromptOptions  {
    type: 'text'
    name: string
    message: string
}

export class TextPrompt extends Prompt {
    out = process.stdout;
    cursor = 0;
    constructor(private options: TextPromptOptions) {
        super();
    }
    onKeyInput(str: string, key: Key): void {
        if (key.name === 'backspace') {
            this.cursor--;
            this.value = this.value.slice(0, this.cursor);
        }
        if(!isNonPrintableChar(str)) {
            this.value += str;
            this.cursor ++;
        }
        this.render();
    }
    render() {
        // 清除当前行
        this.out.write(ansiEscapes.eraseLine);

        // 将光标移动到行首
        this.out.write(ansiEscapes.cursorTo(0));

        // 输出提示信息和用户输入
        this.out.write([
            chalk.bold(this.options.message),
            chalk.gray('›'),
            ' ',
            chalk.blue(this.value)
        ].join(''));

        // 保存光标位置
        this.out.write(ansiEscapes.cursorSavePosition);

        this.out.write('\n' + ansiEscapes.cursorTo(0));
        if(this.value === '') {
            this.out.write(chalk.red('请输入名字'))
        } else {
            this.out.write(ansiEscapes.eraseLine)
        }

        this.out.write(ansiEscapes.cursorRestorePosition)
    }
}