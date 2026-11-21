import type { Video } from "@/data/types";

/** Hardware-style frame with full native controls for case-study pages. */
export function VideoFrame({ video }: { video: Video }) {
  return (
    <figure className="rounded-3xl border border-line bg-surface p-2 sm:p-3">
      <div className="flex items-center justify-between px-2 pb-2 pt-1 sm:px-3">
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-accent" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
          Demo · {video.label}
          {video.duration ? ` · ${video.duration}` : ""}
        </span>
      </div>
      <video
        src={video.src}
        poster={video.poster}
        controls
        playsInline
        preload="metadata"
        className="aspect-[3/2] w-full rounded-2xl border border-line bg-black object-contain"
      >
        Your browser does not support embedded video.
      </video>
      <figcaption className="sr-only">{video.label}</figcaption>
    </figure>
  );
}
