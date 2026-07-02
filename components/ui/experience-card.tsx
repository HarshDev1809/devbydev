import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/lib/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  compact?: boolean;
}

export function ExperienceCard({
  experience,
  compact = false,
}: ExperienceCardProps) {
  return (
    <div className="relative border-b border-stone-200 pb-12 mb-12 last:border-0 last:pb-0 last:mb-0">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-stone-900 mb-2">
          {experience.role}
        </h3>
        <div className="flex flex-wrap items-center gap-x-2 text-sm text-stone-500">
          <span className="font-medium text-stone-700">{experience.company}</span>
          <span className="text-stone-300">&middot;</span>
          <span>{experience.period}</span>
          <span className="text-stone-300">&middot;</span>
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Highlights */}
      <ul className="space-y-4 mb-8">
        {(compact ? experience.highlights.slice(0, 2) : experience.highlights).map(
          (highlight, i) => (
            <li
              key={i}
              className="relative pl-5 text-stone-600 leading-relaxed text-sm md:text-base before:content-['—'] before:absolute before:left-0 before:text-stone-400"
              dangerouslySetInnerHTML={{ __html: highlight }}
            />
          )
        )}
      </ul>

      {/* Sub-projects */}
      {experience.subProjects && experience.subProjects.length > 0 && (
        <div className="mt-8 pt-6 border-t border-stone-200">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">
            Key Sub-Projects
          </p>
          <div className="flex flex-wrap gap-6">
            {experience.subProjects.map((sp) => (
              <Link
                key={sp.slug}
                href={`/projects/${sp.slug}`}
                className="group inline-flex items-center gap-2 border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 hover:border-accent hover:text-accent transition-colors"
              >
                {sp.title}
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
