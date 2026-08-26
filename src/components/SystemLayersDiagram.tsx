import { useState } from "react";
import { motion } from "framer-motion";
import { systemLayers } from "../data/achievements";
import { cn } from "../utils/cn";

const descriptions: Record<string, string> = {
  "Computer Systems": "How hardware, operating systems, and software actually fit together.",
  Software: "Programs, logic, and architecture that turn ideas into behavior.",
  Backend: "Services, APIs, and data flow that power an application.",
  "Data / AI": "Models and pipelines that learn from and act on data.",
  Infrastructure: "The deployment layer — containers, orchestration, delivery.",
  Security: "Where all of the above can fail, and how to make it harder to.",
};

export function SystemLayersDiagram() {
  const [active, setActive] = useState<string>(systemLayers[0]);
  const activeIndex = systemLayers.indexOf(active);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-5 w-full max-w-full min-w-0 items-stretch">
      <div className="flex flex-row sm:flex-col gap-1 sm:gap-0 overflow-x-auto sm:overflow-visible w-full sm:w-44 md:w-48 sm:shrink-0 pb-2 sm:pb-0 scrollbar-none py-1">
        {systemLayers.map((layer, i) => (
          <div key={layer} className="flex sm:flex-col items-center sm:items-stretch shrink-0">
            <button
              onClick={() => setActive(layer)}
              onMouseEnter={() => setActive(layer)}
              className={cn(
                "shrink-0 mono-label text-[10px] sm:text-xs px-2.5 py-2 sm:px-3 sm:py-2 rounded-sm border transition-all text-left whitespace-nowrap w-full",
                active === layer
                  ? "border-signal text-signal bg-signal/5"
                  : "border-line text-ink-faint hover:text-ink-dim hover:border-line-bright"
              )}
            >
              {layer}
            </button>
            {i < systemLayers.length - 1 && (
              <div className="flex items-center justify-center shrink-0 w-4 sm:w-full sm:h-4 px-1 sm:px-0">
                <motion.div
                  className="h-px w-4 sm:h-4 sm:w-px bg-line-bright origin-left sm:origin-top"
                  animate={{
                    backgroundColor: i < activeIndex ? "#5AA9FF" : "rgb(51 57 74)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="corner-frame flex-1 rounded-sm border border-line bg-bg-panel/60 p-5 sm:p-6 min-h-[140px] flex flex-col justify-center min-w-0 max-w-full">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mono-label text-[11px] text-amber mb-2">
            {String(activeIndex + 1).padStart(2, "0")} / {String(systemLayers.length).padStart(2, "0")}
          </p>
          <h4 className="font-display text-xl text-ink mb-2">{active}</h4>
          <p className="text-ink-dim text-sm leading-relaxed">{descriptions[active]}</p>
        </motion.div>
      </div>
    </div>
  );
}
