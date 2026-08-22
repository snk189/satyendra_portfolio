import { SectionHeading } from "../components/SectionHeading";
import { SystemLayersDiagram } from "../components/SystemLayersDiagram";
import { ScrollReveal } from "../components/ScrollReveal";

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeading index="01" eyebrow="About" title="About" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start w-full max-w-full min-w-0">
          <ScrollReveal delay={0.05} className="min-w-0 w-full">
            <div className="space-y-5 text-ink-dim text-base md:text-lg leading-relaxed">
              <p>
                I'm interested in computer systems as a whole — how software, backend
                infrastructure, AI/ML, databases, networking, and security all connect to make
                something actually work.
              </p>
              <p>
                I learn heavily through building. When I run into something unfamiliar, I'd
                rather implement it and see where it breaks than only read about it. That's
                usually where the real understanding shows up.
              </p>
              <p>
                Outside of code, I enjoy turning broad ideas into concrete projects and technical
                initiatives — whether that's a system I'm building on my own or an event I'm
                helping run.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="min-w-0 w-full">
            <div className="w-full min-w-0 max-w-full">
              <p className="mono-label text-[11px] text-ink-faint mb-4">Areas of interest — hover to explore</p>
              <SystemLayersDiagram />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
