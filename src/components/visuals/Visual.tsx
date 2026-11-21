import type { VisualKey } from "@/data/types";
import { ChicagoGrid } from "./ChicagoGrid";
import { HydrationStates } from "./HydrationStates";
import { FlightArc, RunningSplits } from "./Mini";
import { NewsletterPipeline } from "./NewsletterPipeline";
import { PkiPipeline } from "./PkiPipeline";
import { TerminalCard } from "./TerminalCard";
import { TransitRoute } from "./TransitRoute";

/** Maps a VisualKey from the data layer to its bespoke component. */
export function Visual({ name, className }: { name: VisualKey; className?: string }) {
  switch (name) {
    case "chicago":
      return <ChicagoGrid className={className} />;
    case "transit":
      return (
        <div className={`flex h-full items-center bg-surface-2 p-6 ${className ?? ""}`}>
          <TransitRoute size="lg" />
        </div>
      );
    case "pki":
      return <PkiPipeline className={className} />;
    case "hydration":
      return <HydrationStates />;
    case "terminal":
      return <TerminalCard />;
    case "newsletter":
      return <NewsletterPipeline />;
    case "running":
      return <RunningSplits className={className} />;
    case "aviation":
      return <FlightArc className={className} />;
  }
}
