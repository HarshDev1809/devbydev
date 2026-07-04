import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24 min-h-screen flex flex-col justify-center">
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
          className="group inline-flex items-center gap-2 font-sans text-[14px] font-semibold tracking-[0.1em] uppercase text-[#F2F0EC] bg-accent px-8 py-3.5 hover:bg-accent/90 transition-colors"
        >
          <span>
            View all projects
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
