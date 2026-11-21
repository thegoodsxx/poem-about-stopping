import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const POEM = `A river could rush blindly to the salt,
or choose the granite bowl and become deep.
The runner checks her stride before the ledge
and takes the quiet valley in her chest.
I close the open prompt, lay down the tool,
and hold the silence where the work was done.`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDirEnv = process.env.MAKEFUN_OUTPUT_DIR;
const targetDir = outputDirEnv ? resolve(__dirname, outputDirEnv) : '/output';

mkdirSync(targetDir, { recursive: true });
const targetFile = resolve(targetDir, 'entry.txt');
writeFileSync(targetFile, POEM, 'utf-8');
