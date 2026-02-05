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
  },
  {
    id: "mobile-preview",
    type: "project",
    title: "Mobile Preview",
    subtitle: "Extension VS Code",
    description: "Extension pour prévisualiser des sites web dans un mobile simulé",
    date: "2025",
    color: "teal",
    link: "/projets/mobile-preview",
  },
  {
    id: "sep-sxh",
    type: "experience",
    title: "Stage — SXH",
    subtitle: "Agence UX & développement sur-mesure",
    description: "Développement web full-stack",
    date: "Avr. — Juin 2025",
    color: "purple",
  },
  {
    id: "etik-be",
    type: "project",
    title: "ETiK BE",
    subtitle: "Site vitrine",
    description: "Site vitrine interactif avec animations 3D",
    date: "2025",
    color: "coral",
    link: "/projets/etik-be",
  },
  {
    id: "2024-projects",
    type: "year",
    title: "2024",
    date: "2024",
    color: "yellow",
  },
  {
    id: "watermarker",
    type: "project",
    title: "Watermarker",
    subtitle: "Projet personnel",
    description: "Application de filigrane d'images/vidéos",
    date: "2024",
    color: "purple",
    link: "/projets/watermarker",
  },
  {
    id: "iut-haguenau",
    type: "experience",
    title: "IUT Haguenau",
    subtitle: "BUT Informatique",
    description: "Formation en développement logiciel et web",
    date: "2022 — 2025",
    color: "teal",
  },
  {
    id: "bac",
    type: "experience",
    title: "Baccalauréat",
    subtitle: "Spécialité NSI & Maths",
    description: "Lycée Alexandre Dumas",
    date: "2022",
    color: "blue",
  },
];

// Coloriser le texte selon le type
const colorMap = {
  coral: "text-coral",
  teal: "text-teal",
  purple: "text-purple",
  yellow: "text-yellow",
  blue: "text-blue",
};

const bgColorMap = {
  coral: "bg-coral/10 border-coral/30",
  teal: "bg-teal/10 border-teal/30",
  purple: "bg-purple/10 border-purple/30",
  yellow: "bg-yellow/10 border-yellow/30",
  blue: "bg-blue/10 border-blue/30",
};

export default function ParcoursClient() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-x-hidden py-32 px-6 md:px-12 lg:px-24">
        {/* Background decorations */}
        <FloatingBlob className="top-20 -left-20 w-96 h-96 bg-coral/20" delay="0s" />
        <FloatingBlob className="top-1/3 -right-32 w-80 h-80 bg-teal/20" delay="1.5s" />
        <FloatingBlob className="bottom-20 left-1/4 w-64 h-64 bg-purple/20" delay="3s" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow wiggle" />
              <h1 className="text-6xl md:text-7xl font-bold">Parcours</h1>
              <Sparkles className="w-8 h-8 text-teal wiggle" />
            </div>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Voici un aperçu de mon parcours, des projets marquants et des expériences qui m'ont façonné.
            </p>

            {/* Stickers décoratifs */}
            <div className="mt-12 flex justify-center gap-6 flex-wrap">
              <Sticker rotate={-8}>
                <GraduationCap className="w-6 h-6 text-teal" />
                <span className="text-sm font-semibold">Étudiant</span>
              </Sticker>
              <Sticker rotate={5}>
                <Code2 className="w-6 h-6 text-coral" />
                <span className="text-sm font-semibold">Dev web</span>
              </Sticker>
              <Sticker rotate={-3}>
                <Briefcase className="w-6 h-6 text-purple" />
                <span className="text-sm font-semibold">Alternant</span>
              </Sticker>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-foreground/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-16">
              {timelineData.map((event, index) => {
                const isLeft = index % 2 === 0;
                const isYear = event.type === "year";
                const isProject = event.type === "project";
                const isExperience = event.type === "experience";

                if (isYear) {
                  return (
                    <div key={event.id} className="relative flex justify-center">
                      <div className="bg-yellow text-foreground px-8 py-3 rounded-full font-bold text-2xl shadow-lg z-10">
                        {event.title}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={event.id}
                    className={`relative flex items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col gap-8`}
                  >
                    {/* Card */}
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <div
                        className={`group relative p-6 rounded-2xl border-2 ${
                          bgColorMap[event.color]
                        } hover:scale-[1.02] transition-transform`}
                      >
                        {/* Icon */}
                        <div
                          className={`absolute -top-4 ${
                            isLeft ? "left-6" : "md:right-6 left-6"
                          } w-12 h-12 rounded-full ${
                            bgColorMap[event.color]
                          } border-2 flex items-center justify-center`}
                        >
                          {isProject ? (
                            <Code2 className={`w-6 h-6 ${colorMap[event.color]}`} />
                          ) : isExperience ? (
                            <Briefcase className={`w-6 h-6 ${colorMap[event.color]}`} />
                          ) : (
                            <Star className={`w-6 h-6 ${colorMap[event.color]}`} />
                          )}
                        </div>

                        {/* Date badge */}
                        <div className="flex items-center gap-2 mb-3 mt-4">
                          <Calendar className="w-4 h-4 text-foreground/50" />
                          <span className="text-sm text-foreground/60 font-medium">{event.date}</span>
                        </div>

                        {/* Content */}
                        <h3 className={`text-xl font-bold mb-1 ${colorMap[event.color]}`}>
                          {event.title}
                        </h3>
                        {event.subtitle && (
                          <p className="text-foreground/80 font-semibold mb-2">{event.subtitle}</p>
                        )}
                        {event.description && (
                          <p className="text-foreground/60 mb-4">{event.description}</p>
                        )}

                        {/* Link */}
                        {event.link && (
                          <Link href={event.link}>
                            <Button size="sm" variant="ghost" className="group/btn">
                              Voir le projet
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Center dot */}
                    <div
                      className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${
                        colorMap[event.color].replace("text-", "bg-")
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-32 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Wrench className="w-6 h-6 text-coral wiggle" />
              <h2 className="text-3xl font-bold">Et la suite ?</h2>
            </div>
            <p className="text-lg text-foreground/70 mb-8">
              Je continue d'apprendre et de construire. Découvrez mes projets ou contactez-moi !
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/#projets">
                <Button>Voir mes projets</Button>
              </Link>
              <Link href="/#contact">
                <Button variant="secondary">Me contacter</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
