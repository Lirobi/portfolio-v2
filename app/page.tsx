import type { Metadata } from "next";
import config from "@/data/config.json";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Accueil",
  description: config.content.heroDescription,
  openGraph: {
    title: config.site.title,
    description: config.content.heroDescription,
    url: "https://lilianbischung.fr",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: config.site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.site.title,
    description: config.content.heroDescription,
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}

