import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, LayoutGrid } from "lucide-react";
import { projectCategories, projects, projectSpans } from "@/data/portfolio";
import type { CaseStudy } from "@/data/types";
import { BentoCard, MetaBar, SectionHeader, Tag } from "@/components/ui/Bento";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { RichText } from "@/components/ui/RichText";
import { CardMedia } from "./CardMedia";
import { ProjectGrid } from "./ProjectGrid";

export function ProjectsSection() {
  const items = projects.map((p) => ({
    slug: p.slug,
    categories: p.categories ?? [],
    span: projectSpans[p.slug] ?? "lg:col-span-6",
    card: <ProjectCard entry={p} wide={projectSpans[p.slug] === "lg:col-span-7"} />,
  }));

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-20 sm:px-6 lg:px-8"
    >
      <SectionHeader
        id="projects-title"
        index="02"
        label="Projects"
        title="Selected Projects"
        description="Security tooling, inclusive interfaces, physical computing, and full-stack systems—each with a full technical case study."
        action={
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition hover:border-line-strong"
          >
            <LayoutGrid className="size-4 text-accent-ink" aria-hidden />
            Open the engineering portfolio
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        }
      />
      <ProjectGrid items={items} categories={projectCategories} />
    </section>
  );
}

function ProjectCard({ entry, wide }: { entry: CaseStudy; wide: boolean }) {
  const live = entry.links?.find((l) => l.kind === "live");
  const repo = entry.links?.find((l) => l.kind === "repo");
  return (
    <BentoCard interactive className="h-full">
      <MetaBar code={entry.code} tag={`${entry.categories?.[0] ?? "Project"} · ${entry.period}`} />
      <CardMedia
        entry={entry}
        className="h-56 sm:h-64"
        sizes={wide ? "(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"}
      />
      <h3 className="mt-6 text-xl font-bold leading-snug text-ink">
        <Link
          href={`/projects/${entry.slug}`}
          className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
        >
          {entry.title}
        </Link>
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
        <RichText text={entry.summary} />
      </p>
      {entry.highlights?.length ? (
        <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-2" aria-label="Engineering highlights">
          {entry.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <Check className="mt-1 size-3.5 shrink-0 text-green" aria-hidden />
              <span>
                <RichText text={h} />
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
        {entry.tags.slice(0, 4).map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-ink">
          View case study
          <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
        </span>
        <span className="flex flex-wrap gap-2">
          {repo ? (
            <a
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-1.5 font-mono text-[11px] font-medium text-ink-2 transition hover:border-line-strong hover:text-ink"
            >
              <GitHubIcon className="size-3.5" /> Source <ArrowUpRight className="size-3" aria-hidden />
              <span className="sr-only">(opens GitHub in a new tab)</span>
            </a>
          ) : null}
          {live ? (
            <a
              href={live.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 rounded-full border border-green/30 bg-green-soft px-3 py-1.5 font-mono text-[11px] font-medium text-green-ink transition hover:border-green"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-green" />
              Live app <ArrowUpRight className="size-3" aria-hidden />
              <span className="sr-only">(opens {entry.shortTitle ?? entry.title} in a new tab)</span>
            </a>
          ) : null}
        </span>
      </div>
    </BentoCard>
  );
}
