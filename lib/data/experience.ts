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
      "Architected and delivered a <span class=\"text-accent font-medium\">backend automation system</span> (<span class=\"text-accent font-medium\">Node.js</span>, <span class=\"text-accent font-medium\">Express</span>, <span class=\"text-accent font-medium\">cron</span>) that automated daily backups, email triggers, and complex freight calculations, successfully replacing manual processes and accelerating operational cadence from 2–3 times weekly to daily.",
      "Developed a <span class=\"text-accent font-medium\">zero-dependency custom Excel-like computation engine</span> from scratch, implementing a regex-based tokenizer and a dependency graph utilizing <span class=\"text-accent font-medium\">topological sort</span> for precise, stale-free recalculation across <span class=\"text-accent font-medium\">300+ rows × 20 columns</span> of interdependent financial data.",
      "Spearheaded core architectural decisions in collaboration with company leadership, including <span class=\"text-accent font-medium\">database schema design</span> and the adoption of <span class=\"text-accent font-medium\">BullMQ</span> for asynchronous job queuing. Successfully owned the end-to-end migration of the routing service from <span class=\"text-accent font-medium\">Python to Node.js</span>.",
      "Engineered an <span class=\"text-accent font-medium\">IndexedDB caching layer</span> to handle a ~22,000-vessel <span class=\"text-accent font-medium\">GeoJSON</span> dataset (~10MB), effectively eliminating redundant network fetches and driving a <span class=\"text-accent font-medium\">~50% reduction in client-side load times</span>.",
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
