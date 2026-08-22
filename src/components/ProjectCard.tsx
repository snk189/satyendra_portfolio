import { ArrowUpRight } from "lucide-react";
import { Github } from "./Icons";
import type { Project } from "../data/projects";
import { cn } from "../utils/cn";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "corner-frame group relative flex flex-col rounded-sm border border-line bg-bg-panel/60 p-5 sm:p-7 transition-colors hover:bg-bg-panel w-full min-w-0 max-w-full",
        project.featured && "md:col-span-2"
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0 flex-1">
          {project.context && (
            <p className="mono-label text-[10px] text-amber mb-2">{project.context}</p>
          )}
          <h3 className="font-display text-lg sm:text-2xl text-ink break-words">{project.name}</h3>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`${project.name} on GitHub`}
          className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line text-ink-dim hover:text-signal hover:border-signal/50 transition-colors"
        >
          <Github size={15} />
        </a>
      </div>

      <p className="text-sm text-ink-dim leading-relaxed mb-5">{project.tagline}</p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tech.slice(0, 6).map((t) => (
          <span
            key={t}
            className="mono-label text-[10px] text-ink-faint border border-line-soft rounded-sm px-2 py-1"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 6 && (
          <span className="mono-label text-[10px] text-ink-faint px-2 py-1">
            +{project.tech.length - 6}
          </span>
        )}
      </div>

      <ul className="space-y-2 mb-6 flex-1">
        {project.highlights.slice(0, project.featured ? 4 : 2).map((h) => (
          <li key={h} className="flex gap-2 text-sm text-ink-dim leading-relaxed">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
            {h}
          </li>
        ))}
      </ul>

      <button
        onClick={onOpen}
        className="group/btn inline-flex items-center gap-1.5 self-start text-sm text-signal hover:text-signal-glow transition-colors"
      >
        View details
        <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </button>
    </div>
  );
}
