export type ExperienceSubProject = {
  title: string;
  slug: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
  subProjects?: ExperienceSubProject[];
};

export const experiences: Experience[] = [
  {
    company: "Viexports",
    role: "Full Stack Developer",
    period: "Sept 2024 – Present",
    location: "New Delhi",
    current: true,
    highlights: [
      "Built backend automation system (Node.js, Express, cron) for daily backups, email triggers, freight calculations — moved ops cadence from 2–3x/week to daily.",
      "Collaborated with leadership on architecture: DB schema design, adopted BullMQ for job queuing, migrated routing service Python → Node.js, owned full dev lifecycle.",
      "Built IndexedDB caching layer for ~22,000-vessel GeoJSON dataset (~10MB) — eliminated redundant fetches, ~50% faster client load.",
    ],
    subProjects: [
      {
        title: "Admin Panel & Custom Excel Engine",
        slug: "viexports-admin-panel",
      },
      {
        title: "Routing Service Prototype",
        slug: "viexports-routing-service",
      },
    ],
  },
];
