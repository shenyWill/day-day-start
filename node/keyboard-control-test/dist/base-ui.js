import ansiEscapes from 'ansi-escapes';
export class BaseUI {
    constructor() {
        this.stdout = process.stdout;
    }
    print(text) {
        this.stdout.write(text);
    }
    setCursorAt({ x, y }) {
        this.print(ansiEscapes.cursorTo(x, y));
    }
    printAt(text, position) {
        this.setCursorAt(position);
        this.print(text);
    }
    clearLine(row) {
        this.printAt(ansiEscapes.eraseLine, { x: 0, y: row });
    }
    get terminalSize() {
        return {
            columns: this.stdout.columns,
            rows: this.stdout.rows,
        };
    }
}
