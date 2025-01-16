import blessed from 'blessed';

const screen = blessed.screen({
    fullUnicode: true
});

const data = [
    "红楼梦",
    "西游记",
    "水浒传",
    "三国演义",
    "儒林外史",
    "金瓶梅",
    "聊斋志异",
    "白鹿原",
    "平凡的世界",
    "围城",
    "活着",
    "百年孤独",
    "围城",
    "红高粱家族",
    "梦里花落知多少",
    "倾城之恋",
    "悲惨世界",
    "哈利波特",
    "霍乱时期的爱情",
    "白夜行",
    "解忧杂货店",
    "挪威的森林",
    "追风筝的人",
    "小王子",
    "飘",
    "麦田里的守望者",
    "时间简史",
    "人类简史",
    "活着为了讲述",
    "白夜行",
    "百鬼夜行"
];

const list = blessed.list({
    width: '100%',
    height: '100%',
    border: 'line',
    align: 'left',
    keys: true,
    mouse: true,
    style: {
        fg: 'white',
        bg: 'default',
        selected: {
            bg: 'blue'
        }
    },
    items: data,
});

screen.append(list);

list.select(0);

list.on('select', function(item) {
    screen.destroy();

    console.log(item.getText());
});

screen.key('C-c', function() {
    screen.destroy();
});

list.focus();

screen.render();