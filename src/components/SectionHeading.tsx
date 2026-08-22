interface SectionHeadingProps {
  index: string; // e.g. "02"
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="mono-label text-xs text-signal">{index}</span>
        <span className="h-px w-8 bg-line-bright" />
        <span className="mono-label text-xs text-ink-faint">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-ink-dim text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
