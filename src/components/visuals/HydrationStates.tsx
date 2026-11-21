import { ArrowRight, Hand, RotateCcw, Vibrate, Moon } from "lucide-react";

const states = [
  {
    code: "S1",
    name: "Needs to drink",
    icon: Vibrate,
    detail: "Wristband: 5 pulses / 5 s · servo taps @ 200 ms after 3rd cycle",
    tone: "var(--accent)",
  },
  {
    code: "S2",
    name: "Drinking",
    icon: Hand,
    detail: "Vibration off · taps slow 200 → 1000 ms · goal = 7 s tilt",
    tone: "var(--blue)",
  },
  {
    code: "S3",
    name: "Rest",
    icon: Moon,
    detail: "All actuators silent for 30 s, then loop",
    tone: "var(--green)",
  },
];

const transitions = ["tilt ≥ 45°", "7 s cumulative"];

/** State machine for the actuated hydration system + tap-interval gauge. */
export function HydrationStates() {
  return (
    <div
      className="dot-grid rounded-2xl border border-line bg-surface-2 p-4 sm:p-6"
      role="img"
      aria-label="State machine: Needs to drink transitions to Drinking when the glass tilts at least 45 degrees; Drinking transitions to Rest after 7 seconds of cumulative tilt; Rest returns to Needs to drink after 30 seconds."
    >
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {states.map((s, i) => (
          <div key={s.code} className="contents">
            <div className="flex-1 rounded-xl border border-line bg-surface p-4">
              <div className="mb-3 flex items-center justify-between">
                <span
                  className="flex size-8 items-center justify-center rounded-lg text-white dark:text-[#09090b]"
                  style={{ background: s.tone }}
                >
                  <s.icon className="size-4" aria-hidden />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                  {s.code}
                </span>
              </div>
              <p className="font-semibold text-ink">{s.name}</p>
              <p className="mt-1 font-mono text-[11px] leading-relaxed text-ink-2">{s.detail}</p>
            </div>
            {i < transitions.length ? (
              <div className="flex items-center justify-center gap-2 py-1 md:flex-col md:px-1">
                <ArrowRight className="size-4 rotate-90 text-ink-3 md:rotate-0" aria-hidden />
                <span className="whitespace-nowrap rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[10px] text-ink-2">
                  {transitions[i]}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[10px] text-ink-3">
        <RotateCcw className="size-3" aria-hidden /> after 30 s, return to S1
      </div>

      {/* tap-interval gauge */}
      <div className="mt-5 rounded-xl border border-line bg-surface p-4">
        <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-ink-3">
          <span>Servo tap interval</span>
          <span>drink progress →</span>
        </div>
        <div className="flex h-8 items-end gap-[3px]">
          {Array.from({ length: 28 }, (_, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-blue"
              style={{ height: `${100 - i * 2.6}%`, opacity: 1 - i * 0.025 }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[11px] text-ink-2">
          <span>200 ms</span>
          <span>1000 ms → stop</span>
        </div>
      </div>
    </div>
  );
}
