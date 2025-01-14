import ansiEscapes from 'ansi-escapes';
import { ScrollList } from "./scroll-list.js";
import readline from 'node:readline';

readline.emitKeypressEvents(process.stdin);
 
process.stdin.setRawMode(true);

const list = new ScrollList([
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
]);

process.stdin.on('keypress', (str, key) => {
 
    if(key.sequence === '\u0003') {
        process.stdout.write(ansiEscapes.clearTerminal)
        process.exit();
    }
    list.onKeyInput(key.name);
});
