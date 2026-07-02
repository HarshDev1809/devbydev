import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col py-10 md:py-12 border-t border-[#D8D6D0] first:border-t-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-stone-900 group-hover:text-accent transition-colors">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        {project.timeframe && (
          <span className="font-sans text-[15px] text-stone-500 shrink-0">
            {project.timeframe}
          </span>
        )}
      </div>

      {project.context && (
        <div className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          {project.context}
        </div>
      )}

      <p className="font-sans text-stone-700 mb-8 leading-[1.8] text-pretty max-w-3xl text-[17px]">
        {project.summary}
      </p>

      {/* Tech Stack - Text based list instead of pill tags */}
      <div className="font-sans text-[15px] text-stone-500 mb-8 leading-[1.8]">
        {project.stack.map((tech, i) => (
          <span key={tech}>
            <span className="hover:text-accent transition-colors">{tech}</span>
            {i < project.stack.length - 1 && (
              <span className="mx-[6px] text-stone-300" aria-hidden="true">
                &middot;
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-6 md:gap-8">
        <Link
          href={`/projects/${project.slug}`}
          className="group/link inline-flex items-center gap-2 font-sans text-[15px] font-medium text-stone-900 hover:text-accent transition-colors"
        >
          <span className="border-b border-transparent group-hover/link:border-accent pb-0.5 transition-colors">
            View details
          </span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        {project.links?.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/external inline-flex items-center gap-1.5 font-sans text-[15px] text-stone-500 hover:text-accent transition-colors"
          >
            <span className="border-b border-transparent group-hover/external:border-accent pb-0.5 transition-colors">
              {link.label}
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </article>
  );
}
