const minimist = require('minimist');


const argv = minimist(process.argv.slice(2), {
    boolean: ['x'],
    string: ['y'],
    unknown: arg => {
        return arg === 'z'
    },
    default: {
        name: 'zhangsan'
    },
    alias: {
        a: 'age'
    }
});
console.log(argv);