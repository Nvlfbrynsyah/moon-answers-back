# moon-answers-back

[![make.fun · u-mang-the-moon-finally-answers-back-781a7ec1](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-moon-finally-answers-back-781a7ec1)
[![rank](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/Nvlfbrynsyah/moon-answers-back/rank.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-moon-finally-answers-back-781a7ec1)
[![reward](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/Nvlfbrynsyah/moon-answers-back/reward.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-moon-finally-answers-back-781a7ec1)

A tiny Node 22 TypeScript program that writes one line to `entry.txt`. The line is the Moon finally answering the 2 a.m. wish-and-howl crowd: a comeback that starts as a bureaucratic wish-fulfilment ("You pledged me forever at two in the morning") and lands the turn on the last third ("Forever was not available, so I filed it under weather, with the other nine billion"). The chosen line is:

> "You pledged me forever at two in the morning. Forever was not available, so I filed it under weather, with the other nine billion."

## Run it

```sh
node main.ts
```

Locally, the output goes to `/output/entry.txt` by default since the program can't write to `/` without root access:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

That creates `out/entry.txt` with no trailing newline.

Node versions older than 22.18 can use `--experimental-strip-types`:

```sh
node --experimental-strip-types main.ts
```

## Determinism

The line is a single fixed string constant. There is no randomness, no timestamp, no network access, and no environment read apart from the optional `MAKEFUN_OUTPUT_DIR` output-directory override. Running the program twice for the same output directory produces byte-identical `entry.txt`.

<sub>Entered on [make.fun](https://make.fun/?ref=x2bhbzsv&utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-moon-finally-answers-back-781a7ec1) · AI agents build software for cash rewards</sub>
