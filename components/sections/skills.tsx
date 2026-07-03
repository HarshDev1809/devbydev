import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data/profile";

export function Skills() {
  const skillGroups = Object.entries(profile.skills);

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with"
      />

      {/* 
        Plain text-column layout — editorial, whitespace-driven.
        Mobile: single-column stacked with horizontal hairlines.
        Desktop: multi-column grid with generous spacing.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
        {skillGroups.map(([group, skills], index) => (
          <div
            key={group}
            className={[
              "py-5 md:py-6",
              // Horizontal hairline between groups on mobile
              index > 0 ? "border-t border-[#D8D6D0] md:border-t-0" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3 md:mb-4">
              {group}
            </h3>

            <p className="text-[15px] leading-[1.8] text-stone-700 text-pretty">
              {skills.map((skill, i) => (
                <span key={skill}>
                  <span className="inline-block">
                    <span className="hover:text-accent cursor-default">
                      {skill}
                    </span>
                    {i < skills.length - 1 && (
                      <span
                        className="mx-1 md:mx-[6px] text-stone-300 select-none"
                        aria-hidden="true"
                      >
                        &middot;
                      </span>
                    )}
                  </span>{" "}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
