export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  context?: string;
  timeframe?: string;
  stack: string[];
  highlights: string[];
  metrics?: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "viexports-routing-service",
    title: "Maritime Routing Engine",
    summary:
      "Dijkstra/A*-based routing engine for global maritime networks, ~95% accuracy against real shipping routes.",
    context: "Viexports",
    timeframe: "Sept 2024 – Present",
    stack: ["Node.js", "PostGIS", "H3", "Dijkstra", "A*"],
    highlights: [
      "Engineered a maritime routing engine using Dijkstra and A* algorithms over a global maritime network graph to compute optimal sea routes between any two ports worldwide.",
      "Architected the spatial database layer using PostGIS and H3 hexagonal indexing to store, cluster, and query global maritime networks and sea nodes efficiently.",
      "Optimized pathfinding performance by leveraging H3 hierarchical indexing for spatial clustering and A* heuristic pruning, achieving ~30% reduction in path computation time compared to brute-force Dijkstra.",
      "Migrated the routing service from a Python prototype to a production-grade Node.js implementation for consistency with the rest of the backend stack.",
    ],
    metrics: [
      "~95% accuracy vs real-world shipping routes",
      "30% reduction in path computation time",
    ],
    featured: true,
  },
  {
    slug: "viexports-excel-engine",
    title: "Zero-Dependency Excel Engine",
    summary:
      "Custom-built spreadsheet computation engine with regex tokenizer and topological dependency resolution.",
    context: "Viexports",
    timeframe: "Sept 2024 – Present",
    stack: ["TypeScript", "Node.js"],
    highlights: [
      "Built a zero-dependency custom Excel-like computation engine to eliminate reliance on legacy spreadsheet workflows.",
      "Implemented a regex-based tokenizer and a dependency graph with topological sort for stale-free recalculation of dependent cells.",
      "Supported dynamic custom variables with automatic propagation of updates across 300+ rows × 20 columns of interdependent financial data.",
      "Designed the engine to plug into the admin panel as a modular computation layer for freight rate calculations, P&L projections, and insurance costing.",
    ],
    metrics: [
      "300+ rows × 20 cols of interdependent data",
      "Zero external dependencies",
    ],
    featured: true,
  },
  {
    slug: "viexports-admin-panel",
    title: "Admin Panel & Automation Pipelines",
    summary:
      "Scalable admin module for freight, market rates, insurance, and P&L enquiry workflows with automated data sync.",
    context: "Viexports",
    timeframe: "Sept 2024 – Present",
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "Designed and built a scalable admin panel spanning freight management, market rates, insurance workflows, and P&L enquiry tracking.",
      "Implemented server-side scheduled jobs that fetch, transform, and persist cross-enquiry data to the database on submission triggers.",
      "Set up CI/CD pipelines via GitHub Actions with Docker-based deployments for consistent staging and production environments.",
      "Automated backend operations (daily backups, email triggers, freight calculations) that moved ops cadence from 2–3x/week to daily.",
    ],
    metrics: [
      "Ops cadence improved from 2–3x/week to daily",
      "Fully automated backup and email pipeline",
    ],
  },
  {
    slug: "easy-budget",
    title: "Easy Budget",
    summary:
      "Full-stack budget and expense tracking app with recurring transactions and real-time alerts.",
    context: "Personal Project",
    timeframe: "2024",
    stack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "BullMQ",
      "Better Auth",
      "Docker",
      "Hostinger KVM",
    ],
    highlights: [
      "Built a full-stack budgeting app with Better Auth authentication, expense/income management, budget limit enforcement, and real-time alerts.",
      "Engineered an async job pipeline using Redis + BullMQ for scheduled recurring transactions and email notifications.",
      "Created an analytics dashboard backed by a type-safe PostgreSQL schema via Drizzle ORM on Supabase.",
      "Self-hosted the entire stack on Hostinger KVM with Docker containers and self-hosted GitHub Actions runners for CI/CD.",
    ],
    links: [
      { label: "Live", url: "https://easy-budget.devbydev.in" },
      { label: "Code", url: "https://github.com/HarshDev1809/easy_budget_fe" },
    ],
    featured: true,
  },
  {
    slug: "pastebin-lite",
    title: "Pastebin Lite",
    summary:
      "Full-stack paste-sharing app with per-user ownership, soft-delete recycle bin, and SSR syntax highlighting.",
    context: "Personal Project",
    timeframe: "2024",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Hostinger KVM",
    ],
    highlights: [
      "Built a full-stack paste-sharing application with Better Auth authentication, per-user snippet ownership, and soft-delete recycle bin.",
      "Implemented SSR-gated session handling for secure access control across routes.",
      "Added rich code snippet support with syntax highlighting, SSR-rendered for zero client-side flash and SEO-accessible previews.",
    ],
    links: [
      { label: "Live", url: "https://snippet-lite.devbydev.in" },
      { label: "Code", url: "https://github.com/HarshDev1809/pastebin" },
    ],
  },
  {
    slug: "http-reply",
    title: "http-reply",
    summary:
      "Lightweight, framework-agnostic HTTP response utility published to npm.",
    context: "Open Source (NPM Package)",
    timeframe: "2024",
    stack: ["TypeScript", "Express", "Fastify"],
    highlights: [
      "Published a framework-agnostic HTTP response utility to npm, supporting both Express and Fastify to enforce standardized API response structures and centralized logging.",
      "Designed a dual ES6/CommonJS core with full TypeScript type definitions and static helpers, reducing boilerplate response code across microservices.",
    ],
    links: [
      { label: "NPM", url: "https://www.npmjs.com/package/http-reply" },
      { label: "Docs", url: "https://http-reply.devbydev.in" },
    ],
  },
];
