import si from 'systeminformation';
import contrib from 'blessed-contrib';

type CpuData = {
    title: string;
    style: {
        line: string;
    };
    x: number[];
    y: number[];
}

const colors = ['magenta', 'cyan', 'blue', 'yellow', 'green', 'red'];

class CpuMonitor {
    lineChart: contrib.Widgets.PictureElement;
    cpuData: CpuData[] = [];
    interval: NodeJS.Timer | null = null;

    constructor(line: contrib.Widgets.PictureElement) {
        this.lineChart = line;
    }

    init() {
        si.currentLoad(data => {
            this.cpuData = data.cpus.map((cpu, index) => {
                return {
                    title: `CPU ${index + 1}`,
                    style: {
                        line: colors[index % colors.length]
                    },
                    x: Array(60).fill(0).map((_, i) => 60 - i),
                    y: Array(60).fill(0),
                }
            });
            this.update(data);
            this.interval = setInterval(() => {
                si.currentLoad(data => {
                    this.update(data);
                })
            }, 1000);
        })
    }
    update(data: si.Systeminformation.CurrentLoadData) {
        data.cpus.forEach((cpu, index) => {
            let loadString = cpu.load.toFixed(1).toString();
            while (loadString.length < 6) {
                loadString = ' ' + loadString;
            }
            loadString = loadString + '%';
            this.cpuData[index].title = 'CPU' + (index + 1) + loadString;
            this.cpuData[index].y.shift();
            this.cpuData[index].y.push(cpu.load);
        });
        this.lineChart.setData(this.cpuData);
        this.lineChart.screen.render();
    }
}

export default CpuMonitor;