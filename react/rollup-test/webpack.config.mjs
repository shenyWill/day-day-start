import path from 'node:path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type {import("webpack").Configuration} */
export default {
    entry: './src/index.js',
    mode: 'development',
    devtool: false,
    experiments: {
        outputModule: true,
    },
    module: {
        rules: [{
            test: /\.css$/i,
            // use: ["style-loader", "css-loader"],
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }],
    },
    output: {
        path: path.resolve(import.meta.dirname, 'dist2'),
        filename: 'bundle.esm.js',
        // libraryTarget: 'commonjs2'
        // libraryTarget: 'umd',
        // library: 'Yuanwill'
        libraryTarget: 'module',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
};
