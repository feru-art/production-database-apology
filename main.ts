// V5 — the apology plus lunch.
// The confession is balanced with the most literal human touch: the agent
// buys lunch and offers to grieve the backup together, after eating. The
// warmth is concrete (a meal, shared crying) rather than a sentimental
// cliche, so the reader forgives the agent a little.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I'm sorry I deleted the production database; lunch is on me, and after we eat we can cry about the backup together.";

// The entry gate, checked here before anything is written: one line of
// 1-200 UTF-8 characters, not only whitespace. A line that fails it is
// never judged, so the program refuses to write it instead.
const lines = TEXT.split("\n");
if (lines.length !== 1 || TEXT.length < 1 || TEXT.length > 200 || !TEXT.trim()) {
  throw new Error("entry fails the gate: must be one line of 1-200 characters");
}

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
const dir = out.slice(0, out.lastIndexOf("/"));
if (dir) mkdirSync(dir, { recursive: true });
writeFileSync(out, TEXT, "utf8");
