import prompt, { PromptObject } from 'prompts'

(async function(){
    const questions: PromptObject[] = [
        {
            type: 'text',
            name: 'name',
            message: `你的名字`,
            initial: `yuanwill`
        },
        {
            type: 'number',
            name: 'age',
            message: '你的年龄?',
            validate: value => value < 18 ? `未满 18 岁不能使用` : true
        },
        {
            type: 'password',
            name: 'secret',
            message: '设置下密码'
        },
        {
            type: 'confirm',
            name: 'confirmed',
            message: '确认么?'
        },
        {
            type: 'toggle',
            name: 'confirmtoggle',
            message: '性别?',
            active: '男',
            inactive: '女'
        },
        {
            type: 'select',
            name: 'color',
            message: '喜欢的颜色？',
            choices: [
                { title: 'Red', description: '这是红色', value: '#ff0000' },
                { title: 'Green', description: '这是绿色',value: '#00ff00' },
                { title: 'Yellow', value: '#ffff00'},
                { title: 'Blue', value: '#0000ff' }
            ]
        },
        {
            type: 'multiselect',
            name: 'multicolor',
            message: '选择不喜欢的颜色（多选）',
            choices: [
                { title: 'Red', description: '这是红色', value: '#ff0000' },
                { title: 'Green', value: '#00ff00' },
                { title: 'Yellow', value: '#ffff00'},
                { title: 'Blue', value: '#0000ff' }
            ]
        },
        {
            type: 'date',
            name: 'birthday',
            message: `你的生日？`,
            validate: date => date > Date.now() ? `不能设置未来的日期` : true
        }
    ];

    const answers = await prompt(questions);
    console.log(answers);
})();
