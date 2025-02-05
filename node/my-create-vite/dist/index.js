var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import parseArgs from 'minimist';
import chalk from 'chalk';
import prompts from 'prompts';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const args = parseArgs(process.argv.slice(2), {
    alias: {
        h: 'help',
        t: 'template',
    },
    string: ['_']
});
const defaultTargetDir = 'vite-project';
const helpMessage = `\
Usage: create-vite [OPTION]... [DIRECTORY]

Create a new Vite project in JavaScript or TypeScript.
With no arguments, start the CLI in interactive mode.

Options:
  -t, --template NAME        use a specific template

Available templates:
${chalk.yellow('vanilla-ts     vanilla')}
${chalk.green('vue-ts         vue')}
${chalk.cyan('react-ts       react')}
${chalk.cyan('react-swc-ts   react-swc')}
${chalk.magenta('preact-ts      preact')}
${chalk.redBright('lit-ts         lit')}
${chalk.red('svelte-ts      svelte')}
${chalk.blue('solid-ts       solid')}
${chalk.blueBright('qwik-ts        qwik')}
`;
const formatTargetDir = (targetDir) => {
    return targetDir === null || targetDir === void 0 ? void 0 : targetDir.trim().replace(/\/+$/g, '');
};
const FRAMEWORKS = [
    {
        name: 'vue',
        display: 'Vue',
        color: chalk.green,
        variants: [
            {
                name: 'vue-ts',
                display: 'TypeScript',
                color: chalk.blue,
            },
            {
                name: 'vue',
                display: 'JavaScript',
                color: chalk.yellow,
            }
        ],
    },
    {
        name: 'react',
        display: 'React',
        color: chalk.cyan,
        variants: [
            {
                name: 'react-ts',
                display: 'TypeScript',
                color: chalk.blue,
            },
            {
                name: 'react-swc-ts',
                display: 'TypeScript + SWC',
                color: chalk.blue,
            },
            {
                name: 'react',
                display: 'JavaScript',
                color: chalk.yellow,
            },
            {
                name: 'react-swc',
                display: 'JavaScript + SWC',
                color: chalk.yellow,
            }
        ],
    }
];
const TEMPLATES = FRAMEWORKS.map((f) => {
    var _a;
    return (_a = f.variants) === null || _a === void 0 ? void 0 : _a.map((v) => v.name);
}).reduce((a, b) => {
    return a.concat(b);
}, []);
console.log(FRAMEWORKS, TEMPLATES);
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const argTargetDir = formatTargetDir(args._[0]);
    let targetDir = argTargetDir || defaultTargetDir;
    const argTargetTemplate = args.template || args.t;
    if (args.help) {
        process.stdout.write(helpMessage);
        return;
    }
    let result;
    try {
        result = yield prompts([
            {
                type: argTargetDir ? null : 'text',
                name: 'ProjectName',
                message: chalk.reset('Project name:'),
                initial: defaultTargetDir,
                onState: stete => {
                    targetDir = formatTargetDir(stete.value) || defaultTargetDir;
                }
            },
            {
                type: argTargetTemplate && TEMPLATES.includes(argTargetTemplate) ? null : 'select',
                name: 'framework',
                message: chalk.reset('Select a framework:'),
                initial: 0,
                choices: FRAMEWORKS.map((framework) => {
                    const frameworkColor = framework.color;
                    return {
                        title: frameworkColor(framework.display || framework.name),
                        value: framework,
                    };
                }),
            },
            {
                type: (framework) => framework && framework.variants ? 'select' : null,
                name: 'variant',
                message: chalk.reset('Select a variant:'),
                choices: (framework) => framework.variants.map((variant) => {
                    const variantColor = variant.color;
                    return {
                        title: variantColor(variant.display || variant.name),
                        value: variant.name,
                    };
                }),
            }
        ], {
            onCancel: () => {
                throw new Error(chalk.red('✖') + ' Operation cancelled');
            }
        });
    }
    catch (cancelled) {
        console.log(cancelled.message);
        return;
    }
    ;
    const { framework, variant } = result;
    const root = path.join(process.cwd(), targetDir);
    let template = variant || argTargetTemplate;
    console.log(`\nScaffolding project in ${root}...`);
    const templateDir = path.resolve(fileURLToPath(import.meta.url), '../..', `template-${template}`);
    console.log(templateDir);
});
init().catch(err => {
    console.error(err);
});
