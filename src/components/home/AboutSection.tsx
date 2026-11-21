import Image from "next/image";
import { about } from "@/data/portfolio";
import { BentoCard, MetaBar, SectionHeader } from "@/components/ui/Bento";
import { RichText } from "@/components/ui/RichText";
import { Visual } from "@/components/visuals/Visual";

export function AboutSection() {
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
          {about.interests.map((item) => (
            <li key={item.code}>
              <BentoCard className="h-full p-4 sm:p-5">
                <div className="relative h-40 overflow-hidden rounded-2xl border border-line bg-canvas">
                  {"image" in item && item.image ? (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: item.image.position ?? "center" }}
                    />
                  ) : "visual" in item && item.visual ? (
                    <Visual name={item.visual} className="h-full w-full" />
                  ) : null}
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  {item.code}
                </p>
                <h3 className="mt-1 font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{item.body}</p>
              </BentoCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
