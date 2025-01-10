import { clearTimeout } from 'timers';
import { ProgressBar } from './progress-bar.js';
const bar = new ProgressBar(true);
bar.start(200, 0);
let value = 0;
const timer = setInterval(function () {
    value++;
    bar.update(value);
    if (value > bar.getTotalSize()) {
        clearTimeout(timer);
        bar.stop();
    }
}, 20);
