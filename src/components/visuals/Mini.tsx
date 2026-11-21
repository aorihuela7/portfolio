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

/** Great-circle style arc between Chicago (ORD) and Lima (LIM). */
export function FlightArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 120"
      className={className}
      role="img"
      aria-label="Decorative flight path from ORD to LIM"
    >
      <rect width="220" height="120" fill="var(--surface-2)" />
      <g stroke="var(--line)" strokeWidth="1">
        {[20, 50, 80, 110].map((y) => (
          <line key={`lat${y}`} x1="0" x2="220" y1={y} y2={y} />
        ))}
        {[30, 80, 130, 180].map((x) => (
          <line key={`lon${x}`} y1="0" y2="120" x1={x} x2={x} />
        ))}
      </g>
      <path
        d="M42 88 Q110 -6 180 70"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="1.6"
        strokeDasharray="4 4"
        className="animate-dash"
      />
      <g transform="translate(121 30) rotate(18)">
        <path
          d="M-7 0 L7 0 M0 -1 L-3 -6 M0 1 L-3 6 M-6 0 L-8 -3 M-6 0 L-8 3"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      {[
        { x: 42, y: 88, code: "ORD", anchor: "start" as const },
        { x: 180, y: 70, code: "LIM", anchor: "end" as const },
      ].map((p) => (
        <g key={p.code}>
          <circle cx={p.x} cy={p.y} r="4" fill="var(--surface)" stroke="var(--blue)" strokeWidth="2" />
          <text
            x={p.anchor === "start" ? p.x - 6 : p.x + 6}
            y={p.y + 17}
            textAnchor={p.anchor}
            fill="var(--ink)"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="500"
            letterSpacing="1"
          >
            {p.code}
          </text>
        </g>
      ))}
    </svg>
  );
}
