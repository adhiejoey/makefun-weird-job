import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const title = "Professional Mourner for Strangers' Goldfish Funerals";

// Keep the entry safely inside the 60-character gate, plain ASCII only.
if (title.length > 57 || /[^\x00-\x7F]/.test(title)) {
  throw new Error("Entry title fails the length or ASCII check");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, title, "utf8");
console.log(`Wrote ${title.length} characters to ${target}`);
