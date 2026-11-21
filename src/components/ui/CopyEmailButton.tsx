"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cx } from "./Bento";
import { buttonStyles } from "./ButtonLink";

/** Copies the email to the clipboard with an accessible toast confirmation. */
export function CopyEmailButton({
  email,
  variant = "secondary",
  className,
}: {
  email: string;
  variant?: "primary" | "secondary" | "inverted";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for browsers without async clipboard permission.
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  }


  return (
    <>
      <button
        type="button"
        onClick={copy}
        className={cx(buttonStyles.base, buttonStyles[variant], className)}
        aria-label={`Copy email address ${email}`}
      >
        {copied ? (
          <Check className="size-4" aria-hidden />
        ) : (
          <Copy className="size-4" aria-hidden />
        )}
        {copied ? "Copied!" : "Copy Email"}
      </button>
      <div aria-live="polite" role="status" className="sr-only">
        {copied ? `Email address ${email} copied to clipboard` : ""}
      </div>
      {copied ? (
        <div
          aria-hidden
          className="animate-toast-in fixed bottom-6 left-1/2 z-[60] flex items-center gap-2 rounded-full border border-line bg-ink px-4 py-2.5 text-sm font-medium text-canvas shadow-lg"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-green text-white dark:text-[#09090b]">
            <Check className="size-3.5" />
          </span>
          {email} copied
        </div>
      ) : null}
    </>
  );
}
