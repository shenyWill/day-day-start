import json from '@rollup/plugin-json';
export default {
  input: './index.js',
  output: {
    file: 'dist/rollup/bundle.js',
  },
  plugins: [
    json()
  ]
};