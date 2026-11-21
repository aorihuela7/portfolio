import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { hero, site } from "@/data/portfolio";
import { BentoCard, MetaBar, StatusDot } from "@/components/ui/Bento";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { LocalTime } from "@/components/ui/LocalTime";
import { RichText } from "@/components/ui/RichText";
import { ChicagoGrid } from "@/components/visuals/ChicagoGrid";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 lg:pt-10"
    >
      <div className="grid grid-cols-12 gap-4">
        {/* SYS.01 */}
        <BentoCard className="col-span-12 lg:col-span-7 sm:p-8 lg:p-10">
          <MetaBar code={hero.code} tag="Software · HCI · Hardware" />
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-green/30 bg-green-soft px-3 py-1.5 text-xs font-semibold text-green-ink">
            <StatusDot />
            {site.availability}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.35rem] font-extrabold leading-[1.04] text-ink sm:text-5xl xl:text-[3.6rem]"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-2 sm:text-[1.0625rem]">
            <RichText text={hero.intro} />
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#research" variant="primary">
              Explore Work <ArrowDown className="size-4" aria-hidden />
            </ButtonLink>
            <CopyEmailButton email={site.email} />
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-xs font-medium uppercase tracking-wider text-ink-2">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-ink"
              >
                <GitHubIcon className="size-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-ink"
              >
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-ink"
              >
                Resume (PDF) <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </li>
          </ul>
        </BentoCard>

        {/* LOC.01 */}
        <BentoCard className="col-span-12 sm:col-span-6 lg:col-span-3">
          <MetaBar code={hero.location.code} tag="Local time" />
          <div className="relative min-h-44 flex-1 overflow-hidden rounded-2xl border border-line">
            <ChicagoGrid />
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-ink">{hero.location.city}</h2>
            <p className="mt-1 flex items-baseline gap-2 text-ink-2">
              <span className="text-xl font-semibold text-ink">
                <LocalTime timeZone={site.timeZone} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-3">
                America/Chicago
              </span>
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-ink-2">
              <Check className="size-4 text-green-ink" aria-hidden />
              {hero.location.note}
            </p>
          </div>
        </BentoCard>

        {/* EDU.27 */}
        <BentoCard className="col-span-12 sm:col-span-6 lg:col-span-2 lg:p-5">
          <MetaBar code={hero.spec.code} />
          <dl className="flex flex-col gap-3">
            {hero.spec.rows.map((row) => (
              <div key={row.label} className="border-b border-dashed border-line pb-3 last:border-0">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  {row.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-snug text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-auto rounded-2xl border border-line bg-canvas p-3 pt-2.5">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              Timeline
            </p>
            <ol className="space-y-2">
              {hero.spec.timeline.map((t) => (
                <li key={t.year} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className={
                      t.done
                        ? "mt-1 size-2 shrink-0 rounded-full bg-green"
                        : "mt-1 size-2 shrink-0 rounded-full border-2 border-accent"
                    }
                  />
                  <span className="text-xs leading-snug text-ink-2">
                    <span className="font-mono font-medium text-ink">{t.year}</span> {t.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
