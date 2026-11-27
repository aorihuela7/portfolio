import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { getEntry, sections } from "@/data/portfolio";

const SECTION = "beyond" as const;

export function generateStaticParams() {
  return sections[SECTION].items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/beyond/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(SECTION, slug);
  if (!entry) return {};
  const title = entry.shortTitle ?? entry.title;
  const description = entry.summary.replace(/\*+/g, "");
  return {
    title,
    description,
    alternates: { canonical: `/${SECTION}/${slug}` },
    openGraph: {
      title: `${title} — Alejandro Orihuela`,
      description,
      url: `/${SECTION}/${slug}`,
      ...(entry.cover ? { images: [{ url: entry.cover.src, alt: entry.cover.alt }] } : {}),
    },
  };
}

export default async function Page({ params }: PageProps<"/beyond/[slug]">) {
  const { slug } = await params;
  const entry = getEntry(SECTION, slug);
  if (!entry) notFound();
  return <CaseStudyPage entry={entry} section={SECTION} siblings={sections[SECTION].items} />;
}
