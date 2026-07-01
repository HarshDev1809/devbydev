import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, TrendingUp } from "lucide-react";
import { Tag } from "@/components/ui/tag";
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
    <div className="mx-auto max-w-4xl px-6 py-16">
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
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.context && (
            <span className="rounded-lg bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {project.context}
            </span>
          )}
          {project.timeframe && (
            <span className="text-sm text-stone-500">{project.timeframe}</span>
          )}
        </div>

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          {project.title}
        </h1>

        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl">
          {project.summary}
        </p>
      </div>

      {/* Tech stack */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech} label={tech} variant="accent" />
          ))}
        </div>
      </div>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="mb-10 rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            <TrendingUp className="w-4 h-4" />
            Key Metrics
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {project.metrics.map((metric) => (
              <div
                key={metric}
                className="rounded-xl bg-white border border-accent/10 px-4 py-3"
              >
                <p className="font-semibold text-stone-900">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-4">
          What Was Built
        </h2>
        <ul className="space-y-3">
          {project.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-stone-600 leading-relaxed"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* External links */}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 hover:border-accent/30 hover:text-accent"
            >
              {link.label}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
