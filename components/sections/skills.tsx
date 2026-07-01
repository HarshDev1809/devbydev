import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { profile } from "@/lib/data/profile";

export function Skills() {
  const skillGroups = Object.entries(profile.skills);

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map(([group, skills]) => (
          <div
            key={group}
            className="rounded-2xl border border-stone-200 bg-white p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
