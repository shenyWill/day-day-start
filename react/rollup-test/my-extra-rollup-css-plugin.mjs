const extraArr = [];

export default function extraRollupCssPlugin(opts) {
    return {
        name: 'extra-rollup-css-plugin',
        transform(code, id) {
            if(!id.endsWith('.css')) {
                return null;
            }
            extraArr.push(code);
            return {
                code: `export default 'yuanwill'`,
                map: { mappings: '' }
            }
        },
        generateBundle(options, bundle) {
            this.emitFile({
                type: 'asset',
                fileName: opts.fileName || 'zhaozilong.css',
                source: extraArr.join('\n/*我是沈渊*/\n')
            })
        },
    }
}