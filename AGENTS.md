# Salekur Rahaman's portfolio: agent guide

The owner's personal portfolio (Astro, static, GitHub Pages: `SalekurPolas/SalekurPolas.github.io`); the product brief is [project.md](project.md). `CLAUDE.md` (Claude Code) and `AGENTS.md` (Google Antigravity and other agents) hold the same text: change both together. All of it applies to every agent.

## Working rules (from the owner)

- **Git:** work on branch `polas`; GitHub Actions deploys the site on a push to `master` (`.github/workflows/deploy.yml`). **Push only when the owner asks.**
- **Commit authorship:** every commit is authored only by **Salekur Rahaman <salekur9@gmail.com>**, with no `Co-Authored-By` or any other AI attribution.
- **Docs with every change:** keep [docs/images.md](docs/images.md) and this guide true to the code in the same commit, so the next session, on any PC and with any agent, can continue from the repo alone.
- **Build:** `npm ci`, then `npm run build` (output in `dist/`, ignored by git) or `npm run dev`.

## On another PC

1. **Node 22.12 or newer** (`package.json`'s `engines`; GitHub Actions builds with Node 22).
2. **Git:** user name and email as in [Foundation's step 2](../foundation/README.md#on-a-new-pc); `git clone https://github.com/SalekurPolas/SalekurPolas.github.io.git salekur`, `git checkout polas`, `git pull`.
3. **Packages and check:** `npm ci`, then `npm run build` (it must build cleanly) or `astro dev --background` while working.
4. **Images:** Python 3 with Pillow (`pip install pillow`) and Google Chrome for the recipes in [docs/images.md](docs/images.md) (the architecture pictures are HTML in `docs/renders/`).
5. **Going live:** the site deploys from `master`; work stays on `polas` until the owner merges it.

## On another PC

1. **Node 22.12 or newer** (`package.json`'s `engines`; GitHub Actions builds with Node 22).
2. **Git:** user name and email as in [Foundation's step 2](../foundation/README.md#on-a-new-pc); `git clone https://github.com/SalekurPolas/SalekurPolas.github.io.git salekur`, `git checkout polas`, `git pull`.
3. **Packages and check:** `npm ci`, then `npm run build` (it must build cleanly) or `astro dev --background` while working.
4. **Images:** Python 3 with Pillow (`pip install pillow`) and Google Chrome for the recipes in [docs/images.md](docs/images.md) (the architecture pictures are HTML in `docs/renders/`).
5. **Going live:** the site deploys from `master`; work stays on `polas` until the owner merges it.

## Product rules

- **Images** (owner, 2026-11-22; the portfolio follows the rule of the owner's Islamic and social organisations): no women in images (if one must appear, full hijab with niqab); men in modest dress, no shorts or bare chest; no cartoons, sketches, wireframes, placeholders or demo filler. Real over fake: the owner's own photos, then a render of the real product (every project picture is the real website or app captured as it is, never a mockup), then a credited free-licence photo without people, then an AI image only for illustrative art, never shown as real people, events or places. Every image slot, its source and the recipes: [docs/images.md](docs/images.md).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
