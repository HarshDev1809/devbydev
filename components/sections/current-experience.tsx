import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences } from "@/lib/data/experience";

export function CurrentExperience() {
  const currentExperiences = experiences.filter((e) => e.current);

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 min-h-screen flex flex-col justify-center">
      <SectionHeading
        title="Experience"
        subtitle="Where I'm currently working"
      />

      <div className="mt-12">
        {currentExperiences.map((exp) => (
          <ExperienceCard
            key={exp.company + exp.period}
            experience={exp}
            compact
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          View full work history
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
