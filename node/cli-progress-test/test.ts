import ansiEscapes from 'ansi-escapes';

process.stdout.write(ansiEscapes.cursorSavePosition);
process.stdout.write(ansiEscapes.cursorHide);
process.stdout.write('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');

setTimeout(() => {
    process.stdout.write(ansiEscapes.cursorRestorePosition)
    process.stdout.write('████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
}, 1000)

setTimeout(() => {
    process.stdout.write(ansiEscapes.cursorRestorePosition)
    process.stdout.write('███████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
}, 2000)

setTimeout(() => {
    process.stdout.write(ansiEscapes.cursorRestorePosition);
    process.stdout.write('██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
}, 3000)

