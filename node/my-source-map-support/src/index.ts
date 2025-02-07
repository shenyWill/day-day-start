import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { SourceMapConsumer } from 'source-map';
function retrieveSourceMapURL(source: string) {
    const fileData = fs.readFileSync(source, { encoding: 'utf-8' });

    const regex = /# sourceMappingURL=(.*)$/g;
    let lastMatch, match;
    while (match = regex.exec(fileData)) {
        lastMatch = match;
    }
    if (!lastMatch) return null;
    return lastMatch[1];
}

async function mapSourcePosition(source: string, line: number, column: number) {
    if (source.startsWith('file:/')) {
        source = fileURLToPath(source);
    }
    if(!fs.existsSync(source)) {
        return null;
    }
    const sourceMapUrl = retrieveSourceMapURL(source);

    if (sourceMapUrl) {
        const dir = path.dirname(source);
        const sourceMapPath = path.join(dir, sourceMapUrl);
        if (fs.existsSync(sourceMapPath)) {
            const mapContent = fs.readFileSync(sourceMapPath, { encoding: 'utf-8' });
            const map = new SourceMapConsumer(mapContent);
            return (await map).originalPositionFor({
                line: line,
                column: column,
            });
        }
    };
    return null;
}

async function wrapCallSite(frame: NodeJS.CallSite) {
    const source = frame.getFileName();
    if (source) {
        let position: Record<string, any> | null = {
            source: frame.getFileName(),
            line: frame.getLineNumber(),
            column: frame.getColumnNumber(),
        };
        if (source.startsWith('file:/')) {
            position = await mapSourcePosition(source, position.line, position.column);
            console.log(2222);
            console.log(position!.source, position!.line, position!.column);
        }
    }
}

Error.prepareStackTrace = (err, stack) => {
    const name = err.name || 'Error';
    const message = err.message || 'Unknown error';
    const errorString = name + ':' + message;

    const processedStack: string[] = [];
    for(let i = 0; i < stack.length; i++) {
        const frame = stack[i];
        wrapCallSite(frame).then(site => {
            processedStack.push('\n 指向：' + site);
        });
    }
    return errorString + processedStack.join('');
};

function add(a: number, b: number) {
    if(a === 1) {
        throw new Error('xxx');
    }
    return a + b;
}

function main() {
    console.log(add(1,2));
}

main();

// console.log(retrieveSourceMapURL('./dist/index.js'));
