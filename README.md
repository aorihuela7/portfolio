# Alejandro Orihuela — Portfolio

Personal portfolio of **Alejandro Orihuela**, M.S. in Computer Science candidate at the University of Chicago (Software Engineering · HCI). It features HCI research, selected projects, professional experience, and leadership, each with its own case study.

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS 4 · Motion · Lucide · deployed on Vercel.

## Editing content

All copy, links, metrics, media paths, and gallery captions live in one file:

```
src/data/portfolio.ts   ← research, projects, experience, leadership, skills, about, contact
src/data/site.ts        ← name, email, social links, availability badge
src/data/types.ts       ← content model (what fields each entry supports)
```

- **Add a project:** append an object to `projects` in `portfolio.ts`. Its page at `/projects/<slug>` is generated automatically. Add its desktop column span to `projectSpans`.
- **Inline formatting:** use `**bold**` and `*italic*` inside any string.
- **Case-study sections** are built from typed blocks (`text`, `list`, `cards`, `stats`, `table`, `iterations`, `visual`, `principle`, …). See `types.ts`.

## Media

Publishable images and videos live in `public/assets/` and are already optimized (resized, converted to JPG/MP4, and **stripped of EXIF/GPS metadata**). `public/resume.pdf` is the only public document; it's a copy of the CV with the phone number removed.

To add a photo: export it as JPG (≈1800–2000 px on the long edge), drop it in the matching `public/assets/...` folder, and reference it from `portfolio.ts`.

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
