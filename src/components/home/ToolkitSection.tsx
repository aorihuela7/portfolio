import { principles, skills } from "@/data/portfolio";
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

      <div className="mt-4">
        {/* STK.01 */}
        <BentoCard>
          <MetaBar code={skills.code} tag="Technical Skills Matrix" />
          <div className="gap-10 sm:columns-2 lg:columns-3">
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
