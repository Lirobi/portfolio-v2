"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Briefcase,
  Globe,
  Smartphone,
  Image,
  ShoppingCart,
  Flower2,
  BarChart3,
  Camera,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { Button, Stamp } from "@/components/ui";

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Image,
  ShoppingCart,
  Flower2,
  BarChart3,
  Camera,
  Code2,
};

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  color: string;
  icon: string;
  url: string;
  hasPage: boolean;
  markdownFile?: string;
  year?: string;
  client?: string;
  role?: string;
}

interface ProjectPageContentProps {
  project: Project;
  markdownContent: string | null;
}

export default function ProjectPageContent({
  project,
  markdownContent,
}: ProjectPageContentProps) {
  const IconComponent = iconMap[project.icon] || Code2;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className={`relative py-32 px-6 md:px-12 lg:px-24 2xl:px-12 bg-gradient-to-br from-${project.color}/10 via-background to-background overflow-hidden`}
      >
        {/* Background decorations */}
        <div
          className={`absolute top-20 right-20 w-64 h-64 bg-${project.color}/20 rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-10 left-10 w-48 h-48 bg-${project.color}/10 rounded-full blur-3xl`}
        />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Back button */}
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Project info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 bg-${project.color}/20 rounded-2xl flex items-center justify-center`}
                >
                  <IconComponent className={`w-8 h-8 text-${project.color}`} />
                </div>
                <Stamp className={`bg-${project.color} text-white`}>
                  {project.year || "Projet"}
                </Stamp>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[0.95]">
                {project.title}
              </h1>

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 bg-${project.color}/10 border border-${project.color}/20 text-sm font-mono rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                href={project.url}
                variant="magnetic"
                className="px-8 py-4"
                external
              >
                Voir le projet
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>

            {/* Right: Project meta */}
            <div className="space-y-6">
              {project.client && (
                <div className="p-6 bg-foreground/5 rounded-2xl border-2 border-foreground/10">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-5 h-5 text-foreground/40" />
                    <span className="text-sm text-foreground/40 uppercase tracking-wider">
                      Client
                    </span>
                  </div>
                  <p className="text-xl font-semibold">{project.client}</p>
                </div>
              )}

              {project.role && (
                <div className="p-6 bg-foreground/5 rounded-2xl border-2 border-foreground/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-foreground/40" />
                    <span className="text-sm text-foreground/40 uppercase tracking-wider">
                      Rôle
                    </span>
                  </div>
                  <p className="text-xl font-semibold">{project.role}</p>
                </div>
              )}

              {project.year && (
                <div className="p-6 bg-foreground/5 rounded-2xl border-2 border-foreground/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-foreground/40" />
                    <span className="text-sm text-foreground/40 uppercase tracking-wider">
                      Année
                    </span>
                  </div>
                  <p className="text-xl font-semibold">{project.year}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Markdown Content Section */}
      {markdownContent && (
        <section className="py-20 px-6 md:px-12 lg:px-24 2xl:px-12">
          <div className="max-w-[900px] mx-auto">
            <article className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </article>
          </div>
        </section>
      )}

      {/* Back to projects CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 2xl:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-foreground/60 mb-6">
            Vous avez aimé ce projet ?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/#projets" variant="secondary">
              <ArrowLeft className="w-5 h-5" />
              Voir d&apos;autres projets
            </Button>
            <Button href="/#contact" variant="primary">
              Me contacter
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
