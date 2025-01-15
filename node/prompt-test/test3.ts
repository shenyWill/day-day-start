import { prompt, PromptOptions } from "./index.js";

const questions: PromptOptions[] = [
    {
        message: '你的名字?',
        type: 'text',
        name: 'name'
    },
    {
        message: '年龄?',
        type: 'text',
        name: 'age'
    },
    {
        message: '你的班级？',
        type: 'select',
        name: 'class',
        choices: [
            '一班',
            '二班',
            '三班'
        ]
    }
];

(async function() {
    const answers = await prompt(questions);
    console.log(answers);
})();
