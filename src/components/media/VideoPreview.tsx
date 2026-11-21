"use client";

import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Video } from "@/data/types";

/**
 * Home-card video preview: poster first, gentle hover/focus-to-play, muted.
 * Listens on the parent card (the stretched title link covers the media).
 */
export function VideoPreview({ video }: { video: Video }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const card = wrapper.current?.closest("article") ?? wrapper.current;
    const v = ref.current;
    if (!card || !v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const play = () => {
      if (!reduce.matches) v.play().catch(() => {});
    };
    const pause = () => v.pause();
    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", pause);
    card.addEventListener("focusin", play);
    card.addEventListener("focusout", pause);
    return () => {
      card.removeEventListener("mouseenter", play);
      card.removeEventListener("mouseleave", pause);
      card.removeEventListener("focusin", play);
      card.removeEventListener("focusout", pause);
    };
  }, []);

  return (
    <div ref={wrapper} className="relative h-full w-full">
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
        className="h-full w-full object-cover object-top"
      />
      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
        <Play className="size-3 fill-current" aria-hidden /> Demo Video
        {video.duration ? <span className="text-white/60">· {video.duration}</span> : null}
      </span>
    </div>
  );
}
