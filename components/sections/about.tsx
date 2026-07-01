import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading title="About" />
      <div className="max-w-3xl">
        <p className="text-lg text-stone-600 leading-relaxed">
          {profile.aboutExtended}
        </p>
      </div>
    </section>
  );
}
