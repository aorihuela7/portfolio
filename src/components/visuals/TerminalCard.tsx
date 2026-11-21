const lines: { kind: "cmd" | "ok" | "out" | "warn"; text: string }[] = [
  { kind: "cmd", text: "vinyl sync --discogs --spotify" },
  { kind: "ok", text: "✓ library synced · tracks cross-referenced via Spotify API" },
  { kind: "cmd", text: "vinyl status" },
  { kind: "out", text: "stylus_health:      74%   cartridge A · 412 h played" },
  { kind: "out", text: "ultrasonic_queue:   6     records awaiting wash" },
  { kind: "out", text: "archival_sleeves:   38    restock threshold < 25" },
  { kind: "cmd", text: "vinyl alerts" },
  { kind: "warn", text: "! wash batch ready — 6 records past cleaning threshold" },
];

/** Styled terminal window showing the archival maintenance CLI. */
export function TerminalCard() {
  return (
    <figure
      className="overflow-hidden rounded-2xl border border-[#27272a] bg-[#0c0c0e] text-[#e4e4e7] shadow-sm"
      aria-label="Example terminal session of the vinyl maintenance CLI showing stylus health 74 percent and an ultrasonic cleaning queue of 6 records"
    >
      <div className="flex items-center gap-2 border-b border-[#27272a] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ef4444]/80" />
        <span className="size-2.5 rounded-full bg-[#eab308]/80" />
        <span className="size-2.5 rounded-full bg-[#22c55e]/80" />
        <span className="ml-2 font-mono text-[11px] text-[#a1a1aa]">vinyl-cli — zsh</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 sm:p-5 sm:text-[13px]">
        {lines.map((l, i) => (
          <div key={i}>
            {l.kind === "cmd" ? (
              <>
                <span className="text-[#fb923c]">❯ </span>
                <span className="text-white">{l.text}</span>
              </>
            ) : l.kind === "ok" ? (
              <span className="text-[#4ade80]">{l.text}</span>
            ) : l.kind === "warn" ? (
              <span className="text-[#fbbf24]">{l.text}</span>
            ) : (
              <span className="text-[#a1a1aa]">{l.text}</span>
            )}
          </div>
        ))}
        <div>
          <span className="text-[#fb923c]">❯ </span>
          <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-[#e4e4e7]" />
        </div>
      </pre>
    </figure>
  );
}
