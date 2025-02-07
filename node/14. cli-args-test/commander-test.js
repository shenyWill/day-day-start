const { Command } = require('commander');

const program = new Command();

program.name('string-util').description('一些字符串工具的cli').version('0.0.2');

program
    .command('split')
    .description('将字符串分割为数组')
    .argument('<string>', '要分割的字符串')
    .option('--first', '只显示第一个分割结果')
    .option('-s, --separator <char>', '分割符', ',')
    .action((str, options) => {
        const limit = options.first ? 1 : undefined;
        console.log(str.split(options.separator, limit));
    });

program.parse()