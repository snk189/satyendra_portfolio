interface SectionHeadingProps {
  index: string; // e.g. "02"
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-12 md:mb-16 w-full max-w-full min-w-0">
      <div className="flex items-center gap-3 mb-4">
        <span className="mono-label text-xs text-signal">{index}</span>
        <span className="h-px w-8 bg-line-bright shrink-0" />
        <span className="mono-label text-xs text-ink-faint truncate">{eyebrow}</span>
      </div>
      <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium text-ink text-balance break-words">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-ink-dim text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
