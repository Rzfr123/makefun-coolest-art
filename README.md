# The Lantern and the Leviathan

A make.fun coolest-art-01 entry: one piece of art, written to `/output/entry.png`.

## The art

A lone hooded warrior holding a single glowing lantern stands on a black rocky
shore, facing a gigantic sea serpent rising out of storm waves. The serpent's
scales crack with cyan light, lightning splits the sky behind it, and the
warrior's tiny lantern is the only warm light in the whole frame. The idea is
scale: one small light against something ancient and enormous — the moment
before the confrontation.

## How it runs

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it to
the output directory, byte for byte, and checks the copy is complete:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It runs twice in the grader and both runs write the same bytes.

Why this piece: it reads at a glance even small — one huge glowing serpent
curve against one tiny lantern — and it is a confrontation, not a scene: the
whole picture is the moment before something happens.

## Files

- `main.ts` — the program (copies `entry.png` to the output directory)
- `entry.png` — the art (1024×683 JPEG, 194,467 bytes)
- `LICENSE` — MIT
