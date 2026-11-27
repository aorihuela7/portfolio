import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export { cx };

type BentoCardProps<T extends ElementType> = {
  as?: T;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/** The modular tile: crisp 1px border, generous padding, tactile hover. */
export function BentoCard<T extends ElementType = "article">({
  as,
  interactive = false,
  className,
  children,
  ...rest
}: BentoCardProps<T>) {
  const Tag = (as ?? "article") as ElementType;
  return (
    <Tag
      className={cx(
        "relative flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7",
        interactive &&
          "group transition duration-200 ease-out hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_12px_32px_-18px_rgb(0_0_0/0.25)] focus-within:border-line-strong",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Top metadata bar: index code left, category/year right. */
export function MetaBar({
  code,
  tag,
  className,
}: {
  code: string;
  tag?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "mb-5 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3",
        className,
      )}
    >
      <span className="flex items-center gap-2">
        <span aria-hidden className="size-1.5 rounded-[2px] bg-accent" />
        {code}
      </span>
      {tag ? <span className="truncate text-right">{tag}</span> : null}
    </div>
  );
}

/** Small technical pill used for stack tags and metrics. */
export function Tag({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "green" | "blue";
  className?: string;
}) {
  const tones = {
    neutral: "border-line bg-canvas text-ink-2",
    accent: "border-accent-line bg-accent-soft text-accent-ink",
    green: "border-green/30 bg-green-soft text-green-ink",
    blue: "border-blue/30 bg-blue-soft text-blue-ink",
  } as const;
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium leading-none tracking-tight",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Section heading with a mono index, e.g. "02 / Projects". */
export function SectionHeader({
  index,
  label,
  title,
  description,
  action,
  id,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
  /** Optional link/button shown under the description. */
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:mb-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
          <span className="text-accent-ink">{index}</span> / {label}
        </p>
        <h2 id={id} className="text-3xl font-extrabold text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {description || action ? (
        <div className="flex max-w-md flex-col gap-3 md:items-end">
          {description ? (
            <p className="text-sm leading-relaxed text-ink-2 md:text-right">{description}</p>
          ) : null}
          {action}
        </div>
      ) : null}
    </div>
  );
}

/** Green availability dot with a soft ping. */
export function StatusDot({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cx("relative inline-flex size-2", className)}>
      <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-green" />
      <span className="relative inline-flex size-2 rounded-full bg-green" />
    </span>
  );
}
