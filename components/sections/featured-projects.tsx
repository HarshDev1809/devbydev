import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
      <SectionHeading
        title="Featured Projects"
        subtitle="Selected work I'm proud of"
      />

      {/* Editorial stack instead of grid */}
      <div className="flex flex-col mt-12 md:mt-16">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-16 flex justify-start md:justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-sans text-[15px] font-semibold tracking-wide uppercase text-stone-900 hover:text-accent transition-colors"
        >
          <span className="border-b-2 border-transparent group-hover:border-accent pb-1 transition-colors">
            View all projects
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
