import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceCard } from "@/components/ui/experience-card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/seo-config";
import { experiences } from "@/lib/data/experience";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Full work history of Harsh Dev — Full Stack Developer with 2 years of production experience across backend systems, geospatial engines, and frontend interfaces.",
  openGraph: {
    title: "Work Experience — Harsh Dev",
    description:
      "Full work history of Harsh Dev — backend systems, geospatial engines, and frontend interfaces.",
    url: `${siteConfig.url}/experience`,
  },
  twitter: {
    card: "summary",
    title: "Work Experience — Harsh Dev",
    description:
      "Full work history of Harsh Dev — Full Stack Developer with 2 years of production experience.",
  },
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Experience", url: `${siteConfig.url}/experience` },
        ]}
      />
      <SectionHeading
        title="Work Experience"
        subtitle="My complete professional journey"
      />

      {/* Timeline */}
      <div className="mt-12">
        <div className="space-y-0">
          {experiences.map((exp) => (
            <div key={exp.company + exp.period} className="relative">
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>

      {/* Empty state for future */}
      {experiences.length === 0 && (
        <p className="text-center text-stone-500 py-20">
          No experience entries yet.
        </p>
      )}
    </div>
  );
}
