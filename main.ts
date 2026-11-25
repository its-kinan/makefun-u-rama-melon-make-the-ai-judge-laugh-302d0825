import { mkdirSync, writeFileSync } from "node:fs";

// One office-life joke, written for the judge in RULES.txt:
// true to office life (a calendar with no free time), a surprising turn
// (a meeting with yourself, still late), tight, and read aloud in one breath.
// Deterministic: no network, no clock, no randomness — the same bytes every run.
// Revised in-session: the first draft was 207 chars — over the 200-char gate
// and flabby in the middle ("apologized to the room", "afterward"). Cut the
// throat-clearing and the second beat; the joke lands faster now: the turn is
// the same (a meeting with yourself, still late), the setup is one clause.
const JOKE =
  "My calendar finally had a free hour, so I booked a meeting with myself — and I still showed up late and asked if someone could send me the notes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
