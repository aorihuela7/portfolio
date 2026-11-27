import Image from "next/image";
import type { CaseStudy } from "@/data/types";
import { cx } from "@/components/ui/Bento";
import { VideoPreview } from "@/components/media/VideoPreview";
import { Visual } from "@/components/visuals/Visual";

/**
 * Framed media for Home cards. Priority: video → cover photo → bespoke visual.
 */
export function CardMedia({
  entry,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  entry: Pick<CaseStudy, "video" | "cover" | "visual" | "title">;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-2xl border border-line bg-canvas",
        className,
      )}
    >
      {entry.video ? (
        <VideoPreview video={entry.video} />
      ) : entry.cover ? (
        <Image
          src={entry.cover.src}
          alt={entry.cover.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cx(
            entry.cover.fit === "contain" ? "object-contain p-3" : "object-cover",
            "transition duration-700 ease-out group-hover:scale-[1.03]",
          )}
          style={{ objectPosition: entry.cover.position ?? "center" }}
        />
      ) : entry.visual ? (
        <Visual name={entry.visual} className="h-full w-full" />
      ) : null}
    </div>
  );
}
