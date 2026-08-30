export interface LeadershipEntry {
  org: string;
  event?: string;
  points: string[];
}

export const leadership: LeadershipEntry[] = [
  {
    org: "Coding Club RVCE",
    event: "Coding Club Showcase 2026",
    points: [
      "Event Lead for Human Neural Network",
      "Event Support team for entire showcase ",
      "Volunteering across the showcase",
    ],
  },
  {
    org: "GDG RVCE",
    event: "GDG Showcase 2026",
    points: ["Ideated 2 events", "Event Lead for 1 event", "Volunteering across the showcase"],
  },
  {
    org: "Spark RVCE",
    points: [
      "MOC for MUN 2026",
      "MOC for Investiture Ceremony 2026",
      "Event Support for Sustainathon 2026",
    ],
  },
  {
    org: "Ashwa Racing",
    points: ["Currently undergoing training under the Technical Team"],
  },
  {
    org: "Accelerate RVCE",
    points: ["Member"],
  },
  {
    org: "AeroAstro RVCE",
    points: ["Member"],
  },
];
