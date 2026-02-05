"use client";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  CTASection,
  ContactSection,
  Footer,
} from "@/components/sections";
import { Navigation } from "@/components/ui";

export default function HomeClient() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
