"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

/** Live local time for a given IANA time zone (renders "--:--" on the server). */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone,
      }).format(new Date()),
    () => "--:--",
  );
  const [hh, mm] = time.split(":");
  return (
    <time className="font-mono tabular-nums" suppressHydrationWarning>
      {hh}
      <span className="animate-blink">:</span>
      {mm}
    </time>
  );
}
