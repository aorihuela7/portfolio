/* Small decorative visuals for the "Beyond the Code" tiles. */

/** Abstract half-marathon split bars (decorative, no real data). */
export function RunningSplits({ className }: { className?: string }) {
  const bars = [62, 58, 60, 55, 57, 54, 56, 52, 55, 51, 53, 50, 52, 49, 51, 48, 50, 47, 45, 43, 40];
  return (
    <svg
      viewBox="0 0 220 120"
      className={className}
      role="img"
      aria-label="Decorative chart of half-marathon pace splits"
    >
      <rect width="220" height="120" fill="var(--surface-2)" />
      <g stroke="var(--line)" strokeWidth="1">
        {[30, 55, 80, 105].map((y) => (
          <line key={y} x1="10" x2="210" y1={y} y2={y} />
        ))}
      </g>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={14 + i * 9.4}
          y={105 - h}
          width="6"
          height={h}
          rx="1.5"
          fill={i === bars.length - 1 ? "var(--accent)" : "var(--green)"}
          opacity={0.45 + (i / bars.length) * 0.55}
        />
      ))}
      <polyline
        points={bars.map((h, i) => `${17 + i * 9.4},${100 - h}`).join(" ")}
        fill="none"
        stroke="var(--ink-2)"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <text x="12" y="20" fill="var(--ink-3)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="1">
        21.1 KM · SPLITS
      </text>
    </svg>
  );
}
