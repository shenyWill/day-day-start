import blessed from 'blessed';

const screen = blessed.screen({ fullUnicode: true });

 const prompt = blessed.prompt({
    parent: screen,
    border: 'line',
    width: '100%',
    height: '100%',
    label: ' {blue-fg}登录:{/blue-fg} ',
    tags: true,
 });

 const msg = blessed.message({
    parent: screen,
    border: 'line',
    width: 'half',
    height: 'shrink',
    top: 'center',
    left: 'center',
    label: ' {blue-fg}提示{/blue-fg} ',
    tags: true,
    hidden: true
  });


 prompt.input('请输入你的名字？', '', (err, username) => {
    if (username === 'yuanwill') {
        msg.display('登录成功!', () => {
            // 消息显示后的回调
        });
    }
    setTimeout(function() {
        screen.destroy();
        console.log(username);
    }, 1000);
 });

 screen.key('C-c', function() {
    screen.destroy();
  });

 screen.render();
