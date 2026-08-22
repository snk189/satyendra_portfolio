export interface ArchitectureStage {
  label: string;
  detail?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  context?: string;
  tech: string[];
  highlights: string[];
  github: string;
  architecture: ArchitectureStage[];
  secondaryArchitecture?: {
    title: string;
    stages: ArchitectureStage[];
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "bitespeed",
    name: "BiteSpeed",
    tagline: "AI-powered demand forecasting and smart food ordering system",
    description:
      "A full-stack canteen management platform with a Capacitor-based Android app for order processing, inventory management, analytics, and role-based access control — backed by a GPU-accelerated forecasting engine.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Capacitor",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Python",
      "LightGBM",
      "WebSockets",
    ],
    highlights: [
      "Benchmarked 7 forecasting models using TimeSeriesSplit and Optuna-based hyperparameter optimization on 20,000+ training records.",
      "Evaluated Random Forest, CatBoost, XGBoost, LightGBM, Prophet, N-BEATS, and TFT for demand prediction.",
      "Built a GPU-accelerated dual-model LightGBM forecasting system for 12 menu items using 20+ temporal, behavioral, weather, and event-driven features.",
      "Automated ingredient procurement planning and built live dashboards for operational analytics.",
    ],
    github: "#",
    architecture: [
      { label: "React / Android", detail: "Capacitor client" },
      { label: "Node / Express", detail: "API layer" },
      { label: "PostgreSQL", detail: "Persistence" },
      { label: "Python ML Engine", detail: "Feature pipeline" },
      { label: "LightGBM Forecast", detail: "Dual-model inference" },
      { label: "Procurement / Analytics", detail: "Live dashboards" },
    ],
  },
  {
    id: "hnn",
    name: "Human Neural Network",
    tagline: "Real-time collaborative neural-network simulation",
    context: "Coding Club RVCE — Club Showcase 2026",
    description:
      "A real-time simulation where participants physically act as input, hidden, and output neurons — with live state synchronization, PyTorch-driven computation, and a full GitOps deployment pipeline behind it.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Redis",
      "PyTorch",
      "Docker",
      "Kubernetes",
      "ArgoCD",
    ],
    highlights: [
      "Supports up to 100 participants acting as input, hidden, and output neurons in a live simulation.",
      "Dynamic participant allocation and live state synchronization through Socket.IO and Redis.",
      "PyTorch-based text embeddings, cosine similarity, dual alpha-weight feature scaling, softmax activation, MSE loss, and backpropagation.",
      "Live stage visualization and admin control systems with animated neural pathways and activation/probability visualizations.",
      "Admin and participant access secured with JWT authentication and bcrypt password hashing.",
      "Deployed via Docker and a GitOps CI/CD pipeline: GitHub Actions, GHCR, Kubernetes, and ArgoCD.",
    ],
    github: "#",
    featured: true,
    architecture: [
      { label: "Participants" },
      { label: "React" },
      { label: "Socket.IO" },
      { label: "Node / Express" },
      { label: "Redis" },
      { label: "PyTorch ML Engine" },
      { label: "Visualization" },
    ],
    secondaryArchitecture: {
      title: "Deployment pipeline",
      stages: [
        { label: "GitHub" },
        { label: "GitHub Actions" },
        { label: "GHCR" },
        { label: "Kubernetes" },
        { label: "ArgoCD" },
      ],
    },
  },
  {
    id: "noparking",
    name: "NoParking Pro",
    tagline: "Traffic violation detection system",
    description:
      "An automated traffic violation detection system integrating ESP32-CAM devices, OpenCV-based image processing, OCR, and a web-based violation management platform.",
    tech: ["FastAPI", "OpenCV", "EasyOCR", "ESP32-CAM", "JavaScript"],
    highlights: [
      "Designed a multi-stage license plate recognition pipeline using image enhancement and OCR techniques.",
      "Achieved 80% average OCR confidence under varied image conditions.",
      "Built asynchronous FastAPI services for violation logging, vehicle history retrieval, automated fine accumulation, and payment tracking.",
    ],
    github: "#",
    architecture: [
      { label: "Camera", detail: "ESP32-CAM" },
      { label: "Image Processing", detail: "OpenCV" },
      { label: "License Plate Detection" },
      { label: "OCR", detail: "EasyOCR" },
      { label: "Violation Record" },
      { label: "Management Dashboard" },
    ],
  },
];
