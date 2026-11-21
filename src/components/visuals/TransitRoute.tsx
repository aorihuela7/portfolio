import { cx } from "@/components/ui/Bento";

const stops = [
  { code: "LIM", system: "Metropolitano", city: "Lima", color: "var(--accent)" },
  { code: "BOG", system: "TransMilenio", city: "Bogotá", color: "#dc2626" },
  { code: "SCL", system: "Metro de Santiago", city: "Santiago", color: "var(--blue)" },
];

/** Transit route schematic connecting LIM → BOG → SCL. */
export function TransitRoute({
  size = "sm",
  className,
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const lg = size === "lg";
  return (
    <figure
      className={cx("w-full", className)}
      aria-label="Systems studied: Metropolitano in Lima, TransMilenio in Bogotá, and Metro de Santiago"
    >
      <ol className="relative grid grid-cols-3">
        {/* track */}
        <span
          aria-hidden
          className={cx(
            "absolute left-[16.66%] right-[16.66%] border-t-2 border-dashed border-line-strong",
            lg ? "top-[13px]" : "top-[9px]",
          )}
        />
        {stops.map((s) => (
          <li key={s.code} className="relative flex flex-col items-center text-center">
            <span
              aria-hidden
              className={cx(
                "relative z-10 flex items-center justify-center rounded-full border-2 bg-surface",
                lg ? "size-7" : "size-5",
              )}
              style={{ borderColor: s.color }}
            >
              <span
                className={cx("rounded-full", lg ? "size-2.5" : "size-1.5")}
                style={{ background: s.color }}
              />
            </span>
            <span
              className={cx(
                "mt-2 font-mono font-medium tracking-wider text-ink",
                lg ? "text-base" : "text-xs",
              )}
            >
              {s.code}
            </span>
            <span className={cx("text-ink-2", lg ? "text-sm" : "text-[11px] leading-tight")}>
              {s.system}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
