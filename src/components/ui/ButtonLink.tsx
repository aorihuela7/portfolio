import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "./Bento";

export const buttonStyles = {
  base: "inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition",
  // #C2410C on white passes WCAG AA; dark mode uses light orange + dark text.
  primary:
    "border-transparent bg-accent-ink text-white hover:bg-[#9a3412] dark:text-[#09090b] dark:hover:bg-accent-hover",
  secondary: "border-line bg-surface text-ink hover:border-line-strong",
  ghost: "border-transparent px-3 text-ink-2 hover:text-ink",
  inverted:
    "border-white/15 bg-white/5 text-canvas hover:border-white/40 dark:border-black/15 dark:bg-black/5 dark:hover:border-black/40",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
  className,
  ...aria
}: {
  href: string;
  children: ReactNode;
  variant?: Exclude<keyof typeof buttonStyles, "base">;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
}) {
  const classes = cx(buttonStyles.base, buttonStyles[variant], className);
  if (external || href.startsWith("mailto:") || href.endsWith(".pdf")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external || href.endsWith(".pdf")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...aria}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...aria}>
      {children}
    </Link>
  );
}
