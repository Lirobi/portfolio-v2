"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import NextImage from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
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
  ArrowUpRight,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button, FloatingBlob, Sticker, Navigation } from "@/components/ui";

const iconMap: Record<string, LucideIcon> = {
  Globe, Smartphone, Image, ShoppingCart, Flower2, BarChart3, Camera, Code2, Calendar,
};

export interface ProjectImageData {
  id: number;
  alt: string;
  filename: string;
  order: number;
}

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string | null;
  tags: string[];
  color: string;
  icon: string;
  url?: string | null;
  githubUrl?: string | null;
  hasPage: boolean;
  markdownContent?: string | null;
  year?: string | null;
  client?: string | null;
  role?: string | null;
  portraitGallery?: boolean;
  images?: ProjectImageData[];
}

interface Props {
  project: ProjectData;
}

const colorClasses: Record<string, { bg: string; bgLight: string; text: string }> = {
  coral:  { bg: "bg-coral",    bgLight: "bg-coral/10",    text: "text-coral"    },
  teal:   { bg: "bg-teal",     bgLight: "bg-teal/10",     text: "text-teal"     },
  purple: { bg: "bg-purple",   bgLight: "bg-purple/10",   text: "text-purple"   },
  blue:   { bg: "bg-blue",     bgLight: "bg-blue/10",     text: "text-blue"     },
  yellow: { bg: "bg-yellow",   bgLight: "bg-yellow/10",   text: "text-yellow"   },
};

function ImageGallery({ images, portrait }: { images: ProjectImageData[]; portrait?: boolean }) {
  const [current, setCurrent] = useState(0);
  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  if (portrait) {
    return (
      <section className="relative py-12 px-6 md:px-12 lg:px-24 2xl:px-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-center gap-6">
            {images.length > 1 && (
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:bg-foreground/10 transition-colors shrink-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div className="relative w-[280px] shrink-0">
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-foreground/5 border-4 border-foreground/20 shadow-2xl" style={{ aspectRatio: "9/19.5" }}>
                <NextImage
                  src={`/api/images/${images[current].id}`}
                  alt={images[current].alt || images[current].filename}
                  fill
                  className="object-cover"
                />
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-foreground/20 rounded-full z-10" />
              </div>
            </div>
            {images.length > 1 && (
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:bg-foreground/10 transition-colors shrink-0"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex justify-center gap-1.5 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-foreground scale-125" : "bg-foreground/30"}`}
                />
              ))}
            </div>
          )}
          {images[current].alt && (
            <p className="text-center text-sm text-foreground/40 mt-3">{images[current].alt}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 px-6 md:px-12 lg:px-24 2xl:px-12">
      <div className="max-w-[1000px] mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10">
          <NextImage
            src={`/api/images/${images[current].id}`}
            alt={images[current].alt || images[current].filename}
            fill
            className="object-contain"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-foreground scale-125" : "bg-foreground/30"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        {images[current].alt && (
          <p className="text-center text-sm text-foreground/40 mt-3">{images[current].alt}</p>
        )}
      </div>
    </section>
  );
}

export default function ProjectPageContent({ project }: Props) {
  const IconComponent = iconMap[project.icon] || Code2;
  const colors = colorClasses[project.color] ?? colorClasses.coral;
  const images = project.images ?? [];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <FloatingBlob color="coral" size="lg" className="fixed top-20 right-10 opacity-50" />
      <FloatingBlob color="teal" size="md" className="fixed bottom-32 left-10 opacity-50" delay="-2s" />
      <FloatingBlob color="purple" size="sm" className="fixed top-1/2 right-1/4 opacity-50" delay="-4s" />

      {/* Hero */}
      <section className="relative pt-16 pb-20 px-6 md:px-12 lg:px-24 2xl:px-12">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
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

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-foreground/5 text-sm font-mono rounded-full border border-foreground/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.url && (
                  <Button href={project.url} variant="primary" className="px-6 py-3" external>
                    Voir le projet
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                )}
                {project.githubUrl && (
                  <Button href={project.githubUrl} variant="secondary" className="px-6 py-3" external>
                    <Github className="w-4 h-4" />
                    Code source
                  </Button>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {project.client && (
                <div className="p-5 bg-foreground/[0.02] rounded-xl border border-foreground/10">
                  <p className="text-xs text-foreground/40 uppercase tracking-wider font-mono mb-1">Client</p>
                  <p className="font-semibold">{project.client}</p>
                </div>
              )}
              {project.role && (
                <div className="p-5 bg-foreground/[0.02] rounded-xl border border-foreground/10">
                  <p className="text-xs text-foreground/40 uppercase tracking-wider font-mono mb-1">Rôle</p>
                  <p className="font-semibold">{project.role}</p>
                </div>
              )}
              {project.year && (
                <div className="p-5 bg-foreground/[0.02] rounded-xl border border-foreground/10">
                  <p className="text-xs text-foreground/40 uppercase tracking-wider font-mono mb-1">Année</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      {images.length > 0 && <ImageGallery images={images} portrait={project.portraitGallery} />}

      {/* Markdown */}
      {project.markdownContent && (
        <section className="relative py-16 px-6 md:px-12 lg:px-24 2xl:px-12">
          <div className="max-w-[900px] mx-auto relative z-10">
            <article className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.markdownContent}
              </ReactMarkdown>
            </article>
          </div>
        </section>
      )}

      {/* Footer CTA */}
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
