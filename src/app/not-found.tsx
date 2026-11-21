import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
        <span className="text-accent-ink">ERR.404</span> / Not found
      </p>
      <h1 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-4 max-w-xl text-ink-2">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <ButtonLink href="/" variant="primary" className="mt-8">
        <ArrowLeft className="size-4" aria-hidden /> Back home
      </ButtonLink>
    </section>
  );
}
