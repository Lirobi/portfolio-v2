import type { Metadata } from "next";
import ParcoursClient from "./ParcoursClient";

export const metadata: Metadata = {
  title: "Parcours",
  description: "Découvrez mon parcours professionnel et académique : formation, expériences et projets en développement web.",
  openGraph: {
    title: "Parcours | Lilian Bischung",
    description: "Découvrez mon parcours professionnel et académique : formation, expériences et projets en développement web.",
    url: "https://lilianbischung.fr/parcours",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parcours de Lilian Bischung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcours | Lilian Bischung",
    description: "Découvrez mon parcours professionnel et académique : formation, expériences et projets en développement web.",
    images: ["/og-image.png"],
  },
};

export default function Parcours() {
  return <ParcoursClient />;
}
