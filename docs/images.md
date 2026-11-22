# Images

How every image in this portfolio is chosen, made, checked and credited. The rules are the owner's (2026-11-22) and apply to every Lagbe Foundation and Lagbe Limited project and to the owner's personal portfolio. They apply to any agent (Claude Code, Google Antigravity or another) and to people.

## Rules

### A. Islamic image rule

These are Islamic and social organisations.

- **No women in images.** If a woman must appear, she wears full hijab with niqab: only her eyes are visible.
- **Men are modestly dressed:** panjabi, tupi, jubba, pyjama, shirt, full trousers, apron, suit and tie. No shorts, no bare chest.
- **No cartoons, sketches, wireframes, placeholders, or obvious demo or stock filler** where a real image is expected.

### B. Real over fake

Use the first of these that exists:

1. **The organisation's own real photos.**
2. **A screenshot rendered from the real product.** Anything that shows a website or an app (portfolio cards, project showcases, app screens) is a render of the real page or app, served locally (or a throwaway HTML page that reproduces it exactly) and captured with headless Chrome or Playwright. Never a mockup.
3. **A free-licence photo** (Unsplash, Pexels) **with no people**, credited.
4. **An AI-generated image**, only for illustrative scenes, objects, backgrounds and decorative art, following rule A. Never present it as real people the organisation helped, real events, named people, testimonials, or real places the organisation claims (no caption like "Rohima at her sewing machine" on a generated image).

### C. Workable by any agent

Image and content generation must be repeatable by other agents (the owner also uses Google Antigravity): every slot is in the inventory below with what it should show and where it came from, and every recipe here is a plain command or a prompt anyone can run. Record the source of each new image (photographer and link, render command, or the AI prompt and tool) in the inventory in the same commit.

For this portfolio, rule A covers the owner's own photo too, and rule B.2 means every project picture is a render of the real product: the real website or app captured as it is, never an AI scene of a laptop or phone with invented screens.

## Inventory

All images are in `public/assets/images/` and are served at `/assets/images/...`. A project's `heroImage` (frontmatter in `src/content/projects/*.md`) is shown on its case study page in a 16:9 box with `object-cover` (`src/pages/work/[slug].astro:80`–`86`), so a square image is cropped to its middle 1024 × 576 band, and it is also the page's share image (`src/pages/work/[slug].astro:20`, `src/layouts/Layout.astro:13`). Project renders are therefore 1024 × 1024 PNG with the real screens inside that middle band, on the site's background `#020617` (`--color-bg-dark`, `src/styles/global.css:6`).

| Path | Where it is used | Size, format | What it should show | Source |
|---|---|---|---|---|
| `salekur.jpg` | `src/pages/about.astro:16` (portrait); default share image `src/layouts/Layout.astro:13` | 1500 × 1500 JPEG | the owner, head and shoulders, in a suit and tie | the owner's own photo |
| `lagbe.png` | `src/content/projects/lagbe.md:17` | 1024 × 1024 PNG | Lagbe's real storefront home page, desktop | render of the local Lagbe site (`c:\laragon\www\lagbe`, Bangla, demo seed data), 1440 × 810 at 2×, 2026-11-22 ([recipe](#project-renders)) |
| `tuhur.png` | `src/content/projects/tuhur.md:16` | 1024 × 1024 PNG | the Tuhur app's real home screen in English (light), Bangla (dark) and Arabic (light) | Tuhur's app renders `c:\laragon\www\tuhur\public\assets\images\screens\home-{en-light,bn-dark,ar-light}.webp` (made by the Flutter app's `test/site/site_screens_test.dart`), laid out side by side with no device frame, 2026-11-22 |
| `v-signature.png` | `src/content/projects/v-signature.md:14` | 1024 × 1024 PNG | the real V-Signature demo (vSignature Studio) with a signature drawn on its canvas | render of https://salekurpolas.github.io/v-signature/ at 1280 × 720, a stroke drawn with Playwright's mouse, 2026-11-22 |
| `mmm-pinfo.png` | `src/content/projects/mmm-pinfo.md:16` | 294 × 231 PNG | the MMM-Pinfo module's panel on a MagicMirror² display | real screenshot of the module |
| `bachelor-icon.png` | `src/content/projects/bachelor.md:16` | 200 × 200 PNG | the Bachelor app's icon | the app's own icon (brand file) |
| `semantic-search.png` | `src/content/projects/semantic-search.md:16` | 1024 × 1024, JPEG data in a `.png` file | the semantic search system | AI-generated diagram (a glowing vector cube, invented queries and results, the Qdrant logo); no product to render locally. Waits for the owner: a real screenshot of the system, or an AI diagram without logos and invented data |
| Smart Mirror (no image) | `src/content/projects/smart-mirror.md` has no `heroImage` | 1024 × 1024 PNG when added | the real mirror: its display running, or the hardware, with no woman in the frame | removed 2026-11-22: the earlier AI image showed a woman (rule A). Waits for the owner's photo of the mirror, or a free-licence photo of a Raspberry Pi or a smart mirror with no people |
| `public/favicon.svg`, `public/favicon.ico` | `src/layouts/Layout.astro:30`–`31` | SVG, ICO | the site's mark | brand files |
| `public/assets/icons/*.svg` (10 files) | not used by any page (`src/` has no reference) | SVG | social and tool logos | the services' own logos (brand files) |

`dist/` is build output (ignored by git; GitHub Actions builds it on a push to `master`, `.github/workflows/deploy.yml`), so only `public/` is edited.

## How to make each kind

### Real photos (the organisation's own)

- **Framing (rule A):** no women; if one must be in the frame she is in full hijab with niqab. Men in modest dress. Prefer hands, work, tools, places and objects over faces.
- **Consent:** ask every person who can be recognised, and keep a note of who agreed (name, date, what for). Never show the face of a child without a parent's or guardian's consent; otherwise frame from behind or show only hands.
- **No private details:** no phone numbers, addresses, ID cards, payment numbers or screens with personal data in the frame.
- **Captions** name a person only with their consent, and never invent a story for a photo.
- **Files:** crop to the slot's aspect (inventory), then convert and compress (below). Keep the original outside git.

### Screenshots of the real product

The site itself is served with `npm run dev` (http://localhost:4321) or `npm run build` then `npm run preview`. A project's picture is a render of that project's own product:

- **A website or web demo:** serve it locally (a Laravel site from its `public/` folder with PHP 8.5: `cd public` and `c:\laragon\bin\php\php-8.5.6-nts-Win32-vs17-x64\php.exe -S 127.0.0.1:8000 ../vendor/laravel/framework/src/Illuminate/Foundation/resources/server.php`; that repo's `docs/images.md` says how to reach its pages), or open its public URL, and capture it (below). Lagbe's routes are bound to the `lagbe.test` host: browse `http://lagbe.test:8000` (Chrome or Playwright `--host-resolver-rules=MAP lagbe.test 127.0.0.1`). Never migrate or seed another project's own database for a picture: point it at a scratch database instead (for Lagbe: `createdb`/`CREATE DATABASE lagbe_shot`, then run `artisan migrate:fresh --seed` and the server with `DB_DATABASE=lagbe_shot CACHE_STORE=array SESSION_DRIVER=file QUEUE_CONNECTION=sync` set in the environment, and drop the database afterwards).
- **An app:** use the app's own renders (Tuhur's `public/assets/images/screens/*.webp`, from the Flutter app's `test/site/site_screens_test.dart`), or a phone screenshot (`adb exec-out screencap -p > shot.png`). Never draw a phone or a laptop around them.
- **Lay out the square:** a throwaway HTML page (outside the repo) puts the captures in the middle 1024 × 576 band, and headless Chrome captures it at 1024 × 1024:

```html
<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;width:1024px;height:1024px;background:#020617;overflow:hidden}
.row{position:absolute;top:224px;left:0;width:1024px;height:576px;display:flex;gap:40px;justify-content:center;align-items:center}
img{height:548px;border-radius:22px;box-shadow:0 0 0 1px #1e293b,0 18px 40px rgba(0,0,0,.5)}  /* a desktop capture: width:960px instead */
</style></head><body><div class="row"><img src="shot-1.png"><img src="shot-2.png"></div></body></html>
```

```sh
"C:/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --screenshot=out.png --window-size=1024,1024 --hide-scrollbars --virtual-time-budget=5000 "file:///C:/path/to/layout.html"
```

Then save it as PNG into `public/assets/images/<project>.png` (Pillow, below) and look at it before committing.

Serve the real page locally, then capture it with headless Chrome:

```sh
"C:/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --screenshot=out.png --window-size=W,H --hide-scrollbars URL
```

- `--screenshot` can capture before lazy images, web fonts or late scripts are done. Work around it with `--virtual-time-budget=10000` (lets the page run 10 s of virtual time first), and, where the page lazy-loads, use a throwaway copy without `loading="lazy"` or capture with Playwright (below). Look at the result before using it.
- A phone layout: `--window-size=390,844` (or the slot's size); Chrome keeps a minimum window width of about 500 px in some builds, so check the width of the output and use Playwright's viewport when it must be narrower.
- For a sharper image add `--force-device-scale-factor=2` and scale down afterwards.
- Use demo data that follows rule A and shows no real-looking personal data (masked phones, sample names).

Playwright, when the page needs waiting or scrolling (install it in a scratch folder, not the repo: `npm i playwright && npx playwright install chromium`):

```js
// shot.mjs: node shot.mjs URL out.png 1280 800
import { chromium } from 'playwright';
const [url, out, w, h] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(async () => { for (const img of document.images) { img.loading = 'eager'; } window.scrollTo(0, document.body.scrollHeight); await new Promise(r => setTimeout(r, 800)); window.scrollTo(0, 0); });
await page.waitForTimeout(800);
await page.screenshot({ path: out });
await browser.close();
```

### Free-licence photos

- Sources: [Unsplash](https://unsplash.com) ([licence](https://unsplash.com/license)) and [Pexels](https://www.pexels.com) ([licence](https://www.pexels.com/license/)). No people in the photo (rule B.3); objects, places, nature, mosques.
- Download the largest size, crop and convert (below), and add a row to the inventory with the photographer's name and the photo's page link, even where the licence needs no credit.
- Never use a photo that shows a brand or logo as the main subject, a recognisable private home, or a place the organisation would seem to claim as its own work.

### AI-generated images

Only for illustrative scenes, objects, backgrounds and decorative art (rule B.4). Any image tool can be used (the prompt is the record).

Prompt template:

```text
Subject: <what the slot should show, from the inventory>.
Setting: <a place in Bangladesh where fitting: a village courtyard, a river ghat, a market lane, a mosque in the countryside>.
Style: realistic photograph, natural light, <aspect, e.g. 16:9 wide>, calm colours, shallow depth of field.
People: none (or: men only, in modest dress: panjabi, tupi, full trousers; seen from behind or at a distance).
Negative: no women, no faces of women, no children's faces, no text, no watermark, no logos, no signs with writing, no cartoon, no illustration, no extra fingers, no distorted hands.
```

- **Output:** generate at least the slot's size (larger is better), PNG, highest quality; then convert and compress to the slot's format (below).
- **Review before committing:** open the image and look at all of it. Reject it if it breaks rule A (any woman, immodest dress), shows text, a watermark, a logo or garbled writing, has wrong hands, faces or mosque architecture, or looks fake or plastic. Never caption it as a real person, event or place.
- **Record it:** in the inventory's source column: "AI-generated", the tool and the date; keep the prompt in the commit message or below the inventory.

### Convert and compress (Pillow)

Pillow may be missing: `pip install pillow`. Run Python with `-I` (isolated mode, so no script beside the image can be imported by accident):

```sh
# to WebP at the slot's size, quality 80
python -I -c "from PIL import Image, ImageOps; im = ImageOps.fit(Image.open('in.png').convert('RGB'), (1200, 800), Image.LANCZOS); im.save('out.webp', 'WEBP', quality=80, method=6)"
# to JPEG
python -I -c "from PIL import Image, ImageOps; im = ImageOps.fit(Image.open('in.png').convert('RGB'), (1200, 630), Image.LANCZOS); im.save('out.jpg', 'JPEG', quality=82, optimize=True, progressive=True)"
# to PNG (screenshots with sharp text)
python -I -c "from PIL import Image; im = Image.open('in.png'); im = im.resize((1200, 750), Image.LANCZOS); im.save('out.png', optimize=True)"
# check a file's size and format
python -I -c "from PIL import Image; im = Image.open('out.webp'); print(im.format, im.size)"
```

`ImageOps.fit` crops to the aspect from the centre; crop by hand first when the subject is off centre.

`-I` also hides the user's own site-packages: where `pip install pillow` says "Defaulting to user installation", `python -I` cannot import it. Then use a virtual environment in a scratch folder: `python -m venv venv`, `venv/Scripts/pip install pillow`, and run `venv/Scripts/python -I -c "..."`.
