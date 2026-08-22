export interface Achievement {
  title: string;
  result: string;
  note?: string;
}

export const achievements: Achievement[] = [
  {
    title: "JEE Main 2025",
    result: "99.16 Percentile",
  },
  {
    title: "Hackemon 2.0 CTF",
    result: "10th Position",
    note: "Coding Club–organized CTF",
  },
];

export const exploring: string[] = [
  "AI/ML challenge initiatives",
  "Development debugging challenge initiatives",
  "Deeper backend and infrastructure systems",
  "Cybersecurity and cryptography",
  "Larger end-to-end software systems",
];

export const systemLayers: string[] = [
  "Computer Systems",
  "Software",
  "Backend",
  "Data / AI",
  "Infrastructure",
  "Security",
];
