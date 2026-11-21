import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { CaseStudy, Section } from "@/data/types";
import { BentoCard, MetaBar, Tag } from "@/components/ui/Bento";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { RichText } from "@/components/ui/RichText";
import { Gallery } from "@/components/media/Gallery";
import { VideoFrame } from "@/components/media/VideoFrame";
import { TransitRoute } from "@/components/visuals/TransitRoute";
import { Visual } from "@/components/visuals/Visual";
import { BlockRenderer } from "./Blocks";

const sectionMeta: Record<Section, { label: string; back: string }> = {
  research: { label: "Research", back: "/#research" },
  projects: { label: "Projects", back: "/#projects" },
  leadership: { label: "Leadership", back: "/#leadership" },
};

export function CaseStudyPage({
  entry,
  section,
  siblings,
}: {
  entry: CaseStudy;
  section: Section;
  siblings: CaseStudy[];
}) {
  const meta = sectionMeta[section];
  const i = siblings.findIndex((s) => s.slug === entry.slug);
  const next = siblings.length > 1 ? siblings[(i + 1) % siblings.length] : null;
  const tagLine = entry.categories?.length
    ? `${entry.categories.join(" · ")} · ${entry.period}`
    : `${meta.label} · ${entry.period}`;

  return (
    <article className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pt-10">
      <nav aria-label="Breadcrumb" className="mb-5">
        <Link
          href={meta.back}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink-2 transition hover:border-line-strong hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back to {meta.label}
        </Link>
      </nav>

      {/* Header tile */}
      <BentoCard className="sm:p-8 lg:p-10">
        <MetaBar code={entry.code} tag={tagLine} />
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {entry.eyebrow ? (
              <p className="w-fit rounded-full border border-accent-line bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-ink">
                {entry.eyebrow}
              </p>
            ) : null}
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] text-ink sm:text-4xl lg:text-[2.75rem]">
              {entry.title}
            </h1>
            {entry.subtitle ? (
              <p className="mt-3 text-base italic text-ink-2" lang="es">
                {entry.subtitle}
              </p>
            ) : null}
            <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-2">
              <RichText text={entry.intro ?? entry.summary} />
            </p>
            {entry.metrics ? (
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Highlights">
                {entry.metrics.map((m, j) => (
                  <li key={m}>
                    <Tag tone={j === 0 ? "accent" : j === 1 ? "green" : "blue"}>{m}</Tag>
                  </li>
                ))}
              </ul>
            ) : null}
            {entry.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {entry.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      l.kind === "live"
                        ? "inline-flex h-11 items-center gap-2 rounded-full bg-accent-ink px-5 text-sm font-semibold text-white transition hover:bg-[#9a3412] dark:text-[#09090b] dark:hover:bg-accent-hover"
                        : "inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-semibold text-ink transition hover:border-line-strong"
                    }
                  >
                    {l.kind === "repo" ? <GitHubIcon className="size-4" /> : null}
                    {l.label}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {entry.facts?.length ? (
            <dl className="grid content-start gap-0 rounded-2xl border border-line bg-canvas p-5 lg:col-span-4">
              {entry.facts.map((f) => (
                <div
                  key={f.label}
                  className="border-b border-dashed border-line py-3 first:pt-0 last:border-0 last:pb-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        {entry.stack?.length ? (
          <div className="mt-8 border-t border-line pt-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              {section === "research" ? "Methods & Tools" : "Stack"}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {entry.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ) : entry.tags.length ? (
          <ul className="mt-8 flex flex-wrap gap-1.5 border-t border-line pt-6">
            {entry.tags.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
        ) : null}
      </BentoCard>

      {/* Hero media */}
      <div className="mt-4">
        {entry.video ? (
          <VideoFrame video={entry.video} />
        ) : entry.visual === "transit" ? (
          <div className="rounded-3xl border border-line bg-surface px-4 py-8 sm:px-10">
            <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              Systems studied
            </p>
            <TransitRoute size="lg" />
          </div>
        ) : entry.cover ? (
          <figure className="overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="relative aspect-[16/9] max-h-[640px] w-full bg-canvas sm:aspect-[21/9]">
              <Image
                src={entry.cover.src}
                alt={entry.cover.alt}
                fill
                priority
                sizes="(min-width: 1280px) 1232px, 100vw"
                className="object-cover"
                style={{ objectPosition: entry.cover.position ?? "center" }}
              />
            </div>
            {entry.cover.caption ? (
              <figcaption className="px-5 py-3 font-mono text-[11px] text-ink-3">
                {entry.cover.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : entry.visual ? (
          <div className="overflow-hidden rounded-3xl border border-line">
            <Visual name={entry.visual} />
          </div>
        ) : null}
      </div>

      {/* Body */}
      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-14 sm:mt-20 sm:gap-16">
        {entry.blocks.map((block, idx) => (
          <BlockRenderer key={idx} block={block} index={idx + 1} />
        ))}

        {entry.gallery?.length ? (
          <section aria-labelledby="gallery-title">
            <header className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                  <span className="text-accent-ink">Gallery</span> / {entry.gallery.length} images
                </p>
                <h2 id="gallery-title" className="text-2xl font-extrabold text-ink sm:text-3xl">
                  {entry.galleryHeading ?? "Gallery"}
                </h2>
              </div>
              <p className="hidden font-mono text-[11px] text-ink-3 sm:block">
                Click to enlarge · ← → to navigate · Esc to close
              </p>
            </header>
            <Gallery
              images={entry.gallery}
              columns={entry.gallery.length === 4 ? 2 : 3}
              label={`${entry.shortTitle ?? entry.title} gallery`}
            />
          </section>
        ) : null}
      </div>

      {/* Next */}
      {next ? (
        <nav aria-label={`More ${meta.label.toLowerCase()}`} className="mx-auto mt-20 max-w-5xl">
          <Link
            href={`/${section}/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-line-strong sm:p-8"
          >
            <span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                Next · {next.code}
              </span>
              <span className="mt-1 block text-xl font-bold text-ink sm:text-2xl">
                {next.shortTitle ?? next.title}
              </span>
            </span>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-canvas transition group-hover:translate-x-1">
              <ArrowRight className="size-5" aria-hidden />
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
