"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Media } from "@/data/types";
import { cx } from "@/components/ui/Bento";

/**
 * Responsive photo grid + keyboard-accessible lightbox.
 * Uses the native <dialog> element for focus trapping, Escape-to-close,
 * and an inert background; ArrowLeft / ArrowRight navigate.
 */
export function Gallery({
  images,
  columns = 3,
  label = "Gallery",
}: {
  images: Media[];
  columns?: 2 | 3;
  label?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <ul
        className={cx(
          "grid grid-cols-1 gap-3 sm:grid-cols-2",
          columns === 3 && "lg:grid-cols-3",
        )}
        aria-label={label}
      >
        {images.map((img, i) => (
          <li key={img.src}>
            <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-canvas focus-visible:outline-offset-[-3px]"
                aria-label={`Open image ${i + 1} of ${images.length}: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: img.position ?? "center" }}
                />
                <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 group-focus-within:opacity-100">
                  <Maximize2 className="size-3.5" aria-hidden />
                </span>
              </button>
              {img.caption ? (
                <figcaption className="flex gap-2 px-4 py-3 text-[13px] leading-snug text-ink-2">
                  <span className="font-mono text-[11px] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{img.caption}</span>
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>
      {index !== null ? (
        <Lightbox
          images={images}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setIndex(null)}
        />
      ) : null}
    </>
  );
}

export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: Media[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const img = images[index];
  const count = images.length;

  const go = useCallback(
    (delta: number) => onIndexChange((index + delta + count) % count),
    [index, count, onIndexChange],
  );

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    if (!dialog.open) dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      aria-label={`Image viewer: ${img.alt}`}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-white"
    >
      <div
        className="flex h-full flex-col"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <span className="font-mono text-xs tracking-wider text-white/70">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div
          className="relative min-h-0 flex-1 px-4 sm:px-20"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="relative h-full w-full">
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              quality={85}
              className="object-contain"
              priority
            />
          </div>
          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur transition hover:bg-white/20 sm:left-5"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur transition hover:bg-white/20 sm:right-5"
                aria-label="Next image"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </>
          ) : null}
        </div>

        <p className="mx-auto max-w-3xl px-6 pb-6 pt-4 text-center text-sm leading-relaxed text-white/85">
          {img.caption ?? img.alt}
        </p>
      </div>
    </dialog>
  );
}
