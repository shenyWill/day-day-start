import { SelectPrompt, SelectPromptOptions } from "./selectPrompt.js";
import { TextPrompt, TextPromptOptions } from "./textPrompt.js";

export type PromptOptions = TextPromptOptions | SelectPromptOptions;

const map: Record<string, any> = {
    text: TextPrompt,
    select: SelectPrompt
};

const runPrompt = async (question: PromptOptions) => {
    const promptClass = map[question.type];
    if (!promptClass) {
        return null;
    }
    return new Promise(resolve => {
        const prompt = new promptClass(question);
        
        prompt.render();

        prompt.on('submit', (value: string) => {
            resolve(value);
        })
    })
}

export const prompt = async (questions: PromptOptions[]) => {
    const answers: Record<string, any> = {};

    for(let i = 0; i< questions.length; i++) {
        const name = questions[i].name;

        answers[name] = await runPrompt(questions[i]);
    }

    return answers;
}