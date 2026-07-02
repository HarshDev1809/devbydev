import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data/profile";

export function Education() {
  const { education } = profile;

  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading title="Education" />

      <div className="grid gap-6 max-w-2xl">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-stone-900">
                  {edu.degree}
                </h3>
                <p className="text-stone-600 mt-1">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-stone-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  {edu.grade && (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
