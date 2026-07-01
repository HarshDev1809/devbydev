import Link from "next/link";
import { Tag } from "@/components/ui/tag";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-lg hover:border-accent/30">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-heading text-xl font-bold text-stone-900">
          {project.title}
        </h3>
        {project.context && (
          <span className="shrink-0 rounded-lg bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
            {project.context}
          </span>
        )}
      </div>

      <p className="text-stone-600 mb-4 leading-relaxed">{project.summary}</p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.stack.slice(0, 6).map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
        {project.stack.length > 6 && (
          <Tag label={`+${project.stack.length - 6}`} />
        )}
      </div>

      <div className="mt-auto flex items-center gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          View details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {project.links?.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-accent"
          >
            {link.label}
            <ExternalLink className="w-3 h-3" />
          </a>
        ))}
      </div>
    </div>
  );
}
