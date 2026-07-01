import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/seo-config";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Harsh Dev — maritime routing engines, Excel computation engines, full-stack apps, and open-source npm packages.",
  openGraph: {
    title: "Projects — Harsh Dev",
    description:
      "Maritime routing engines, Excel computation engines, full-stack apps, and open-source npm packages.",
    url: `${siteConfig.url}/projects`,
  },
  twitter: {
    card: "summary",
    title: "Projects — Harsh Dev",
    description:
      "All projects by Harsh Dev — maritime routing engines, budgeting apps, and open-source npm packages.",
  },
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Projects", url: `${siteConfig.url}/projects` },
        ]}
      />
      <SectionHeading
        title="All Projects"
        subtitle="Everything I've built and shipped"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
