import { cx } from "@/components/ui/Bento";

/**
 * Minimalist Chicago street grid with the lakefront, river, and a pulsing
 * pin at Hyde Park. Built from CSS + a stretchable SVG so it fills any tile
 * shape (tall on desktop, wide on mobile) without letterboxing.
 */
export function ChicagoGrid({ className }: { className?: string }) {
  return (
    <div
      className={cx("absolute inset-0 overflow-hidden bg-surface-2", className)}
      role="img"
      aria-label="Stylized map of Chicago's street grid and lakefront with a pin on Hyde Park"
    >
      {/* street grid */}
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:18px_18px]"
      />
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {/* arterials */}
        <g stroke="var(--line-strong)" strokeWidth="1.5" opacity="0.6" vectorEffect="non-scaling-stroke">
          <line x1="30" y1="0" x2="30" y2="100" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="34" x2="80" y2="34" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="74" x2="86" y2="74" vectorEffect="non-scaling-stroke" />
          <line x1="12" y1="0" x2="52" y2="34" vectorEffect="non-scaling-stroke" />
        </g>
        {/* Chicago River: main stem + north & south branches */}
        <path
          d="M80 30 L62 30 C58 30 56 27 54 24 L46 0 M62 30 C57 32 55 37 51 44 L40 62 L18 80"
          fill="none"
          stroke="var(--blue)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
          vectorEffect="non-scaling-stroke"
        />
        {/* Lake Michigan */}
        <path
          d="M82 0 C79 14 84 24 81 34 C78 46 86 58 84 70 C82 82 90 92 88 100 L100 100 L100 0 Z"
          fill="var(--blue-soft)"
          stroke="var(--blue)"
          strokeOpacity="0.45"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span
        aria-hidden
        className="absolute right-[4%] top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9px] tracking-[0.2em] text-blue-ink opacity-80 [writing-mode:vertical-rl]"
      >
        LAKE MICHIGAN
      </span>
      {/* pin @ Hyde Park */}
      <span aria-hidden className="absolute bottom-[18%] right-[24%] flex size-3 items-center justify-center">
        <span className="animate-ping-soft absolute size-3 rounded-full bg-accent" />
        <span className="relative size-3 rounded-full border-2 border-surface bg-accent" />
      </span>
      <span
        aria-hidden
        className="absolute bottom-[18%] right-[24%] translate-x-1/2 translate-y-[150%] whitespace-nowrap rounded-full border border-line bg-surface px-1.5 py-0.5 font-mono text-[9px] text-ink-2"
      >
        Hyde Park
      </span>
      <span
        aria-hidden
        className="absolute bottom-2 left-2.5 font-mono text-[9px] tracking-wide text-ink-3"
      >
        41.79°N 87.60°W
      </span>
    </div>
  );
}
