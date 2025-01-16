import blessed from 'blessed';
import contrib from 'blessed-contrib';
const screen = blessed.screen({
    fullUnicode: true
});
const gauge = contrib.gauge({
    label: '进度条',
    width: 'half',
    stroke: 'blue',
    fill: 'green',
    percent: [0, 1],
});
screen.append(gauge);
let total = 0;
let timer = setInterval(() => {
    if (total === 100) {
        clearInterval(timer);
    }
    gauge.setPercent(total);
    screen.render();
    total += 20;
}, 500);
screen.key('C-c', function () {
    screen.destroy();
});
screen.render();
