import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { ScrollReveal } from "../components/ScrollReveal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeading
            index="03"
            eyebrow="Projects"
            title="Things I've built"
            description="Full systems, end to end — from data pipelines to deployment. Each one taught me something I couldn't have gotten from a tutorial."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 w-full max-w-full min-w-0">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.id}
              delay={i * 0.06}
              className={`min-w-0 w-full ${project.featured ? "md:col-span-2" : ""}`}
            >
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
