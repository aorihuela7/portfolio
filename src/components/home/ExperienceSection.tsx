import { Building2, CalendarDays, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { BentoCard, MetaBar, SectionHeader, Tag } from "@/components/ui/Bento";
import { RichText } from "@/components/ui/RichText";
import { NewsletterPipeline } from "@/components/visuals/NewsletterPipeline";

export function ExperienceSection() {
  const e = experience;
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-20 sm:px-6 lg:px-8"
    >
      <SectionHeader
        id="experience-title"
        index="03"
        label="Experience"
        title="Professional Experience"
      />
      <BentoCard>
        <MetaBar code={e.code} tag={`${e.period} · ${e.duration}`} />
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-extrabold leading-tight text-ink">{e.role}</h3>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-ink-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
              <li className="flex items-start gap-2">
                <Building2 className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden />
                {e.organization}
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="size-4 text-ink-3" aria-hidden />
                {e.period} <span className="text-ink-3">({e.duration})</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-ink-3" aria-hidden />
                {e.location}
              </li>
            </ul>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-2">{e.overview}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {e.bullets.map((b) => (
                <li key={b.title} className="rounded-2xl border border-line bg-canvas p-4">
                  <p className="text-sm font-bold text-ink">{b.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                    <RichText text={b.body} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-5">
            <dl className="grid grid-cols-3 gap-3">
              {e.stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-line bg-canvas p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-extrabold tracking-tight text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
            <NewsletterPipeline />
            <div className="rounded-2xl border border-line bg-canvas p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                Tools in rotation
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {["Drupal CMS", "Python", "Mailchimp API", "Google Business Profile", "WCAG", "AI Workflows"].map(
                  (t) => (
                    <li key={t}>
                      <Tag tone="blue">{t}</Tag>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </BentoCard>
    </section>
  );
}
