// make.fun competition: u-mang-the-moon-finally-answers-back-781a7ec1
// Output contract: writes exactly the 130-character line below, with no
// trailing newline, to entry.txt in the directory given by MAKEFUN_OUTPUT_DIR, or /output if unset.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "You pledged me forever at two in the morning. Forever was not available, so I filed it under weather, with the other nine billion.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, { encoding: "utf8" });

console.log(`Wrote ${LINE.length} characters to ${join(outputDir, "entry.txt")}`);
