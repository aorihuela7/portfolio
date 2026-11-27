/**
 * Content model for the portfolio. All copy lives in `portfolio.ts`;
 * these types keep it consistent and make adding new entries safe.
 *
 * Inline formatting in any string: **bold** and *italic*.
 */

export type ProjectCategory =
  | "Systems & Backend"
  | "HCI & Inclusive Design"
  | "Physical Computing & IoT"
  | "Full-Stack & Data";

export type Media = {
  /** Path inside /public, e.g. "/assets/projects/foo/bar.jpg" */
  src: string;
  alt: string;
  /** Shown under the thumbnail and inside the lightbox. */
  caption?: string;
  /** CSS object-position for cropped previews, e.g. "center top". */
  position?: string;
  /** "contain" shows the whole image (UI screenshots) instead of cropping it. */
  fit?: "cover" | "contain";
};

export type Video = {
  src: string;
  poster: string;
  /** Short label for the frame, e.g. "Final prototype walkthrough". */
  label: string;
  duration?: string;
  /** Prefix in the frame header and Home badge. Defaults to "Demo". */
  tag?: string;
  /** CSS aspect ratio of the player. Defaults to "3 / 2". */
  aspect?: string;
};

/** Bespoke SVG visuals used when a tile has no photo (or as diagrams). */
export type VisualKey =
  | "transit"
  | "pki"
  | "hydration"
  | "terminal"
  | "newsletter"
  | "running";

export type Fact = { label: string; value: string };

export type ExternalLink = {
  label: string;
  href: string;
  kind: "live" | "repo" | "official" | "doc" | "instagram";
};

export type Block =
  | {
      type: "text";
      eyebrow?: string;
      heading: string;
      paragraphs: string[];
    }
  | {
      type: "question";
      eyebrow?: string;
      heading: string;
      text: string;
    }
  | {
      type: "list";
      eyebrow?: string;
      heading: string;
      intro?: string;
      ordered?: boolean;
      items: { title?: string; body: string }[];
    }
  | {
      type: "cards";
      eyebrow?: string;
      heading: string;
      intro?: string;
      columns?: 2 | 3;
      items: { kicker?: string; title: string; body: string }[];
    }
  | {
      type: "stats";
      eyebrow?: string;
      heading: string;
      intro?: string;
      items: { value: string; label: string }[];
      note?: string;
    }
  | {
      type: "table";
      eyebrow?: string;
      heading: string;
      intro?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: "iterations";
      eyebrow?: string;
      heading: string;
      intro?: string;
      items: {
        kicker: string;
        title: string;
        body: string;
        before?: Media;
        after?: Media;
      }[];
    }
  | {
      type: "visual";
      eyebrow?: string;
      heading: string;
      intro?: string;
      visual: VisualKey;
      caption?: string;
    }
  | {
      type: "pills";
      eyebrow?: string;
      heading: string;
      intro?: string;
      groups: { label: string; items: string[] }[];
    }
  | {
      type: "principle";
      eyebrow?: string;
      text: string;
    }
  | {
      /** Vertical timeline; each stop can carry one photo. */
      type: "timeline";
      eyebrow?: string;
      heading: string;
      intro?: string;
      items: { kicker: string; title: string; body: string; media?: Media }[];
    }
  | {
      /** An in-page photo grid with lightbox (in addition to the page gallery). */
      type: "gallery";
      eyebrow?: string;
      heading: string;
      intro?: string;
      columns?: 2 | 3;
      images: Media[];
    }
  | {
      type: "video";
      eyebrow?: string;
      heading: string;
      intro?: string;
      video: Video;
    }
  | {
      /** A highlighted link to another page on the site or an external page. */
      type: "cta";
      eyebrow?: string;
      heading: string;
      text: string;
      href: string;
      label: string;
    };

export type CaseStudy = {
  slug: string;
  /** Modular tile index, e.g. "PRJ.01" */
  code: string;
  title: string;
  /** Optional shorter title for compact UI (next/prev links, breadcrumbs). */
  shortTitle?: string;
  /** Secondary title line, e.g. a Spanish subtitle. */
  subtitle?: string;
  /** Small badge above the title. */
  eyebrow?: string;
  /** Right side of the tile metadata bar, e.g. "2025" or "2021 – Present". */
  period: string;
  categories?: ProjectCategory[];
  /** Up to 4 are shown on Home cards; all on the detail page. */
  tags: string[];
  /** Concise Home-card copy (2–3 lines). */
  summary: string;
  /** Longer intro for the detail page header. Falls back to `summary`. */
  intro?: string;
  metrics?: string[];
  /** 3–4 short technical bullets for project cards and the /projects portfolio. */
  highlights?: string[];
  facts?: Fact[];
  stack?: string[];
  links?: ExternalLink[];
  cover?: Media;
  /** Optional alternate image for compact Home tiles (falls back to `cover`). */
  thumbnail?: Media;
  visual?: VisualKey;
  video?: Video;
  ctaLabel?: string;
  blocks: Block[];
  gallery?: Media[];
  galleryHeading?: string;
};

export type Section = "research" | "projects" | "leadership" | "beyond";
