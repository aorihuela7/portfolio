import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Block, Media } from "@/data/types";
import { Tag, cx } from "@/components/ui/Bento";
import { RichText } from "@/components/ui/RichText";
import { Gallery } from "@/components/media/Gallery";
import { VideoFrame } from "@/components/media/VideoFrame";
import { Visual } from "@/components/visuals/Visual";

function Heading({ eyebrow, heading, index }: { eyebrow?: string; heading: string; index: number }) {
  return (
    <header className="mb-5">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
        <span className="text-accent-ink">{String(index).padStart(2, "0")}</span>
        {eyebrow ? ` / ${eyebrow}` : null}
      </p>
      <h2 className="text-2xl font-extrabold leading-tight text-ink sm:text-3xl">{heading}</h2>
    </header>
  );
}

function Intro({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="mb-6 max-w-3xl text-[15px] leading-relaxed text-ink-2">
      <RichText text={text} />
    </p>
  );
}

function Figure({ media, label }: { media: Media; label: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="relative aspect-[4/3] bg-canvas">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-contain p-2"
        />
        <span className="absolute left-2.5 top-2.5 rounded-full border border-line bg-surface/90 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-ink-2 backdrop-blur">
          {label}
        </span>
      </div>
      {media.caption ? (
        <figcaption className="border-t border-line px-3 py-2 text-xs text-ink-2">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function BlockRenderer({ block, index }: { block: Block; index: number }) {
  switch (block.type) {
    case "text":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <div className="max-w-3xl space-y-4 text-[1.0625rem] leading-relaxed text-ink-2">
            {block.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </section>
      );

    case "question":
      return (
        <section className="rounded-3xl border border-accent-line bg-accent-soft p-6 sm:p-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">
            <span>{String(index).padStart(2, "0")}</span>
            {block.eyebrow ? ` / ${block.eyebrow}` : null}
          </p>
          <h2 className="sr-only">{block.heading}</h2>
          <blockquote className="text-xl font-semibold italic leading-snug text-ink sm:text-2xl">
            “{block.text}”
          </blockquote>
        </section>
      );

    case "list":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <ol className="grid gap-3">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-line bg-surface p-4 sm:p-5"
              >
                <span
                  aria-hidden
                  className={cx(
                    "flex size-7 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-medium",
                    block.ordered ? "bg-ink text-canvas" : "bg-accent-soft text-accent-ink",
                  )}
                >
                  {block.ordered ? i + 1 : "→"}
                </span>
                <div className="min-w-0">
                  {item.title ? <h3 className="font-bold text-ink">{item.title}</h3> : null}
                  <p className={cx("text-[15px] leading-relaxed text-ink-2", item.title && "mt-1")}>
                    <RichText text={item.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "cards":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <ul
            className={cx(
              "grid gap-3 sm:grid-cols-2",
              (block.columns ?? 3) === 3 && "lg:grid-cols-3",
            )}
          >
            {block.items.map((item, i) => (
              <li key={i} className="flex flex-col rounded-2xl border border-line bg-surface p-5">
                {item.kicker ? (
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent-ink">
                    {item.kicker}
                  </p>
                ) : null}
                <h3 className="mt-2 text-lg font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  <RichText text={item.body} />
                </p>
              </li>
            ))}
          </ul>
        </section>
      );

    case "stats":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {block.items.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-surface p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-mono text-3xl font-medium tracking-tight text-ink">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-sm leading-snug text-ink-2">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          {block.note ? <p className="mt-3 text-xs text-ink-3">{block.note}</p> : null}
        </section>
      );

    case "table":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <div className="overflow-x-auto rounded-2xl border border-line bg-surface">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-canvas">
                  {block.columns.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className="px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-ink-3"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="border-b border-line last:border-0">
                    {row.map((cell, c) =>
                      c === 0 ? (
                        <th key={c} scope="row" className="px-4 py-4 align-top font-normal text-ink">
                          <RichText text={cell} />
                        </th>
                      ) : (
                        <td key={c} className="px-4 py-4 align-top leading-relaxed text-ink-2">
                          <RichText text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );

    case "iterations":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <ol className="grid gap-4">
            {block.items.map((item) => (
              <li
                key={item.title}
                className="grid gap-5 rounded-3xl border border-line bg-surface p-5 sm:p-6 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent-ink">
                    {item.kicker}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    <RichText text={item.body} />
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
                  {item.before ? <Figure media={item.before} label="Before" /> : null}
                  {item.after ? <Figure media={item.after} label="After" /> : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "visual":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <figure>
            {block.visual === "pki" ? (
              <div className="h-auto overflow-hidden rounded-2xl border border-line">
                <Visual name="pki" />
              </div>
            ) : (
              <Visual name={block.visual} />
            )}
            {block.caption ? (
              <figcaption className="mt-3 font-mono text-[11px] text-ink-3">{block.caption}</figcaption>
            ) : null}
          </figure>
        </section>
      );

    case "pills":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <div className="grid gap-5 sm:grid-cols-2">
            {block.groups.map((g) => (
              <div key={g.label}>
                <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                  {g.label}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <li key={i}>
                      <Tag>{i}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );

    case "principle":
      return (
        <section className="rounded-3xl bg-ink p-7 text-canvas sm:p-10">
          {block.eyebrow ? (
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
              {block.eyebrow}
            </p>
          ) : null}
          <p className="text-xl font-semibold leading-snug sm:text-2xl">{block.text}</p>
        </section>
      );

    case "timeline":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <ol className="relative grid gap-4 before:absolute before:bottom-6 before:left-[13px] before:top-6 before:w-px before:bg-line sm:gap-5">
            {block.items.map((item, i) => (
              <li key={i} className="relative grid grid-cols-[28px_1fr] gap-3 sm:gap-5">
                <span
                  aria-hidden
                  className="relative z-10 mt-5 flex size-7 items-center justify-center rounded-full border border-accent-line bg-surface"
                >
                  <span className="size-2 rounded-full bg-accent" />
                </span>
                <div
                  className={cx(
                    "grid gap-4 rounded-2xl border border-line bg-surface p-4 sm:p-5",
                    item.media &&
                      (item.media.fit === "contain"
                        ? "lg:grid-cols-[1fr_minmax(0,56%)] lg:items-start"
                        : "md:grid-cols-[1fr_minmax(0,40%)] md:items-start"),
                  )}
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent-ink">
                      {item.kicker}
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold leading-snug text-ink">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                      <RichText text={item.body} />
                    </p>
                  </div>
                  {item.media ? (
                    <figure className="overflow-hidden rounded-xl border border-line bg-canvas">
                      <div className={cx("relative", item.media.fit === "contain" ? "aspect-[10/7]" : "aspect-[4/3]")}>
                        <Image
                          src={item.media.src}
                          alt={item.media.alt}
                          fill
                          sizes={
                            item.media.fit === "contain"
                              ? "(min-width: 1024px) 560px, 90vw"
                              : "(min-width: 1024px) 380px, (min-width: 768px) 40vw, 90vw"
                          }
                          className={item.media.fit === "contain" ? "object-contain p-1.5" : "object-cover"}
                          style={{ objectPosition: item.media.position ?? "center" }}
                        />
                      </div>
                      {item.media.caption ? (
                        <figcaption className="border-t border-line px-3 py-2 text-xs text-ink-2">
                          {item.media.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "gallery":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <Gallery
            images={block.images}
            columns={block.columns ?? (block.images.length % 2 === 0 ? 2 : 3)}
            label={block.heading}
          />
        </section>
      );

    case "video":
      return (
        <section>
          <Heading eyebrow={block.eyebrow} heading={block.heading} index={index} />
          <Intro text={block.intro} />
          <VideoFrame video={block.video} />
        </section>
      );

    case "cta": {
      const external = !block.href.startsWith("/");
      const className =
        "inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-canvas transition hover:opacity-90";
      return (
        <section className="flex flex-col gap-5 rounded-3xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              <span className="text-accent-ink">{String(index).padStart(2, "0")}</span>
              {block.eyebrow ? ` / ${block.eyebrow}` : null}
            </p>
            <h2 className="text-xl font-extrabold leading-tight text-ink sm:text-2xl">
              {block.heading}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
              <RichText text={block.text} />
            </p>
          </div>
          {external ? (
            <a href={block.href} target="_blank" rel="noopener noreferrer" className={className}>
              {block.label} <ArrowUpRight className="size-4" aria-hidden />
            </a>
          ) : (
            <Link href={block.href} className={className}>
              {block.label} <ArrowRight className="size-4" aria-hidden />
            </Link>
          )}
        </section>
      );
    }
  }
}
