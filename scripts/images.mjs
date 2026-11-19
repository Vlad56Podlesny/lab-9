import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, basename } from 'node:path';
const input = 'image-sources';
const output = 'public/images';
await mkdir(output, { recursive: true });
for (const file of await readdir(input)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = basename(file).replace(/\.(jpe?g|png)$/i, '');
  for (const width of [400, 800]) {
    const base = sharp(join(input, file)).resize({ width });
    await base.clone().jpeg({ quality: 78 }).toFile(join(output, `${name}-${width}.jpg`));
    await base.clone().webp({ quality: 76 }).toFile(join(output, `${name}-${width}.webp`));
    await base.clone().avif({ quality: 48 }).toFile(join(output, `${name}-${width}.avif`));
  }
  console.log(`Processed: ${name}`);
}
