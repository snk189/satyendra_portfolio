import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "../components/Icons";
import { socialLinks } from "../data/nav";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeading
            index="07"
            eyebrow="Contact"
            title="Let's build something."
            description="Interested in collaborating on a project, technical initiative, or just discussing how something works?"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          <ScrollReveal delay={0.04}>
            <a
              href={`mailto:${socialLinks.email}`}
              className="corner-frame group flex items-center gap-4 rounded-sm border border-line bg-bg-panel/50 p-5 hover:border-signal/40 transition-colors"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line text-signal group-hover:border-signal/50 group-hover:bg-signal/5 transition-colors">
                <Mail size={17} strokeWidth={1.6} />
              </span>
              <div>
                <p className="mono-label text-[10px] text-ink-faint">Email</p>
                <p className="text-sm text-ink">{socialLinks.email}</p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="corner-frame group flex items-center gap-4 rounded-sm border border-line bg-bg-panel/50 p-5 hover:border-signal/40 transition-colors"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line text-signal group-hover:border-signal/50 group-hover:bg-signal/5 transition-colors">
                <Linkedin size={17} strokeWidth={1.6} />
              </span>
              <div>
                <p className="mono-label text-[10px] text-ink-faint">LinkedIn</p>
                <p className="text-sm text-ink">/in/satyendranayakk</p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="corner-frame group flex items-center gap-4 rounded-sm border border-line bg-bg-panel/50 p-5 hover:border-signal/40 transition-colors"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line text-signal group-hover:border-signal/50 group-hover:bg-signal/5 transition-colors">
                <Github size={17} strokeWidth={1.6} />
              </span>
              <div>
                <p className="mono-label text-[10px] text-ink-faint">GitHub</p>
                <p className="text-sm text-ink">github.com/snk189</p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <a
              href={`tel:${socialLinks.phone}`}
              className="corner-frame group flex items-center gap-4 rounded-sm border border-line bg-bg-panel/50 p-5 hover:border-signal/40 transition-colors"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line text-signal group-hover:border-signal/50 group-hover:bg-signal/5 transition-colors">
                <Phone size={17} strokeWidth={1.6} />
              </span>
              <div>
                <p className="mono-label text-[10px] text-ink-faint">Phone</p>
                <p className="text-sm text-ink">{socialLinks.phone}</p>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
