import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ProjectJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/seo-config";
import { projects } from "@/lib/data/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const pageUrl = `${siteConfig.url}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Harsh Dev`,
      description: project.summary,
      url: pageUrl,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.title} — Harsh Dev`,
      description: project.summary,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/projects/${project.slug}`;

  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      {/* Structured Data */}
      <ProjectJsonLd
        title={project.title}
        description={project.summary}
        url={pageUrl}
        stack={project.stack}
        links={project.links}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Projects", url: `${siteConfig.url}/projects` },
          { name: project.title, url: pageUrl },
        ]}
      />
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-accent mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        All projects
      </Link>

      {/* Header */}
      <div className="mb-16 md:mb-20">
        <div className="flex flex-wrap items-center gap-x-2 mb-6">
          {project.context && (
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {project.context}
            </span>
          )}
          {project.context && project.timeframe && (
            <span className="text-stone-300">&middot;</span>
          )}
          {project.timeframe && (
            <span className="font-sans text-[15px] text-stone-500 shrink-0">
              {project.timeframe}
            </span>
          )}
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-stone-900 mb-8 leading-[1.1]">
          {project.title}
        </h1>

        <p 
          className="font-sans text-stone-700 text-lg md:text-[21px] leading-[1.8] max-w-3xl text-pretty"
          dangerouslySetInnerHTML={{ __html: project.summary }}
        />
      </div>

      {/* Tech stack */}
      <div className="mb-16 border-t border-[#D8D6D0] pt-8">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 mb-4">
          Tech Stack
        </h2>
        <div className="font-sans text-[15px] text-stone-500 leading-[1.8]">
          {project.stack.map((tech, i) => (
            <span key={tech}>
              <span className="hover:text-accent transition-colors">{tech}</span>
              {i < project.stack.length - 1 && (
                <span className="mx-[6px] text-stone-300" aria-hidden="true">
                  &middot;
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="mb-16 border-t border-[#D8D6D0] pt-12">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 mb-8">
            Key Impact
          </h2>
          <div className="flex flex-col gap-8">
            {project.metrics.map((metric) => (
              <div key={metric} className="pl-6 border-l-2 border-accent/40">
                <p className="font-heading text-2xl md:text-3xl font-bold text-stone-800 leading-[1.3] max-w-2xl text-balance">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      <div className="mb-16 border-t border-[#D8D6D0] pt-8">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 mb-6">
          What Was Built
        </h2>
        <ul className="space-y-6 max-w-3xl">
          {project.highlights.map((highlight, i) => (
            <li
              key={i}
              className="relative pl-6 font-sans text-[17px] text-stone-700 leading-[1.8] before:content-['—'] before:absolute before:left-0 before:text-stone-400"
            >
              <span dangerouslySetInnerHTML={{ __html: highlight }} />
            </li>
          ))}
        </ul>
      </div>

      {/* External links */}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4 pt-8 border-t border-[#D8D6D0]">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/external inline-flex items-center gap-2 font-sans text-[14px] uppercase tracking-wide font-semibold text-stone-900 border border-[#D8D6D0] px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              <span>{link.label}</span>
              <ExternalLink className="w-4 h-4 group-hover/external:-translate-y-0.5 group-hover/external:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
