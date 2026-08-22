export interface Interest {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const interests: Interest[] = [
  {
    title: "AI / ML",
    description:
      "Building practical ML systems and integrating models into larger software applications, from feature pipelines to inference.",
    icon: "BrainCircuit",
  },
  {
    title: "Backend Systems",
    description:
      "Designing APIs, services, and data layers that stay predictable under load and easy to reason about.",
    icon: "Server",
  },
  {
    title: "Real-Time Applications",
    description:
      "Building applications where state, events, and users need to stay synchronized in real time.",
    icon: "Radio",
  },
  {
    title: "Full-Stack Development",
    description:
      "Connecting frontend, backend, and data layers into products that actually work end to end.",
    icon: "Layers",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Working with containers, Kubernetes, CI/CD, GitOps, and deployment pipelines that ship reliably.",
    icon: "Boxes",
  },
  {
    title: "Computer Vision",
    description:
      "Image processing, detection pipelines, and OCR systems that hold up under real-world conditions.",
    icon: "ScanEye",
  },
  {
    title: "Cybersecurity",
    description:
      "Understanding how systems are attacked in order to build ones that are harder to break.",
    icon: "ShieldCheck",
  },
  {
    title: "System Design",
    description:
      "Thinking in components, boundaries, and trade-offs before writing the code that connects them.",
    icon: "Network",
  },
];
