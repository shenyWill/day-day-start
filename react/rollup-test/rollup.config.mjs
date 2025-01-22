import postcss from 'rollup-plugin-postcss';
import myExtraRollupCssPlugin from './my-extra-rollup-css-plugin.mjs';
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: 'src/index.js',
    output:  [
        {
            file: 'dist/cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/esm.js',
            format: 'esm',
        },
        {
            file: 'dist/umd.js',
            format: 'umd',
            name: 'Yuanwill'
        }
    ],
    treeshake: false,
    plugins: [
        // postcss({
        //     extract: 'index.css'
        // })
        myExtraRollupCssPlugin({
            fileName: 'yuanwill.css'
        })
    ]
}