import { ArrowRight, Database, Mail, Send, Terminal } from "lucide-react";

const nodes = [
  { icon: Database, label: "Contacts DB", meta: "cleaned & deduped" },
  { icon: Terminal, label: "Python", meta: "weekly job" },
  { icon: Send, label: "Mailchimp API", meta: "campaign build" },
  { icon: Mail, label: "1,800+ inboxes", meta: "EN · ES · PT" },
];

/** Newsletter automation pipeline used on the CLACS experience tile. */
export function NewsletterPipeline() {
  return (
    <div
      className="@container dot-grid rounded-2xl border border-line bg-surface-2 p-4"
      role="img"
      aria-label="Newsletter pipeline: contacts database, Python job, Mailchimp API, delivered weekly to over 1,800 subscribers"
    >
      <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-ink-3">
        newsletter_pipeline · runs weekly
      </p>
      <ol className="flex flex-col gap-1.5 @md:flex-row @md:items-center">
        {nodes.map(({ icon: Icon, label, meta }, i) => (
          <li key={label} className="contents">
            <div className="flex flex-1 items-center gap-2.5 rounded-xl border border-line bg-surface px-3 py-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-blue-ink">
                <Icon className="size-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-semibold text-ink">{label}</span>
                <span className="block truncate font-mono text-[10px] text-ink-3">{meta}</span>
              </span>
            </div>
            {i < nodes.length - 1 ? (
              <ArrowRight
                className="mx-auto size-3.5 shrink-0 rotate-90 text-ink-3 @md:rotate-0"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
