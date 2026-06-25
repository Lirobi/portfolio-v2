import type { Metadata } from "next";
import ParcoursClient from "./ParcoursClient";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Parcours",
  description: "Découvrez mon parcours professionnel et académique : formation, expériences et projets en développement web.",
  openGraph: {
    title: "Parcours | Lilian Bischung",
    description: "Découvrez mon parcours professionnel et académique : formation, expériences et projets en développement web.",
    url: "https://lilianbischung.fr/parcours",
    type: "profile",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Parcours de Lilian Bischung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcours | Lilian Bischung",
    description: "Découvrez mon parcours professionnel et académique : formation, expériences et projets en développement web.",
    images: ["/og-image.png"],
  },
};

export default async function Parcours() {
  const projects = await prisma.project.findMany({
    orderBy: { order: "asc" },
    select: { slug: true, title: true, description: true, tags: true, year: true, order: true },
  });

  // phase1 = between BUT2 and stage (order 1-5), phase2 = between BUT3 and end (order 6+)
  const phase1 = projects.filter((p) => p.order >= 1 && p.order <= 5);
  const phase2 = projects.filter((p) => p.order >= 6);

  return <ParcoursClient phase1Projects={phase1} phase2Projects={phase2} />;
}
