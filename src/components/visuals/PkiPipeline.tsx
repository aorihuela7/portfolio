import { Check, FileText, KeyRound, Clock3, ShieldCheck } from "lucide-react";
import { cx } from "@/components/ui/Bento";

const steps = [
  { icon: KeyRound, label: "Windows Keystore", meta: "MSCAPI · X.509" },
  { icon: FileText, label: "PDF Sign", meta: "PDFBox · Bouncy Castle" },
  { icon: Clock3, label: "Timestamp", meta: "RFC 3161 TSA" },
  { icon: ShieldCheck, label: "CRL / OCSP", meta: "Revocation check" },
];

/** PKI verification pipeline: Keystore → PDF Sign → Timestamp → CRL/OCSP → Verified. */
export function PkiPipeline({ className }: { className?: string }) {
  return (
    <div
      className={cx("@container dot-grid h-full w-full bg-surface-2", className)}
      role="img"
      aria-label="Signing pipeline: Windows Keystore, then PDF signing, then RFC 3161 timestamp, then CRL and OCSP revocation check, resulting in a verified signature"
    >
      <div className="flex h-full flex-col justify-center gap-3 p-4 @xl:gap-4 @xl:p-6">
        <div className="hidden items-center justify-between @sm:flex">
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
            sign_and_verify.pdf
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green/30 bg-green-soft px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-green-ink">
            <ShieldCheck className="size-3" aria-hidden /> Verified
          </span>
        </div>
        <ol className="grid grid-cols-2 gap-2 @xl:grid-cols-4 @xl:gap-3">
          {steps.map(({ icon: Icon, label, meta }, i) => (
            <li
              key={label}
              className="flex flex-col gap-2 rounded-xl border border-line bg-surface p-2.5 @xl:p-3.5"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-7 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="font-mono text-[10px] text-ink-3">0{i + 1}</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold leading-tight text-ink">{label}</p>
                <p className="mt-0.5 hidden font-mono text-[10px] leading-tight text-ink-3 @sm:block">{meta}</p>
              </div>
              <span className="hidden items-center gap-1 font-mono text-[10px] text-green-ink @xl:flex">
                <Check className="size-3" aria-hidden /> pass
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
