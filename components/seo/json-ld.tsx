import { siteConfig } from "@/lib/seo-config";
import { profile } from "@/lib/data/profile";

/** JSON-LD for the Person (site-wide, placed in layout or index) */
export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    email: siteConfig.author.email,
    jobTitle: profile.title,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.author.linkedin,
      siteConfig.author.github,
      siteConfig.author.npm,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education[0].institution,
    },
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "REST APIs",
      "PostGIS",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** JSON-LD for the WebSite (placed in layout) */
export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** JSON-LD for a SoftwareSourceCode project page */
export function ProjectJsonLd({
  title,
  description,
  url,
  stack,
  links,
}: {
  title: string;
  description: string;
  url: string;
  stack: string[];
  links?: { label: string; url: string }[];
}) {
  const codeLink = links?.find(
    (l) => l.label === "Code" || l.label === "GitHub"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: title,
    description,
    url,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    programmingLanguage: stack,
    ...(codeLink && { codeRepository: codeLink.url }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** JSON-LD BreadcrumbList */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
