"use client";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  CTASection,
  ContactSection,
  Footer,
} from "@/components/sections";

interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
  url: string | null;
  hasPage: boolean;
}

interface Props {
  projects: ProjectItem[];
}

export default function HomeClient({ projects }: Props) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
