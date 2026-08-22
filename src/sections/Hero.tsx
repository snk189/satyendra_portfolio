import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Github, Linkedin } from "../components/Icons";
import { NodeBackground } from "../components/NodeBackground";
import { socialLinks } from "../data/nav";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Hero() {
  const reduced = usePrefersReducedMotion();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden border-b border-line w-full max-w-full"
    >
      <NodeBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative mx-auto max-w-6xl w-full px-5 md:px-8 pt-24 pb-20">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-sm border border-line bg-bg-raised/70 backdrop-blur px-3 py-1.5 mb-8 max-w-full"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-amber opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber" />
          </span>
          <span className="mono-label text-[10px] sm:text-[11px] text-ink-dim truncate">Currently building &amp; exploring</span>
        </motion.div>

        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mono-label text-xs text-signal mb-4"
        >
          Satyendra Nayak K
        </motion.p>

        <motion.h1
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] sm:leading-[1.05] text-ink text-balance max-w-4xl break-words"
        >
          Engineering systems.
          <br />
          Understanding what happens{" "}
          <span className="relative inline-block text-signal">
            underneath
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-signal/40" />
          </span>
          .
        </motion.h1>

        <motion.p
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base sm:text-lg text-ink-dim leading-relaxed"
        >
          CSE (AI/ML) student at RV College of Engineering, building across AI/ML, backend
          systems, real-time applications, and infrastructure.
        </motion.p>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3 w-full"
        >
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-medium text-bg hover:bg-signal-glow transition-colors"
          >
            View Projects
            <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
          </button>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 text-sm text-ink hover:border-signal/50 hover:text-signal transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 text-sm text-ink hover:border-signal/50 hover:text-signal transition-colors"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-5 md:left-8 hidden sm:flex items-center gap-2 mono-label text-[10px] text-ink-faint">
        <span className="h-px w-6 bg-line-bright" />
        scroll
      </div>
    </section>
  );
}
