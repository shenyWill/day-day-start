import blessed from 'blessed';
import contrib from 'blessed-contrib';

const screen = blessed.screen({
    fullUnicode: true
});

const data = {
    x: ['10 月 1 日', '10 月 2 日', '10 月 3 日', '10 月 4 日'],
    y: [6, 13, 8, 10]
}

const lineChart = contrib.line({
    style: {
        line: 'green',
        text: 'blue',
        baseline: 'yellow'
    },
    label: '{blue-fg}Line Chart{/blue-fg}',
    tags: true,
});
screen.append(lineChart);
lineChart.setData([data]);
screen.key('C-c', function() {
    screen.destroy();
});
screen.render();
