import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 font-mono text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {site.copyrightYear} {site.name} · Built in Chicago with Next.js, TypeScript &amp;
          Tailwind CSS.
        </p>
        <p className="flex gap-4">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}
