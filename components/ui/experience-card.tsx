import Link from "next/link";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
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
    <div className="relative rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
      {/* Current badge */}
      {experience.current && (
        <span className="absolute top-4 right-4 rounded-lg bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 border border-green-200">
          Current
        </span>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-stone-900">
          {experience.role}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone-500">
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            {experience.company}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {experience.period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {experience.location}
          </span>
        </div>
      </div>

      {/* Highlights */}
      <ul className="space-y-2 mb-4">
        {(compact ? experience.highlights.slice(0, 2) : experience.highlights).map(
          (highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-stone-600 leading-relaxed"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          )
        )}
      </ul>

      {/* Sub-projects */}
      {experience.subProjects && experience.subProjects.length > 0 && (
        <div className="mt-4 pt-4 border-t border-stone-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
            Key Sub-Projects
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.subProjects.map((sp) => (
              <Link
                key={sp.slug}
                href={`/projects/${sp.slug}`}
                className="inline-flex items-center gap-1 rounded-lg bg-accent/5 px-3 py-1.5 text-sm font-medium text-accent hover:bg-accent/10"
              >
                {sp.title}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
