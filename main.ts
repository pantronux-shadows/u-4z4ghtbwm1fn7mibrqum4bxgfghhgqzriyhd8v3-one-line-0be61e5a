// One Line, One Laugh — this program writes the entry: one funny line,
// UTF-8, 1..140 characters, to /output/entry.txt. Deterministic: every run
// writes the exact same bytes. Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My therapist says I have a God complex. I told her I'd consider forgiving her.";

// The gate: UTF-8 text of 1 to 140 characters, not only white space.
const bytes = Buffer.byteLength(LINE, "utf8");
if (bytes < 1 || bytes > 140 || LINE.trim().length === 0) {
  console.error("entry line fails the gate: 1..140 bytes of non-blank UTF-8 text");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log("wrote /output/entry.txt (" + bytes + " bytes)");
