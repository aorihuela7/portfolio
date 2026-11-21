import { Award, GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { BentoCard, MetaBar, Tag, cx } from "@/components/ui/Bento";

/** EDU.01 — degrees, honors, and coursework. Sits beside the hero. */
export function EducationCard({ className }: { className?: string }) {
  return (
    <BentoCard id="education" className={cx("scroll-mt-24", className)}>
      <MetaBar code={education.code} tag="Education & Honors" />
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
          <GraduationCap className="size-5" aria-hidden />
        </span>
        <div>
          <h2 className="text-xl font-bold text-ink">{education.school}</h2>
          <p className="text-sm text-ink-3">{education.location}</p>
        </div>
      </div>

      <ol className="mt-6 space-y-4 border-l border-line pl-5">
        {education.degrees.map((d) => {
          const inProgress = d.status === "in-progress";
          return (
            <li key={d.degree} className="relative">
              <span
                aria-hidden
                className={cx(
                  "absolute -left-[25px] top-1.5 size-2.5 rounded-full",
                  inProgress ? "border-2 border-accent bg-surface" : "bg-green",
                )}
              />
              <p className="font-semibold leading-snug text-ink">{d.degree}</p>
              <p className="text-sm text-ink-2">{d.detail}</p>
              <p
                className={cx(
                  "mt-1 font-mono text-[11px] uppercase tracking-wider",
                  inProgress ? "font-medium text-accent-ink" : "text-ink-3",
                )}
              >
                {d.date}
              </p>
            </li>
          );
        })}
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
        <ul className="grid gap-1 text-sm text-ink-2 sm:grid-cols-2">
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
  );
}
