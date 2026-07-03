import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 min-h-screen flex flex-col justify-center">
      <SectionHeading title="About" />
      <div className="max-w-3xl space-y-4">
        {profile.aboutExtended.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg text-stone-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </section>
  );
}
