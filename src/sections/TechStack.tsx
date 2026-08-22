import { stack } from "../data/stack";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollReveal } from "../components/ScrollReveal";

export function TechStack() {
  return (
    <section id="stack" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeading
            index="04"
            eyebrow="Technical stack"
            title="Tools I reach for"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={(i % 3) * 0.05}>
              <div className="corner-frame h-full rounded-sm border border-line bg-bg-panel/50 p-5">
                <p className="mono-label text-[11px] text-signal mb-3">{cat.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-ink-dim border border-line-soft rounded-sm px-2.5 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
