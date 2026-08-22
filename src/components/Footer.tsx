export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="mono-label text-[10px] text-ink-faint">
          Satyendra Nayak K — {new Date().getFullYear()}
        </p>
        <p className="mono-label text-[10px] text-ink-faint">Built with React, Vite & Tailwind</p>
      </div>
    </footer>
  );
}
