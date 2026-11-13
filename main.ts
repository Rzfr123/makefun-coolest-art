// coolest-art-01 entry (Node 22, standard library only): the art is the
// entry.png beside this file — a lone lantern warrior facing a giant
// glowing sea serpent under storm light. The program copies it byte for
// byte to the output directory, so the judge sees exactly the bytes here.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(source)) {
  throw new Error('entry.png is missing beside main.ts; nothing to write');
}

mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'entry.png');
copyFileSync(source, target);

// Guard against a truncated write: the output must be the source, byte for byte.
if (statSync(target).size !== statSync(source).size) {
  throw new Error(`entry.png write incomplete: ${statSync(target).size} bytes, expected ${statSync(source).size}`);
}
