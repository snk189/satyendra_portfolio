import { Trophy, Compass } from "lucide-react";
import { achievements, exploring } from "../data/achievements";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";

export function Achievements() {
  return (
    <section id="achievements" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeading index="06" eyebrow="Achievements" title="A few numbers" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {achievements.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.06}>
              <div className="corner-frame h-full rounded-sm border border-line bg-bg-panel/50 p-6 flex items-start gap-4">
                <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-amber">
                  <Trophy size={17} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="font-display text-2xl text-ink">{a.result}</p>
                  <p className="text-sm text-ink-dim mt-1">{a.title}</p>
                  {a.note && <p className="mono-label text-[10px] text-ink-faint mt-1">{a.note}</p>}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <Compass size={16} className="text-signal" />
            <h3 className="mono-label text-xs text-ink-dim">Currently exploring — not finished projects, active interests</h3>
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap gap-2.5">
          {exploring.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.04}>
              <span className="inline-block text-sm text-ink-dim border border-line-soft rounded-sm px-3.5 py-2">
                {item}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
