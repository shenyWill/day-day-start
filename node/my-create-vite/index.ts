import parseArgs  from 'minimist';
import chalk from 'chalk';
import prompts from 'prompts';
import { fileURLToPath } from 'node:url'
import fs from 'node:fs';
import path from 'node:path';

const args = parseArgs<{ template: string; help: boolean; }>(process.argv.slice(2), {
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
${chalk.yellow    ('vanilla-ts     vanilla'  )}
${chalk.green     ('vue-ts         vue'      )}
${chalk.cyan      ('react-ts       react'    )}
${chalk.cyan      ('react-swc-ts   react-swc')}
${chalk.magenta   ('preact-ts      preact'   )}
${chalk.redBright ('lit-ts         lit'      )}
${chalk.red       ('svelte-ts      svelte'   )}
${chalk.blue      ('solid-ts       solid'    )}
${chalk.blueBright('qwik-ts        qwik'     )}
`;

const formatTargetDir = (targetDir: string | undefined) => {
    return targetDir?.trim().replace(/\/+$/g, '')
}

type Framework = {
    name: string
    display: string
    color: Function
    variants: FrameworkVariant[]
}

type FrameworkVariant = {
    name: string
    display: string
    color: Function
    customCommand?: string
}
  
const FRAMEWORKS: Framework[] = [
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
]
  
const TEMPLATES = FRAMEWORKS.map((f) => {
    return f.variants?.map((v) => v.name)
}).reduce((a, b) => {
    return a.concat(b)
}, [])

console.log(FRAMEWORKS, TEMPLATES)

const init = async () => {
    const argTargetDir = formatTargetDir(args._[0]);
    let targetDir = argTargetDir || defaultTargetDir;
    const argTargetTemplate = args.template || args.t;
    if (args.help) {
        process.stdout.write(helpMessage);
        return;
    }
    let result: prompts.Answers<'ProjectName' | 'framework' | 'variant'>;
    try{
        result = await prompts(
            [
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
                      const frameworkColor = framework.color
                      return {
                        title: frameworkColor(framework.display || framework.name),
                        value: framework,
                      }
                    }),
                },
                {
                    type: (framework: Framework) => framework && framework.variants ? 'select' : null,
                    name: 'variant',
                    message: chalk.reset('Select a variant:'),
                    choices: (framework: Framework) =>
                    framework.variants.map((variant) => {
                        const variantColor = variant.color
                        return {
                            title: variantColor(variant.display || variant.name),
                            value: variant.name,
                        }
                    }),
                }
            ],
            {
                onCancel: () => {
                    throw new Error(chalk.red('✖') + ' Operation cancelled')
                }
            }
        )
    } catch (cancelled: any) {
        console.log(cancelled.message);
        return;
    };
    const { framework, variant } = result

    const root = path.join(process.cwd(), targetDir)

    let template: string = variant || argTargetTemplate;

    console.log(`\nScaffolding project in ${root}...`)

    const templateDir = path.resolve(
        fileURLToPath(import.meta.url),
        '../..',
        `template-${template}`,
    )

    console.log(templateDir)
};

init().catch(err => {
    console.error(err);
});