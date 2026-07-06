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
      "<span class=\"text-accent font-medium\">Dijkstra/A*</span>-based routing engine for global maritime networks, <span class=\"text-accent font-medium\">~95% accuracy</span> against real shipping routes.",
    context: "Viexports",
    timeframe: "Sept 2024 – Present",
    stack: ["Node.js", "PostgreSQL", "PostGIS", "H3", "Dijkstra", "A*"],
    highlights: [
      "Engineered a maritime routing engine utilizing Dijkstra and A* algorithms over a global maritime network graph, effectively computing optimal sea routes between any two ports worldwide.",
      "Architected a highly scalable spatial database layer using PostGIS and H3 hexagonal indexing to store, cluster, and efficiently query global maritime networks and sea nodes.",
      "Optimized pathfinding performance by leveraging H3 hierarchical indexing for spatial clustering and A* heuristic pruning, driving a ~30% reduction in path computation time compared to brute-force Dijkstra.",
      "Directed the end-to-end migration of the routing service from a Python prototype to a robust, production-grade Node.js architecture, ensuring consistency across the backend stack.",
    ],
    metrics: [
      "~95% accuracy vs real-world shipping routes",
      "30% reduction in path computation time",
    ],
  },
  {
    slug: "viexports-excel-engine",
    title: "Zero-Dependency Excel Engine",
    summary:
      "Custom-built <span class=\"text-accent font-medium\">spreadsheet computation engine</span> with regex tokenizer and <span class=\"text-accent font-medium\">topological dependency resolution</span>.",
    context: "Viexports",
    timeframe: "Sept 2024 – Present",
    stack: ["Node.js", "Regex"],
    highlights: [
      "Engineered a zero-dependency custom Excel-like computation engine, completely eliminating the organization's reliance on legacy spreadsheet workflows.",
      "Architected a regex-based tokenizer and a dependency graph utilizing topological sort to ensure precise, stale-free recalculation of dependent cells.",
      "Enabled dynamic custom variables with automatic propagation of updates across 300+ rows × 20 columns of highly interdependent financial data.",
      "Integrated the computation engine seamlessly into the admin panel as a modular layer for real-time freight rate calculations, P&L projections, and insurance costing.",
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
      "<span class=\"text-accent font-medium\">Scalable admin module</span> for freight, market rates, insurance, and P&L enquiry workflows with <span class=\"text-accent font-medium\">automated data sync</span>.",
    context: "Viexports",
    timeframe: "Sept 2024 – Present",
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "Designed and delivered a scalable admin panel to centralize freight management, market rates, insurance workflows, and P&L enquiry tracking.",
      "Architected server-side scheduled jobs that seamlessly fetch, transform, and persist cross-enquiry data to the database based on event-driven submission triggers.",
      "Established robust CI/CD pipelines via GitHub Actions, combined with Docker-based deployments, to ensure consistent and reliable staging and production environments.",
      "Automated critical backend operations—including daily backups, email triggers, and freight calculations—accelerating the operational cadence from 2–3 times weekly to daily.",
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
      "Full-stack <span class=\"text-accent font-medium\">budget and expense tracking</span> app with recurring transactions and <span class=\"text-accent font-medium\">real-time alerts</span>.",
    context: "Personal Project",
    timeframe: "2026 – Present",
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
      "Architected and deployed a full-stack budgeting application featuring Better Auth authentication, comprehensive expense/income management, budget limit enforcement, and real-time alerts.",
      "Engineered a resilient asynchronous job pipeline leveraging Redis and BullMQ to efficiently process scheduled recurring transactions and email notifications.",
      "Developed an intuitive analytics dashboard powered by a type-safe PostgreSQL schema via Drizzle ORM on Supabase.",
      "Independently managed end-to-end infrastructure, self-hosting the entire stack on Hostinger KVM with Docker containers and self-hosted GitHub Actions runners for automated CI/CD.",
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
      "Full-stack <span class=\"text-accent font-medium\">paste-sharing app</span> with <span class=\"text-accent font-medium\">per-user ownership</span>, <span class=\"text-accent font-medium\">soft-delete</span> recycle bin, and <span class=\"text-accent font-medium\">SSR syntax highlighting</span>.",
    context: "Personal Project",
    timeframe: "2026",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Hostinger KVM",
    ],
    highlights: [
      "Developed a full-stack paste-sharing application featuring <span class=\"text-accent font-medium\">Better Auth</span> authentication, granular <span class=\"text-accent font-medium\">per-user snippet ownership</span>, and a <span class=\"text-accent font-medium\">soft-delete</span> recycle bin.",
      "Implemented <span class=\"text-accent font-medium\">SSR-gated session handling</span> to guarantee secure and reliable access control across all application routes.",
      "Integrated rich code snippet support with comprehensive <span class=\"text-accent font-medium\">syntax highlighting</span>, utilizing <span class=\"text-accent font-medium\">Server-Side Rendering (SSR)</span> to deliver <span class=\"text-accent font-medium\">zero client-side flash</span> and highly SEO-accessible previews.",
    ],
    links: [
      { label: "Live", url: "https://snippet-lite.devbydev.in" },
      { label: "Code", url: "https://github.com/HarshDev1809/pastebin" },
    ],
    featured: true,
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
      "Authored and published a framework-agnostic HTTP response utility to npm, providing native support for both Express and Fastify to enforce standardized API response structures and centralized logging.",
      "Architected a dual ES6/CommonJS core complete with comprehensive TypeScript type definitions and static helpers, significantly reducing boilerplate response code across multiple production microservices.",
    ],
    links: [
      { label: "NPM", url: "https://www.npmjs.com/package/http-reply" },
      { label: "Docs", url: "https://http-reply.devbydev.in" },
    ],
  },
];
