import {
  BrainCircuit,
  Server,
  Radio,
  Layers,
  Boxes,
  ScanEye,
  ShieldCheck,
  Network,
  type LucideIcon,
} from "lucide-react";
import { interests } from "../data/interests";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Server,
  Radio,
  Layers,
  Boxes,
  ScanEye,
  ShieldCheck,
  Network,
};

export function Interests() {
  return (
    <section id="interests" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeading
            index="02"
            eyebrow="What I build"
            title="Where I spend my time"
            description="A working set of areas I keep coming back to — not a list of buzzwords, but the kinds of problems I actually enjoy solving."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-sm overflow-hidden border border-line">
          {interests.map((interest, i) => {
            const Icon = iconMap[interest.icon];
            return (
              <ScrollReveal key={interest.title} delay={(i % 4) * 0.05}>
                <div className="group relative h-full bg-bg-panel p-6 transition-colors hover:bg-bg-raised">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-signal group-hover:border-signal/50 group-hover:bg-signal/5 transition-colors">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-lg text-ink mb-2">{interest.title}</h3>
                  <p className="text-sm text-ink-dim leading-relaxed">{interest.description}</p>
                  <span className="pointer-events-none absolute top-4 right-4 mono-label text-[10px] text-ink-faint opacity-0 group-hover:opacity-100 transition-opacity">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
