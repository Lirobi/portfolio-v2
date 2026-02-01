"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Smartphone,
  Image,
  ShoppingCart,
  Flower2,
  BarChart3,
  Camera,
  Code2,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { Button, FloatingBlob, Sticker, Navigation } from "@/components/ui";

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
  Calendar,
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

  // Map color names to Tailwind classes for proper compilation
  const colorClasses: Record<string, { bg: string; bgLight: string; border: string; text: string }> = {
    coral: { bg: "bg-coral", bgLight: "bg-coral/10", border: "border-coral/20", text: "text-coral" },
    purple: { bg: "bg-purple", bgLight: "bg-purple/10", border: "border-purple/20", text: "text-purple" },
    yellow: { bg: "bg-yellow", bgLight: "bg-yellow/10", border: "border-yellow/20", text: "text-yellow" },
    blue: { bg: "bg-blue-500", bgLight: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-500" },
  };

  const colors = colorClasses[project.color] || colorClasses.coral;

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      {/* Floating shapes like main page */}
      <FloatingBlob color="coral" size="lg" className="fixed top-20 right-10 opacity-50" />
      <FloatingBlob color="teal" size="md" className="fixed bottom-32 left-10 opacity-50" delay="-2s" />
      <FloatingBlob color="purple" size="sm" className="fixed top-1/2 right-1/4 opacity-50" delay="-4s" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-6 md:px-12 lg:px-24 2xl:px-12">
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Back button */}
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main info - 2 cols */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <Sticker className={`${colors.bg} text-white`}>
                  {project.year || "Projet"}
                </Sticker>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
                <span className="relative inline-block">
                  {project.title}
                  <span className={`absolute bottom-1 left-0 w-full h-3 ${colors.bgLight} -z-10`} />
                </span>
              </h1>

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed max-w-xl">
                {project.longDescription || project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-foreground/5 text-sm font-mono rounded-full border border-foreground/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                href={project.url}
                variant="primary"
                className="px-6 py-3"
                external
              >
                Voir le projet
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>

            {/* Sidebar - 1 col */}
            <div className="space-y-4">
              {project.client && (
                <div className="p-5 bg-foreground/[0.02] rounded-xl border border-foreground/10 backdrop-blur-sm">
                  <p className="text-xs text-foreground/40 uppercase tracking-wider font-mono mb-1">Client</p>
                  <p className="font-semibold">{project.client}</p>
                </div>
              )}
              {project.role && (
                <div className="p-5 bg-foreground/[0.02] rounded-xl border border-foreground/10 backdrop-blur-sm">
                  <p className="text-xs text-foreground/40 uppercase tracking-wider font-mono mb-1">Rôle</p>
                  <p className="font-semibold">{project.role}</p>
                </div>
              )}
              {project.year && (
                <div className="p-5 bg-foreground/[0.02] rounded-xl border border-foreground/10 backdrop-blur-sm">
                  <p className="text-xs text-foreground/40 uppercase tracking-wider font-mono mb-1">Année</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Markdown Content Section */}
      {markdownContent && (
        <section className="relative py-16 px-6 md:px-12 lg:px-24 2xl:px-12">
          <div className="max-w-[900px] mx-auto relative z-10">
            <article className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </article>
          </div>
        </section>
      )}

      {/* Back to projects */}
      <section className="relative py-16 px-6 md:px-12 lg:px-24 2xl:px-12 border-t border-foreground/10">
        <div className="max-w-[900px] mx-auto flex flex-wrap items-center justify-between gap-6 relative z-10">
          <p className="text-foreground/60">Un autre projet à découvrir ?</p>
          <div className="flex flex-wrap gap-4">
            <Button href="/#projets" variant="secondary">
              <ArrowLeft className="w-4 h-4" />
              Autres projets
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
