"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { cx } from "@/components/ui/Bento";

type Item = {
  slug: string;
  categories: string[];
  span: string;
  card: ReactNode;
};

/** Instant client-side category filter over server-rendered project cards. */
export function ProjectGrid({
  items,
  categories,
}: {
  items: Item[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? items : items.filter((i) => i.categories.includes(active));

  return (
    <MotionConfig reducedMotion="user">
      <div
        role="group"
        aria-label="Filter projects by category"
        className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {categories.map((cat) => {
          const count =
            cat === "All" ? items.length : items.filter((i) => i.categories.includes(cat)).length;
          const pressed = active === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(cat)}
              className={cx(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition",
                pressed
                  ? "border-ink bg-ink text-canvas"
                  : "border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink",
              )}
            >
              {cat}
              <span
                className={cx(
                  "font-mono text-[10px]",
                  pressed ? "text-canvas/70" : "text-ink-3",
                )}
              >
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active === "All" ? "" : ` in ${active}`}
      </p>

      <motion.ul layout className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item) => (
            <motion.li
              key={item.slug}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={cx(active === "All" ? item.span : "lg:col-span-6")}
            >
              {item.card}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </MotionConfig>
  );
}
