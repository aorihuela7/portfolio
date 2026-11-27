# Alejandro Orihuela — Portfolio

Personal portfolio of **Alejandro Orihuela**, M.S. in Computer Science candidate at the University of Chicago (Software Engineering · HCI). It features HCI research, selected projects, professional experience, leadership, and "Beyond the Code" interests, each with its own page.

**`/projects` is a standalone engineering portfolio**: every project with its technical highlights, full stack, and links, plus the toolkit, experience, and research. Send that URL when an application asks specifically for a portfolio, and the home page when it asks for a personal website.

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS 4 · Motion · Lucide · deployed on Vercel.

## Editing content

All copy, links, metrics, media paths, and gallery captions live in one file:

```
src/data/portfolio.ts   ← research, projects, experience, leadership, skills, about, beyond, contact
src/data/site.ts        ← name, email, social links, availability badge
src/data/types.ts       ← content model (what fields each entry supports)
```

- **Add a project:** append an object to `projects` in `portfolio.ts`. Its page at `/projects/<slug>` is generated automatically, and it appears on the `/projects` portfolio. Add its desktop column span to `projectSpans` and 3–4 `highlights` (short technical bullets; the first three show on Home cards).
- **Portfolio page copy** (intro, stats, toolkit groups) lives in `portfolio` in `portfolio.ts`.
- **Add a Beyond the Code interest:** append an object to `beyond`. Its page lives at `/beyond/<slug>` and its tile appears in the About section.
- **Inline formatting:** use `**bold**` and `*italic*` inside any string.
- **Case-study sections** are built from typed blocks (`text`, `list`, `cards`, `stats`, `table`, `iterations`, `visual`, `principle`, `timeline`, `gallery`, `video`, `cta`, …). See `types.ts`.

## Media

Publishable images and videos live in `public/assets/` and are already optimized (resized, converted to JPG/MP4, and **stripped of EXIF/GPS metadata**). `public/resume.pdf` is the only public document; it's a copy of the CV with the phone number removed.

UI screenshots can stay PNG. Give them `fit: "contain"` so cards, galleries, and timelines show the whole screen instead of cropping it, and redact anything that identifies other people (names, Windows usernames in paths, certificate serials) before publishing.

To add a photo: export it as JPG (≈1800–2000 px on the long edge), drop it in the matching `public/assets/...` folder, and reference it from `portfolio.ts`. iPhone HDR images (HEIC, or TIFFs pasted from Photos with a PQ profile) must be tone-mapped to sRGB first or they look washed out. Full-resolution originals go in `_media_originals/` (gitignored).

Videos: H.264 MP4 at 720p with `+faststart` and no audio (iPhone HLG footage converted to SDR first, interlaced camcorder footage deinterlaced). The LEGO stadium walkthrough is about 17 MB and the 2014 terrace video about 9 MB.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Optional env var: `NEXT_PUBLIC_SITE_URL` (canonical URL once a custom domain is set). On Vercel the production URL is detected automatically.

## Repository notes

`_reference_docs/` (internal drafts, original CV) and `_media_originals/` (full-resolution source media) are local-only and excluded via `.gitignore`.
