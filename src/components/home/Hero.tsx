import { ArrowDown, ArrowUpRight, Check, MapPin } from "lucide-react";
import { hero, site } from "@/data/portfolio";
import { BentoCard, MetaBar, StatusDot } from "@/components/ui/Bento";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { LocalTime } from "@/components/ui/LocalTime";
import { RichText } from "@/components/ui/RichText";
import { EducationCard } from "./EducationCard";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 lg:pt-10"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-7">
          {/* SYS.01 */}
          <BentoCard className="flex-1 sm:p-8 lg:p-10">
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

          {/* LOC.01 — compact */}
          <BentoCard className="py-4 sm:px-6 sm:py-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                <span aria-hidden className="size-1.5 rounded-[2px] bg-accent" />
                {hero.location.code}
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-ink">
                <MapPin className="size-4 text-accent-ink" aria-hidden />
                {hero.location.city}
              </span>
              <span className="flex items-baseline gap-2">
                <span className="font-semibold text-ink">
                  <LocalTime timeZone={site.timeZone} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                  local time
                </span>
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-ink-2 sm:ml-auto">
                <Check className="size-4 text-green-ink" aria-hidden />
                {hero.location.note}
              </span>
            </div>
          </BentoCard>
        </div>

        {/* EDU.01 */}
        <EducationCard className="lg:col-span-5" />
      </div>
    </section>
  );
}
