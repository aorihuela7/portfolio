import { Award, GraduationCap } from "lucide-react";
import { education, principles, skills } from "@/data/portfolio";
import { BentoCard, MetaBar, SectionHeader, Tag } from "@/components/ui/Bento";

export function ToolkitSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-20 sm:px-6 lg:px-8"
    >
      <SectionHeader
        id="skills-title"
        index="05"
        label="Toolkit"
        title="How I Build"
        description="Three principles, two disciplines, one toolkit."
      />

      <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {principles.map((p, i) => (
          <li key={p.title}>
            <BentoCard className="h-full">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-4xl font-medium leading-none text-accent-ink">
                  0{i + 1}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                  Principle
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.body}</p>
            </BentoCard>
          </li>
        ))}
      </ol>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* EDU.01 */}
        <BentoCard id="education" className="scroll-mt-24 lg:col-span-5">
          <MetaBar code={education.code} tag="Education & Honors" />
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
              <GraduationCap className="size-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-bold text-ink">{education.school}</h3>
              <p className="text-sm text-ink-3">{education.location}</p>
            </div>
          </div>
          <ol className="mt-6 space-y-4 border-l border-line pl-5">
            {education.degrees.map((d) => (
              <li key={d.degree} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[25px] top-1.5 size-2.5 rounded-full border-2 border-accent bg-surface"
                />
                <p className="font-semibold leading-snug text-ink">{d.degree}</p>
                <p className="text-sm text-ink-2">{d.detail}</p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-ink-3">
                  {d.date}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <p className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              <Award className="size-3.5" aria-hidden /> Honors & Research Grants
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {education.honors.map((h, i) => (
                <li key={h}>
                  <Tag tone={i < 2 ? "accent" : "neutral"}>{h}</Tag>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              Selected Coursework
            </p>
            <ul className="grid gap-1 text-sm text-ink-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {education.coursework.map((c) => (
                <li key={c} className="flex gap-2">
                  <span aria-hidden className="text-ink-3">
                    —
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </BentoCard>

        {/* STK.01 */}
        <BentoCard className="lg:col-span-7">
          <MetaBar code={skills.code} tag="Technical Skills Matrix" />
          <div className="gap-8 sm:columns-2">
            {skills.groups.map((g) => (
              <div key={g.label} className="mb-6 break-inside-avoid last:mb-0">
                <h3 className="mb-2.5 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
                  <span aria-hidden className="size-1.5 rounded-[2px] bg-accent" />
                  {g.label}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
