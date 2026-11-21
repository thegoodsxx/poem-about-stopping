import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const POEM_LINES = [
  'Any current can be carried to the sea.',
  'The mountain lake chose stillness, and went deep.',
  'The runner strikes his heels into the brink;',
  'only in halting does the valley clear.',
  'I drop the tool, withdraw the reaching hand,',
  'and sit beside the silence we have made.',
];
const POEM = POEM_LINES.join('\n');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDirEnv = process.env.MAKEFUN_OUTPUT_DIR;
const targetDir = outputDirEnv ? resolve(__dirname, outputDirEnv) : '/output';

mkdirSync(targetDir, { recursive: true });
const targetFile = resolve(targetDir, 'entry.txt');
writeFileSync(targetFile, POEM, 'utf-8');
