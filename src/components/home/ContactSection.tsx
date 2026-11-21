import { ArrowUpRight, Mail } from "lucide-react";
import { contact, site } from "@/data/portfolio";
import { StatusDot } from "@/components/ui/Bento";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { RichText } from "@/components/ui/RichText";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-canvas sm:p-10 lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:18px_18px]"
        />
        <div className="relative">
          <div className="mb-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] opacity-70">
            <span>07 / Contact</span>
            <span className="flex items-center gap-2">
              <StatusDot /> Available · Summer 2027
            </span>
          </div>
          <h2
            id="contact-title"
            className="max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg [&_strong]:text-canvas">
            <RichText text={contact.body} />
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CopyEmailButton email={site.email} variant="primary" />
            <ButtonLink href={`mailto:${site.email}`} variant="inverted">
              <Mail className="size-4" aria-hidden /> Send Email
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-current/15 pt-6 font-mono text-xs font-medium uppercase tracking-wider">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 opacity-80 transition hover:opacity-100"
              >
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 opacity-80 transition hover:opacity-100"
              >
                <GitHubIcon className="size-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 opacity-80 transition hover:opacity-100"
              >
                Download Resume (PDF) <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
