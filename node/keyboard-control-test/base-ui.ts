import ansiEscapes from 'ansi-escapes';


export interface Position {
    x: number;
    y: number;
}
export abstract class BaseUI {
    private readonly stdout: NodeJS.WriteStream = process.stdout;

    protected print(text: string) {
        this.stdout.write(text);
    }

    protected setCursorAt({ x, y }: Position) {
        this.print(ansiEscapes.cursorTo(x, y));
    }

    protected printAt(text: string, position: Position) {
        this.setCursorAt(position);
        this.print(text);
    }

    protected clearLine(row: number) {
        this.printAt(ansiEscapes.eraseLine, { x: 0, y: row });
    }

    get terminalSize(): { columns: number; rows: number } {
        return {
            columns: this.stdout.columns,
            rows: this.stdout.rows,
        };
    }
    abstract render(): void;
}