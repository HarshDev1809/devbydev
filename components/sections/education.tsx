import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data/profile";

export function Education() {
  const { education } = profile;

  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <SectionHeading title="Education" />

      <div className="mt-12 max-w-3xl">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="relative border-b border-stone-200 pb-10 mb-10 last:border-0 last:pb-0 last:mb-0"
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold text-stone-900 mb-2">
              {edu.degree}
            </h3>
            
            <div className="flex flex-col gap-1 text-sm text-stone-500">
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="font-medium text-stone-700">{edu.institution}</span>
                {edu.grade && (
                  <>
                    <span className="hidden sm:inline-block text-stone-300">&middot;</span>
                    <span className="font-semibold text-accent">{edu.grade}</span>
                  </>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{edu.location}</span>
                <span className="hidden sm:inline-block text-stone-300">&middot;</span>
                <span>{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
