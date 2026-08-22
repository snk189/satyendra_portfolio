import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Github } from "./Icons";
import type { Project } from "../data/projects";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { NeuralNetworkViz } from "./NeuralNetworkViz";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 sm:p-6 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-bg/90 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl rounded-sm border border-line bg-bg-panel my-8"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 sm:px-8 py-6">
              <div>
                {project.context && (
                  <p className="mono-label text-[10px] text-amber mb-2">{project.context}</p>
                )}
                <h3 id="project-modal-title" className="font-display text-2xl sm:text-3xl text-ink">
                  {project.name}
                </h3>
                <p className="text-ink-dim text-sm mt-2">{project.tagline}</p>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6 space-y-8">
              <p className="text-ink-dim leading-relaxed">{project.description}</p>

              <div>
                <p className="mono-label text-[11px] text-ink-faint mb-3">Tech stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="mono-label text-[10px] text-ink-dim border border-line-soft rounded-sm px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mono-label text-[11px] text-ink-faint mb-3">Highlights</p>
                <ul className="space-y-2.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-ink-dim leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {project.id === "hnn" && (
                <div>
                  <p className="mono-label text-[11px] text-ink-faint mb-3">
                    Layer visualization — hover a layer
                  </p>
                  <NeuralNetworkViz />
                </div>
              )}

              <ArchitectureDiagram stages={project.architecture} title="Application architecture" />

              {project.secondaryArchitecture && (
                <ArchitectureDiagram
                  stages={project.secondaryArchitecture.stages}
                  title={project.secondaryArchitecture.title}
                />
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 text-sm text-ink hover:border-signal/50 hover:text-signal transition-colors"
              >
                <Github size={15} />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
