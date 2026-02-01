"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShoppingCart,
  Flower2,
  BarChart3,
  Camera,
  Code2,
  Palette,
  ArrowRight,
  Calendar,
  Sparkles,
  Globe,
    Smartphone,
    Image,
  type LucideIcon,
} from "lucide-react";
import { ProjectCard, SectionContainer } from "@/components/ui";
import projectsData from "@/data/projects.json";
import config from "@/data/config.json";

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Flower2,
  BarChart3,
  Camera,
  Calendar,
  Globe,
  Smartphone,
  Image,
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = projectsData.map((project) => ({
    ...project,
    icon: iconMap[project.icon] || Code2,
  }));

  return (
    <section ref={ref} id="projets" className="py-32 px-6 md:px-12 lg:px-24 2xl:px-12 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 dots-pattern opacity-30" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-4 py-2 bg-coral text-white font-mono text-sm rounded-full">
                Projets
              </span>
              <Palette className="w-10 h-10 text-coral bounce-subtle" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95]">
              Mes dernières
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">créations</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple/30 -z-0" />
              </span>
            </h2>
          </div>
          <div className="max-w-sm mt-6 md:mt-0">
            <p className="text-lg text-foreground/60">
              Une sélection de projets qui illustrent mon approche et mes
              compétences.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1, 
                ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] 
              }}
              className={`h-full ${index % 2 === 1 ? "md:translate-y-8" : ""}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                color={project.color}
                icon={project.icon}
                url={project.url}
                slug={project.slug}
                hasPage={project.hasPage}
                offset={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Featured project teaser */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-coral/10 via-purple/10 to-teal/10 rounded-3xl border-2 border-dashed border-foreground/20 text-center"
        >
          <Sparkles className="w-10 h-10 mx-auto mb-4 text-purple wiggle" />
          <h3 className="text-2xl font-bold mb-2">
            {config.content.projectTeaserTitle}
          </h3>
          <p className="text-foreground/60">
            {config.content.projectTeaserDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
