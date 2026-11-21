"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

/**
 * The inline script in <head> sets the initial theme before first paint,
 * so this button never needs theme state: icons swap via the `dark` class.
 */
export function ThemeToggle() {
  // Follow OS changes until the visitor picks a theme explicitly.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {}
      applyTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink-2 transition hover:border-line-strong hover:text-ink"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <Moon className="size-4 dark:hidden" aria-hidden />
      <Sun className="hidden size-4 dark:block" aria-hidden />
    </button>
  );
}

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}
