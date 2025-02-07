import { SourceMapConsumer } from 'source-map';
import fs from 'node:fs';

const mapContent = fs.readFileSync('./dist/index.js.map', 'utf-8');

const map = await new SourceMapConsumer(mapContent);

const position = map.originalPositionFor({
  line: 45,
  column: 9,
});

console.log(position);
