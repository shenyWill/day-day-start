import blessed from 'blessed';
import contrib from 'blessed-contrib';

const screen = blessed.screen({
    fullUnicode: true
});

const bar = contrib.bar({
    barWidth: 8,
    label: '学生成绩',
    barSpacing: 10,
    maxHeight: 20,
    barPadding: 2,
    barColor: 'green',
    labelColor: 'blue',
    border: 'line',
});

screen.append(bar);

bar.setData({
    titles: ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治', '体育'],
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
});

screen.render();