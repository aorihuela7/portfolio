import type { MetadataRoute } from "next";
import { sections } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const entries = (Object.keys(sections) as (keyof typeof sections)[]).flatMap((section) =>
    sections[section].items.map((item) => ({
      url: new URL(`/${section}/${item.slug}`, base).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );
  return [
    { url: base.toString(), changeFrequency: "monthly", priority: 1 },
    ...entries,
  ];
}
