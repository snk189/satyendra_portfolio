import { ArrowDown, ArrowRight } from "lucide-react";
import type { ArchitectureStage } from "../data/projects";

interface ArchitectureDiagramProps {
  stages: ArchitectureStage[];
  title?: string;
}

export function ArchitectureDiagram({ stages, title }: ArchitectureDiagramProps) {
  return (
    <div>
      {title && <p className="mono-label text-[11px] text-ink-faint mb-3">{title}</p>}
      <div className="flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-y-1 gap-x-1 rounded-sm border border-line bg-bg-panel/50 p-4">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex flex-col md:flex-row items-center">
            <div className="corner-frame rounded-sm border border-line bg-bg-raised px-3.5 py-2.5 text-center md:text-left min-w-[140px]">
              <p className="text-xs sm:text-sm font-medium text-ink">{stage.label}</p>
              {stage.detail && (
                <p className="mono-label text-[10px] text-ink-faint mt-0.5">{stage.detail}</p>
              )}
            </div>
            {i < stages.length - 1 && (
              <div className="flex items-center justify-center text-ink-faint py-1 md:py-0 md:px-1.5">
                <ArrowDown size={14} className="md:hidden" />
                <ArrowRight size={14} className="hidden md:block" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
