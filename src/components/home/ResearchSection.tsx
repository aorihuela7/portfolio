import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { research } from "@/data/portfolio";
import type { CaseStudy } from "@/data/types";
import { BentoCard, MetaBar, SectionHeader, Tag, cx } from "@/components/ui/Bento";
import { RichText } from "@/components/ui/RichText";
import { TransitRoute } from "@/components/visuals/TransitRoute";

export function ResearchSection() {
  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-20 sm:px-6 lg:px-8"
    >
      <SectionHeader
        id="research-title"
        index="01"
        label="Research"
        title="Research"
        description="Field research on how software design decides who gets access—from Andean transit systems to Chicago's bilingual neighborhoods."
      />
      <div className="grid grid-cols-1 gap-4">
        {research.map((entry, i) => (
          <ResearchCard key={entry.slug} entry={entry} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function ResearchCard({ entry, reverse }: { entry: CaseStudy; reverse: boolean }) {
  const href = `/research/${entry.slug}`;
  const advisor = entry.facts?.find((f) => f.label === "Advisor")?.value;
  return (
    <BentoCard interactive className="p-4 sm:p-5 lg:p-5">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div
          className={cx(
            "flex flex-col p-2 sm:p-3 lg:col-span-7 lg:py-4",
            reverse && "lg:order-2",
          )}
        >
          <MetaBar code={entry.code} tag={`HCI Research · ${entry.period}`} />
          {entry.eyebrow ? (
            <p
              className={cx(
                "w-fit rounded-full border px-3 py-1 text-xs font-semibold",
                reverse
                  ? "border-blue/30 bg-blue-soft text-blue-ink"
                  : "border-accent-line bg-accent-soft text-accent-ink",
              )}
            >
              {entry.eyebrow}
            </p>
          ) : null}
          <h3 className="mt-4 text-2xl font-extrabold leading-tight text-ink sm:text-[1.75rem]">
            <Link
              href={href}
              className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
            >
              {entry.title}
            </Link>
          </h3>
          {entry.subtitle ? (
            <p className="mt-2 text-sm italic text-ink-2" lang="es">
              {entry.subtitle}
            </p>
          ) : null}

          {entry.visual === "transit" ? (
            <div className="mt-6 rounded-2xl border border-line bg-canvas px-3 pb-3 pt-4">
              <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                Systems studied
              </p>
              <TransitRoute />
            </div>
          ) : advisor ? (
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink-3">
              Undergraduate Researcher · Advised by{" "}
              <span className="text-ink-2">{advisor}</span>
            </p>
          ) : null}

          <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
            <RichText text={entry.summary} />
          </p>
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Topics">
            {entry.tags.slice(0, 5).map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink">
            {entry.ctaLabel ?? "Read case study"}
            <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
          </span>
        </div>

        {entry.cover ? (
          <div
            className={cx(
              "relative min-h-72 overflow-hidden rounded-2xl border border-line bg-canvas lg:col-span-5 lg:min-h-full",
              reverse && "lg:order-1",
            )}
          >
            <Image
              src={entry.cover.src}
              alt={entry.cover.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              style={{ objectPosition: entry.cover.position ?? "center" }}
            />
            {entry.cover.caption ? (
              <span className="absolute bottom-3 left-3 right-3 w-fit rounded-lg bg-black/60 px-3 py-1.5 leading-relaxed font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
                {entry.cover.caption}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </BentoCard>
  );
}
