import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data/profile";

export function Skills() {
  const skillGroups = Object.entries(profile.skills);

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12">
        {skillGroups.map(([group, skills], index) => (
          <div
            key={group}
            className="py-6 first:pt-0"
          >
            {/* Hairline divider — hidden on the first item in each responsive column */}
            {index > 0 && (
              <div className="mb-6 h-px bg-[#D8D6D0] lg:hidden" />
            )}

            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              {group}
            </h3>
            <p className="text-[15px] text-stone-800 leading-relaxed">
              {skills.map((skill, i) => (
                <span key={skill}>
                  <span className="transition-colors duration-200 hover:text-accent cursor-default">
                    {skill}
                  </span>
                  {i < skills.length - 1 && (
                    <span className="mx-[6px] text-stone-400 select-none" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
