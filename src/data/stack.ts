export interface StackCategory {
  category: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    category: "Programming",
    items: ["Python", "JavaScript", "Java", "C++", "SQL", "Kotlin"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
      "JWT",
      "bcrypt",
    ],
  },
  {
    category: "Machine Learning / AI",
    items: [
      "PyTorch",
      "LightGBM",
      "CatBoost",
      "XGBoost",
      "Optuna",
      "Scikit-learn",
      "OpenCV",
      "EasyOCR",
    ],
  },
  {
    category: "Data",
    items: [
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Time-Series Forecasting",
      "Data Visualization",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Redis", "MongoDB", "MySQL"],
  },
  {
    category: "DevOps & Infrastructure",
    items: ["Docker", "Kubernetes", "GitHub Actions", "ArgoCD", "CI/CD", "Linux", "Git"],
  },
  {
    category: "Mobile",
    items: ["Android SDK", "Capacitor"],
  },
];
