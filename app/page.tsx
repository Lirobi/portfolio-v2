import type { Metadata } from "next";
import config from "@/data/config.json";
import HomeClient from "./HomeClient";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Accueil",
  description: config.content.heroDescription,
  openGraph: {
    title: config.site.title,
    description: config.content.heroDescription,
    url: "https://lilianbischung.fr",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: config.site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: config.site.title,
    description: config.content.heroDescription,
    images: ["/og-image.png"],
  },
};

export default async function Home() {
  const projects = await prisma.project.findMany({
    orderBy: { order: "asc" },
    select: { id: true, slug: true, title: true, description: true, tags: true, color: true, icon: true, url: true, hasPage: true },
  });

  return <HomeClient projects={projects} />;
}
