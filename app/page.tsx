"use client";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  CTASection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}

