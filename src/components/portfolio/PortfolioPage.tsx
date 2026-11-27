import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Globe, Mail } from "lucide-react";
import { experience, portfolio, projects, research, skills } from "@/data/portfolio";
import { site } from "@/data/site";
import type { CaseStudy } from "@/data/types";
import { BentoCard, MetaBar, StatusDot, Tag, cx } from "@/components/ui/Bento";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RichText } from "@/components/ui/RichText";
import { CardMedia } from "@/components/home/CardMedia";

/**
 * Standalone engineering portfolio (/projects). Project-first and technical:
 * every entry leads with what was built, how, and with which stack.
 */
export function PortfolioPage() {
  const toolkit = skills.groups.filter((g) => portfolio.toolkit.includes(g.label));

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pt-10">
      <nav aria-label="Breadcrumb" className="mb-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink-2 transition hover:border-line-strong hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden /> Full site
        </Link>
      </nav>

      {/* Header */}
      <BentoCard className="sm:p-8 lg:p-10">
        <MetaBar code={portfolio.code} tag="Software Engineering · Full-Stack · Systems" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="flex w-fit items-center gap-2 rounded-full border border-green/30 bg-green-soft px-3 py-1 text-xs font-semibold text-green-ink">
              <StatusDot /> {site.availability}
            </p>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] text-ink sm:text-4xl lg:text-5xl">
              {portfolio.title}
            </h1>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-3">
              {site.name} · M.S. Computer Science, UChicago
            </p>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-2">
              <RichText text={portfolio.intro} />
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink href={`mailto:${site.email}`} variant="primary">
                <Mail className="size-4" aria-hidden /> Email me
              </ButtonLink>
              <ButtonLink href={site.resume}>
                Resume (PDF) <ArrowUpRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={site.github} external>
                <GitHubIcon className="size-4" /> GitHub
              </ButtonLink>
              <ButtonLink href={site.linkedin} external>
                <LinkedInIcon className="size-4" /> LinkedIn
              </ButtonLink>
            </div>
          </div>
          <dl className="grid grid-cols-2 content-start gap-3 lg:col-span-5">
            {portfolio.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse rounded-2xl border border-line bg-canvas p-4">
                <dt className="mt-1 text-xs leading-snug text-ink-2">{s.label}</dt>
                <dd className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Index */}
        <nav aria-label="Projects in this portfolio" className="mt-8 border-t border-line pt-6">
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className="group/idx flex h-full items-start gap-3 rounded-2xl border border-line bg-canvas p-3 transition hover:border-line-strong"
                >
                  <span className="font-mono text-[11px] text-accent-ink">{p.code}</span>
                  <span className="text-sm font-semibold leading-snug text-ink">
                    {p.shortTitle ?? p.title}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </BentoCard>

      {/* Projects */}
      <section aria-labelledby="portfolio-projects" className="mt-16">
        <h2 id="portfolio-projects" className="sr-only">
          Projects
        </h2>
        <ol className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <li key={p.slug} id={p.slug} className="scroll-mt-24">
              <ProjectEntry entry={p} flip={i % 2 === 1} />
            </li>
          ))}
        </ol>
      </section>

      {/* Toolkit */}
      <section aria-labelledby="portfolio-toolkit" className="mt-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
          <span className="text-accent-ink">STK</span> / Toolkit
        </p>
        <h2 id="portfolio-toolkit" className="text-3xl font-extrabold text-ink sm:text-4xl">
          Technical toolkit
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {toolkit.map((g) => (
            <BentoCard key={g.label} className="p-5 sm:p-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">{g.label}</p>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* Experience & research */}
      <section aria-labelledby="portfolio-more" className="mt-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
          <span className="text-accent-ink">EXP</span> / Beyond projects
        </p>
        <h2 id="portfolio-more" className="text-3xl font-extrabold text-ink sm:text-4xl">
          Experience & research
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <BentoCard className="p-5 sm:p-6">
            <MetaBar code={experience.code} tag={experience.period} />
            <h3 className="font-bold leading-snug text-ink">{experience.role}</h3>
            <p className="mt-1 text-sm text-ink-3">{experience.organization}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-2">
              {experience.bullets.slice(0, 2).map((b) => (
                <li key={b.title} className="flex gap-2">
                  <Check className="mt-1 size-3.5 shrink-0 text-green" aria-hidden />
                  <span>
                    <RichText text={b.body} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              <a
                href={experience.website.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-1.5 font-mono text-[11px] font-medium text-ink-2 transition hover:border-line-strong hover:text-ink"
              >
                <Globe className="size-3.5" aria-hidden /> {experience.website.label}
                <ArrowUpRight className="size-3" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link
                href="/#experience"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-1.5 font-mono text-[11px] font-medium text-ink-2 transition hover:border-line-strong hover:text-ink"
              >
                Full role <ArrowRight className="size-3" aria-hidden />
              </Link>
            </div>
          </BentoCard>
          {research.map((r) => (
            <BentoCard key={r.slug} interactive className="p-5 sm:p-6">
              <MetaBar code={r.code} tag={r.period} />
              <h3 className="font-bold leading-snug text-ink">
                <Link
                  href={`/research/${r.slug}`}
                  className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
                >
                  {r.shortTitle ?? r.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                <RichText text={r.summary} />
              </p>
              {r.metrics?.length ? (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Highlights">
                  {r.metrics.slice(0, 3).map((m) => (
                    <li key={m}>
                      <Tag tone="blue">{m}</Tag>
                    </li>
                  ))}
                </ul>
              ) : null}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent-ink">
                Read the research
                <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* Closing */}
      <BentoCard className="mt-20 items-start sm:p-8">
        <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Want the full picture?</h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-2">
          The main site adds my research, leadership, and life beyond the code. Or skip ahead and
          write to me directly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="primary">
            Visit the full site <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`}>
            <Mail className="size-4" aria-hidden /> {site.email}
          </ButtonLink>
        </div>
      </BentoCard>
    </div>
  );
}

function ProjectEntry({ entry, flip }: { entry: CaseStudy; flip: boolean }) {
  const live = entry.links?.find((l) => l.kind === "live");
  const repo = entry.links?.find((l) => l.kind === "repo");
  const stack = entry.stack ?? entry.tags;

  return (
    <BentoCard interactive className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
        <CardMedia
          entry={entry}
          className={cx(
            "lg:col-span-6",
            entry.cover?.fit === "contain" && !entry.video
              ? "aspect-[10/7] lg:self-center"
              : "min-h-60 sm:min-h-80 lg:min-h-full",
            flip && "lg:order-2",
          )}
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
        <div className="flex min-w-0 flex-col lg:col-span-6">
          <MetaBar code={entry.code} tag={`${entry.categories?.join(" · ") ?? "Project"} · ${entry.period}`} />
          {entry.eyebrow ? (
            <p className="mb-3 w-fit rounded-full border border-accent-line bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-ink">
              {entry.eyebrow}
            </p>
          ) : null}
          <h3 className="text-2xl font-extrabold leading-tight text-ink">
            <Link
              href={`/projects/${entry.slug}`}
              className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
            >
              {entry.title}
            </Link>
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
            <RichText text={entry.summary} />
          </p>

          {entry.highlights?.length ? (
            <div className="mt-5 rounded-2xl border border-line bg-canvas p-4">
              <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                Engineering highlights
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-ink-2">
                {entry.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <Check className="mt-1 size-3.5 shrink-0 text-green" aria-hidden />
                    <span>
                      <RichText text={h} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-5">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">Stack</p>
            <ul className="flex flex-wrap gap-1.5">
              {stack.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-ink">
              Read the technical case study
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
            </span>
            {live ? (
              <a
                href={live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-green/30 bg-green-soft px-3 py-1.5 font-mono text-[11px] font-medium text-green-ink transition hover:border-green"
              >
                <span aria-hidden className="size-1.5 rounded-full bg-green" />
                Live app <ArrowUpRight className="size-3" aria-hidden />
                <span className="sr-only">(opens {entry.shortTitle ?? entry.title} in a new tab)</span>
              </a>
            ) : null}
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
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
