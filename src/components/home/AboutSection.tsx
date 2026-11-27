import Link from "next/link";
import { ArrowRight, ArrowUpRight, PenLine } from "lucide-react";
import { about, beyond } from "@/data/portfolio";
import { BentoCard, MetaBar, SectionHeader } from "@/components/ui/Bento";
import { RichText } from "@/components/ui/RichText";
import { CardMedia } from "./CardMedia";

export function AboutSection() {
  const { writing } = about;
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-20 sm:px-6 lg:px-8"
    >
      <SectionHeader id="about-title" index="06" label="About" title="About & Beyond the Code" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <BentoCard className="lg:col-span-5 sm:p-8">
          <MetaBar code={about.code} tag="Profile" />
          <p className="text-[1.0625rem] leading-relaxed text-ink-2">
            <RichText text={about.bio} />
          </p>
          <div className="mt-8 rounded-2xl border border-line bg-canvas p-4">
            <p className="mb-2.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              <span aria-hidden className="size-1.5 rounded-full bg-green" /> Now
            </p>
            <ul className="space-y-1.5 text-sm text-ink-2">
              {about.now.map((n) => (
                <li key={n} className="flex gap-2">
                  <span aria-hidden className="text-accent-ink">
                    →
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={writing.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/writing mt-3 block rounded-2xl border border-line bg-canvas p-4 transition hover:border-line-strong"
          >
            <span className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              <PenLine className="size-3" aria-hidden /> {writing.label}
            </span>
            <span className="flex items-start justify-between gap-3">
              <span className="text-sm font-semibold italic leading-snug text-ink" lang="es">
                {writing.title}
              </span>
              <ArrowUpRight
                className="mt-0.5 size-4 shrink-0 text-ink-3 transition group-hover/writing:text-ink"
                aria-hidden
              />
            </span>
            <span className="mt-1 block font-mono text-[11px] text-ink-3">
              {writing.venue} · {writing.date}
            </span>
            <span className="mt-2 block text-[13px] leading-relaxed text-ink-2">{writing.note}</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <dl className="mt-auto grid gap-3 pt-8">
            {about.quickFacts.map((f) => (
              <div
                key={f.label}
                className="flex items-baseline justify-between gap-4 border-t border-dashed border-line pt-3"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  {f.label}
                </dt>
                <dd className="text-right text-sm font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </BentoCard>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {beyond.map((item) => (
            <li key={item.slug}>
              <BentoCard interactive className="h-full p-4 sm:p-5">
                <CardMedia
                  entry={{ ...item, cover: item.thumbnail ?? item.cover }}
                  className="min-h-44 flex-1"
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  {item.code}
                </p>
                <h3 className="mt-1 font-bold leading-snug text-ink">
                  <Link
                    href={`/beyond/${item.slug}`}
                    className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
                  >
                    {item.shortTitle ?? item.title}
                  </Link>
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                  <RichText text={item.summary} />
                </p>
                <span className="inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent-ink">
                  {item.ctaLabel ?? "Read more"}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </BentoCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
