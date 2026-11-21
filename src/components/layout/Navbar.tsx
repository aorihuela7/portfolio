"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { StatusDot } from "@/components/ui/Bento";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <StatusDot />
          <span>{site.name}</span>
          <span className="sr-only">— home</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-2 transition hover:bg-surface hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-semibold text-canvas transition hover:opacity-85 sm:inline-flex"
          >
            Resume <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-canvas lg:hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4 sm:px-6">
            {nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink"
                >
                  {item.label}
                  <span className="font-mono text-[10px] text-ink-3">0{i + 1}</span>
                </Link>
              </li>
            ))}
            <li className="col-span-2">
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-canvas"
              >
                Resume (PDF) <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
