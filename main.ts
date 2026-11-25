import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I asked an AI to write this joke, so if it lands, thank the robot; if it flops, blame the human who outsourced his sense of humor.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. Fail loudly here instead of shipping an invalid line.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters, outside the 1-140 gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE + "\n", "utf8");

console.log(`Wrote ${LINE.length} characters to ${outFile}`);
