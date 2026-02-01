"use client";

import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Calendar,
  ArrowRight,
  Sparkles,
  Building2,
  Star,
  Wrench
} from "lucide-react";
import Link from "next/link";
import { FloatingBlob, Sticker, Button } from "@/components/ui";
import { Footer } from "@/components/sections";
import Navigation from "@/components/ui/Navigation";

interface TimelineEvent {
  id: string;
  type: "year" | "project" | "experience";
  title: string;
  subtitle?: string;
  description?: string;
  date: string;
  dateEnd?: string;
  color: "coral" | "teal" | "purple" | "yellow" | "blue";
  link?: string;
  tags?: string[];
}

const timelineData: TimelineEvent[] = [
  // Plus récent en premier
  {
    id: "alternance-ei",
    type: "experience",
    title: "Alternance — Euro Information",
    subtitle: "Secteur Finances",
    description: "Développement bancaire",
    date: "Sept. 2025 →",
    color: "yellow",
  },
  {
    id: "t5",
    type: "project",
    title: "StrasPlanning",
    subtitle: "Projet d'études (T5)",
    description: "Gestion de planning en équipe",
    date: "Sept. — Déc. 2025",
    color: "blue",
    link: "/projets/strasplanning",
    tags: ["React", "Electron"],
  },
  // 2025 - Troisième année BUT
  {
    id: "but3",
    type: "year",
    title: "BUT Informatique — 3ème année",
    subtitle: "IUT Robert Schuman, Strasbourg",
    date: "Sept. 2025",
    color: "teal",
  },
  {
    id: "etik-be",
    type: "project",
    title: "ETiK BE",
    subtitle: "Projet client",
    description: "Site vitrine avec animations 3D",
    date: "Avr. 2025",
    color: "coral",
    link: "/projets/etik-be",
    tags: ["Three.js", "Prisma"],
  },
  {
    id: "stage-diatem",
    type: "experience",
    title: "Stage — Diatem",
    subtitle: "2 mois et demi",
    description: "Développement web en agence",
    date: "Avr. — Juin 2025",
    color: "yellow",
  },
  {
    id: "mobile-preview",
    type: "project",
    title: "Mobile Preview",
    subtitle: "Projet personnel",
    description: "Extension VS Code de preview mobile",
    date: "Jan. 2025",
    color: "coral",
    link: "/projets/mobile-preview",
    tags: ["TypeScript", "Stripe"],
  },
  {
    id: "watermarker",
    type: "project",
    title: "Watermarker",
    subtitle: "Projet personnel",
    description: "Ajouter des filigranes à vos images",
    date: "Déc. 2024",
    color: "purple",
    link: "/projets/watermarker",
    tags: ["Next.js", "Framer Motion"],
  },
  // 2024 - Deuxième année BUT
  {
    id: "but2",
    type: "year",
    title: "BUT Informatique — 2ème année",
    subtitle: "IUT Robert Schuman, Strasbourg",
    date: "Sept. 2024",
    color: "teal",
  },
  // 2023 - Première année BUT
  {
    id: "but1",
    type: "year",
    title: "BUT Informatique — 1ère année",
    subtitle: "IUT Robert Schuman, Strasbourg",
    date: "Sept. 2023",
    color: "teal",
  },
];

function TimelineItem({ event, index, isLast }: { event: TimelineEvent; index: number; isLast: boolean }) {
  const isYear = event.type === "year";
  const isExperience = event.type === "experience";
  const isProject = event.type === "project";
  
  const colorMap = {
    coral: { bg: "bg-coral", text: "text-coral", border: "border-coral" },
    teal: { bg: "bg-teal", text: "text-teal", border: "border-teal" },
    purple: { bg: "bg-purple", text: "text-purple", border: "border-purple" },
    yellow: { bg: "bg-yellow", text: "text-yellow", border: "border-yellow" },
    blue: { bg: "bg-blue", text: "text-blue", border: "border-blue" },
  };
  
  const colors = colorMap[event.color];

  return (
    <div className="relative flex gap-4 md:gap-8 group">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div 
          className={`
            relative z-10 flex items-center justify-center shrink-0
            ${isYear ? "w-12 h-12 md:w-14 md:h-14" : "w-10 h-10 md:w-12 md:h-12"}
            ${colors.bg} text-foreground
            ${isYear ? "hand-drawn" : "rounded-full"}
            transition-transform duration-300 group-hover:scale-110
          `}
          style={isYear ? { animationDelay: `${index * 0.1}s` } : {}}
        >
          {isYear && <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />}
          {isExperience && <Briefcase className="w-4 h-4 md:w-5 md:h-5" />}
          {isProject && <Code2 className="w-4 h-4 md:w-5 md:h-5" />}
        </div>
        
        {/* Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-foreground/10 min-h-8" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-8 ${isYear ? "pb-10" : ""}`}>
        {isYear ? (
          // Year card - special styling
          <div className="pt-1">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className={`font-mono text-sm ${colors.bg} text-foreground px-3 py-1 rounded-full`}>
                {event.date}
              </span>
              <Star className={`w-4 h-4 ${colors.text} wiggle`} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1">
              {event.title}
            </h3>
            <p className="text-foreground/60">
              {event.subtitle}
            </p>
          </div>
        ) : (
          // Project/Experience card
          <div 
            className={`
              p-5 md:p-6 bg-foreground/[0.02] border-2 border-foreground/10 
              rounded-2xl transition-all duration-300
              hover:border-foreground/20 hover:bg-foreground/[0.04]
              ${isExperience ? `border-l-4 ${colors.border}` : ""}
            `}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs text-foreground/50 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {event.date}
              </span>
              {isExperience && (
                <span className={`font-mono text-xs ${colors.bg} text-foreground px-2 py-0.5 rounded-full`}>
                  Pro
                </span>
              )}
            </div>
            
            <h4 className="text-lg md:text-xl font-bold mb-1">
              {event.link ? (
                <Link 
                  href={event.link}
                  className={`inline-flex items-center gap-2 hover:${colors.text} transition-colors group/link`}
                >
                  {event.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </Link>
              ) : (
                event.title
              )}
            </h4>
            
            <p className="text-foreground/50 text-sm mb-2">
              {event.subtitle}
            </p>
            
            {event.description && (
              <p className="text-foreground/70 text-sm mb-3">
                {event.description}
              </p>
            )}
            
            {event.tags && (
              <div className="flex flex-wrap gap-1.5">
                {event.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono bg-foreground/5 text-foreground/60 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ParcoursPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero section - matching homepage style */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 2xl:px-12">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Floating shapes */}
          <FloatingBlob color="coral" size="lg" className="absolute top-20 right-10" />
          <FloatingBlob color="teal" size="md" className="absolute bottom-32 left-10" delay="-2s" />
          <FloatingBlob color="yellow" size="sm" className="absolute top-1/2 right-1/4" delay="-4s" />
          <FloatingBlob color="purple" size="md" className="absolute bottom-20 right-20" delay="-3s" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-block mb-6">
              <Sticker className="bg-yellow text-foreground">
                <Sparkles className="w-4 h-4" /> Actuellement en 3ème année de BUT
              </Sticker>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
              Mon&nbsp;
              <span className="relative inline-block">
                <span className="relative z-10">parcours</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-coral opacity-50 -z-0" />
              </span>
              <br />
              de&nbsp;
              <span className="wavy-underline decoration-teal">développeur</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 max-w-xl mb-12 leading-relaxed">
              Du{" "}
              <span className="font-semibold text-foreground">premier cours de code</span>{" "}
              aux{" "}
              <span className="font-semibold text-foreground">projets clients</span>,
              voici les étapes qui m&apos;ont construit.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/#projets" variant="primary">
                Voir les projets
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/#contact" variant="secondary">
                Me contacter
                <Wrench className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-sm font-mono">scroll</span>
          <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-pulse" />
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 2xl:px-12 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 dots-pattern opacity-30" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="inline-block px-4 py-2 bg-teal text-white font-mono text-sm rounded-full">
              Timeline
            </span>
            <GraduationCap className="w-8 h-8 text-teal bounce-subtle" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {timelineData.map((event, index) => (
              <TimelineItem 
                key={event.id} 
                event={event} 
                index={index} 
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
