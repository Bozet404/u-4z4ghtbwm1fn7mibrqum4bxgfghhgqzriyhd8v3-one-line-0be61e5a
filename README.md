# One Line, One Laugh

Entry for the make.fun bounty "One Line, One Laugh"
(u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a).

## The line

> I asked an AI to write this joke, so if it lands, thank the robot; if it flops, blame the human who outsourced his sense of humor.

130 characters, one sentence. A joke about the joke itself: the setup hands
the credit to the machine, then the twist hands the blame back to the human.

## How it works

`main.ts` writes the line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`
when set). No network, no dependencies, no secrets — plain Node.js.

## Test locally

```sh
OUTPUT_DIR=/tmp/one-line-out node main.ts
cat /tmp/one-line-out/entry.txt
```

The gate checks the file is UTF-8 text of 1 to 140 characters, not only
whitespace. This line is 130 characters.
