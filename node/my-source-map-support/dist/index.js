var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { SourceMapConsumer } from 'source-map';
function retrieveSourceMapURL(source) {
    const fileData = fs.readFileSync(source, { encoding: 'utf-8' });
    const regex = /# sourceMappingURL=(.*)$/g;
    let lastMatch, match;
    while (match = regex.exec(fileData)) {
        lastMatch = match;
    }
    if (!lastMatch)
        return null;
    return lastMatch[1];
}
function mapSourcePosition(source, line, column) {
    return __awaiter(this, void 0, void 0, function* () {
        if (source.startsWith('file:/')) {
            source = fileURLToPath(source);
        }
        if (!fs.existsSync(source)) {
            return null;
        }
        const sourceMapUrl = retrieveSourceMapURL(source);
        if (sourceMapUrl) {
            const dir = path.dirname(source);
            const sourceMapPath = path.join(dir, sourceMapUrl);
            if (fs.existsSync(sourceMapPath)) {
                const mapContent = fs.readFileSync(sourceMapPath, { encoding: 'utf-8' });
                const map = new SourceMapConsumer(mapContent);
                return (yield map).originalPositionFor({
                    line: line,
                    column: column,
                });
            }
        }
        ;
        return null;
    });
}
function wrapCallSite(frame) {
    return __awaiter(this, void 0, void 0, function* () {
        const source = frame.getFileName();
        if (source) {
            let position = {
                source: frame.getFileName(),
                line: frame.getLineNumber(),
                column: frame.getColumnNumber(),
            };
            if (source.startsWith('file:/')) {
                position = yield mapSourcePosition(source, position.line, position.column);
                console.log(2222);
                console.log(position.source, position.line, position.column);
            }
        }
    });
}
Error.prepareStackTrace = (err, stack) => {
    const name = err.name || 'Error';
    const message = err.message || 'Unknown error';
    const errorString = name + ':' + message;
    const processedStack = [];
    for (let i = 0; i < stack.length; i++) {
        const frame = stack[i];
        wrapCallSite(frame).then(site => {
            processedStack.push('\n 指向：' + site);
        });
    }
    return errorString + processedStack.join('');
};
function add(a, b) {
    if (a === 1) {
        throw new Error('xxx');
    }
    return a + b;
}
function main() {
    console.log(add(1, 2));
}
main();
// console.log(retrieveSourceMapURL('./dist/index.js'));
//# sourceMappingURL=index.js.map