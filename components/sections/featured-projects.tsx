import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Featured Projects"
        subtitle="Selected work I'm proud of"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/10"
        >
          View all projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
