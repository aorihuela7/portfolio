import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";
import { leadership } from "@/data/portfolio";
import { BentoCard, MetaBar, SectionHeader, Tag, cx } from "@/components/ui/Bento";
import { RichText } from "@/components/ui/RichText";
import { CardMedia } from "./CardMedia";

const spans = ["lg:col-span-7", "lg:col-span-5"];

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-20 sm:px-6 lg:px-8"
    >
      <SectionHeader
        id="leadership-title"
        index="04"
        label="Leadership"
        title="Leadership & Community Impact"
        description="Two communities built from zero—one at UChicago, one in Lima."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {leadership.map((entry, i) => (
          <BentoCard key={entry.slug} interactive className={cx("h-full", spans[i] ?? "lg:col-span-6")}>
            <MetaBar code={entry.code} tag={entry.period} />
            <CardMedia
              entry={entry}
              className="h-56 sm:h-72"
              sizes={i === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
            />
            {entry.eyebrow ? (
              <p className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent-ink">
                {entry.eyebrow}
              </p>
            ) : null}
            <h3 className="mt-2 text-xl font-bold leading-snug text-ink sm:text-2xl">
              <Link
                href={`/leadership/${entry.slug}`}
                className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
              >
                {entry.title}
              </Link>
            </h3>
            {entry.metrics ? (
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Highlights">
                {entry.metrics.map((m, j) => (
                  <li key={m}>
                    <Tag tone={j === 0 ? "accent" : j === 1 ? "green" : "blue"}>{m}</Tag>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
              <RichText text={entry.summary} />
            </p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-ink">
                {entry.ctaLabel}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
              {entry.links
                ?.filter((l) => l.kind === "official")
                .map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-green/30 bg-green-soft px-3 py-1.5 font-mono text-[11px] font-medium text-green-ink transition hover:border-green"
                  >
                    <BadgeCheck className="size-3.5" aria-hidden />
                    Official club page <ArrowUpRight className="size-3" aria-hidden />
                    <span className="sr-only">(opens TottenhamHotspur.com in a new tab)</span>
                  </a>
                ))}
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
