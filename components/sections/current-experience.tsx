import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences } from "@/lib/data/experience";

export function CurrentExperience() {
  const currentExperiences = experiences.filter((e) => e.current);

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Experience"
        subtitle="Where I'm currently working"
      />

      <div className="space-y-6">
        {currentExperiences.map((exp) => (
          <ExperienceCard
            key={exp.company + exp.period}
            experience={exp}
            compact
          />
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 rounded-lg bg-accent/5 px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent/10"
        >
          View full work history
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
