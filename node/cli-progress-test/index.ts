import { Bar } from 'cli-progress';

const bar = new Bar({
    format: '进度{bar} | {percentage}% | {value}/{total} | 速度：{speed}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
});

let value = 0;

bar.start(200, 0, {
    speed: "0"
});

const timer = setInterval(function(){
    value++;

    bar.update(value, {
        speed: (60 * Math.random()).toFixed(2) +  "Mb/s"
    });

    if (value >= bar.getTotal()){
        clearInterval(timer);

        bar.stop();
    }
}, 20);
