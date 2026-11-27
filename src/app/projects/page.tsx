import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { portfolio } from "@/data/portfolio";

const description =
  "Software engineering portfolio of Alejandro Orihuela (M.S. Computer Science, UChicago): an INDECOPI-accredited PKI signing app in Java, a full-stack TypeScript/Postgres app in production, embedded C++ hardware, and data-connected accessibility prototypes.";

export const metadata: Metadata = {
  title: portfolio.title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${portfolio.title} — Alejandro Orihuela`,
    description,
    url: "/projects",
  },
};

export default function Page() {
  return <PortfolioPage />;
}
