import si from 'systeminformation';

// 获取系统信息
si.currentLoad(data => {
    // console.log(data);
});

// 获取磁盘信息
si.fsSize(data => {
    // console.log(data);
});

// 获取内存信息
si.mem(data => {
    // console.log(data);
});

// 获取网络信息
si.networkInterfaceDefault(iface => {
    // console.log(iface);
    // si.networkStats(iface, data => {
    //     console.log(data);
    // })
});

// 获取进程信息
si.processes(data => {
    console.log(data);
});
