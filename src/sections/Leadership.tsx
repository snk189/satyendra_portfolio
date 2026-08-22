import { leadership } from "../data/leadership";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";

export function Leadership() {
  return (
    <section id="leadership" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeading
            index="05"
            eyebrow="Leadership & events"
            title="Beyond the code"
            description="Event ideation, technical builds, and coordination across the clubs and initiatives I'm part of at RVCE."
          />
        </ScrollReveal>

        <div className="relative w-full max-w-full min-w-0">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block" />
          <div className="space-y-6 sm:space-y-8 w-full min-w-0">
            {leadership.map((entry, i) => (
              <ScrollReveal key={entry.org} delay={i * 0.04} className="min-w-0 w-full">
                <div className="relative sm:pl-10 min-w-0 w-full">
                  <span className="absolute left-0 top-1.5 hidden sm:flex h-3.5 w-3.5 rounded-full border-2 border-signal bg-bg" />
                  <div className="rounded-sm border border-line bg-bg-panel/50 p-4 sm:p-6 w-full min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                      <h3 className="font-display text-lg text-ink">{entry.org}</h3>
                      {entry.event && (
                        <span className="mono-label text-[10px] text-amber">{entry.event}</span>
                      )}
                    </div>
                    <ul className="space-y-1.5">
                      {entry.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm text-ink-dim leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-bright" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
