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
      "Built <span class=\"text-accent font-medium\">backend automation system</span> (<span class=\"text-accent font-medium\">Node.js</span>, <span class=\"text-accent font-medium\">Express</span>, <span class=\"text-accent font-medium\">cron</span>) for daily backups, email triggers, freight calculations — moved ops cadence from 2–3x/week to daily.",
      "Collaborated with leadership on architecture: <span class=\"text-accent font-medium\">DB schema design</span>, adopted <span class=\"text-accent font-medium\">BullMQ</span> for job queuing, migrated routing service <span class=\"text-accent font-medium\">Python → Node.js</span>, owned full dev lifecycle.",
      "Built <span class=\"text-accent font-medium\">IndexedDB caching layer</span> for ~22,000-vessel <span class=\"text-accent font-medium\">GeoJSON</span> dataset (~10MB) — eliminated redundant fetches, <span class=\"text-accent font-medium\">~50% faster client load</span>.",
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
