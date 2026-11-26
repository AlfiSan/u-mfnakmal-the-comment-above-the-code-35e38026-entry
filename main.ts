// The Comment Above the Code — entry program.
// Writes one painfully honest developer comment to /output/entry.txt,
// where the sealed gate scorer checks it (UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Changing one line here once took down payments for six hours. The line is still there.";

// The gate: 1 to 200 characters, not only white space.
const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry length ${text.length} is outside the 1-200 gate`);
}
if (!/\S/.test(text)) {
  throw new Error("entry is only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} chars to /output/entry.txt`);
