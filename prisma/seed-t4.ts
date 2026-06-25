import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const markdownContent = `## Présentation

GetDrunk est une application mobile Android développée en équipe de 4 dans le cadre du projet T4 du BUT Informatique (groupe Barathoniens). L'application recense les 10 bars les plus proches de votre localisation et en choisit un aléatoirement via une roulette.

## Fonctionnalités

- **Géolocalisation** : détection automatique de la position de l'utilisateur
- **Liste des bars proches** : affichage des 10 établissements les plus proches via l'API Google Places
- **Roulette de sélection** : tirage au sort animé parmi la liste
- **Historique** : sauvegarde des bars déjà visités
- **Design Figma** : maquettes réalisées avant le développement

## Équipe

Projet réalisé en équipe de 4 : Fletschinger Valentin, Choukroun-Balzan Lilou, Vallet Luca, Bischung Lilian.

## Architecture technique

- **Android natif** en Java avec Android Studio
- **Google Places API** pour la récupération des bars à proximité
- **GPS / LocationManager** pour la géolocalisation
- **SQLite** pour la persistance de l'historique local
- Maquettes réalisées sur **Figma** avant le développement

## Installation

L'APK est disponible sur le dépôt Git. Pour installer :
1. Autoriser les téléchargements depuis des sources externes
2. Télécharger et lancer le fichier \`.apk\`
`;

const images = [
  { file: "/tmp/t4-screenshots/tirageAuSort.jpg", alt: "Roulette — écran d'accueil", order: 0 },
  { file: "/tmp/t4-screenshots/resultat.jpg", alt: "Résultat du tirage au sort", order: 1 },
  { file: "/tmp/t4-screenshots/historique.jpg", alt: "Écran historique", order: 2 },
];

async function main() {
  const project = await prisma.project.upsert({
    where: { slug: "getdrunk" },
    update: {
      title: "GetDrunk",
      description: "Application Android de sélection aléatoire de bars à proximité",
      longDescription: "Application mobile Android développée en équipe de 4 dans le cadre du T4 du BUT Informatique. Géolocalise les bars proches et en choisit un via une roulette.",
      tags: ["Java", "Android", "Google Places API", "Figma", "SQLite"],
      color: "yellow",
      icon: "Smartphone",
      url: null,
      githubUrl: "https://github.com/Lirobi/but-t4",
      hasPage: true,
      markdownContent,
      year: "2024",
      client: "Projet d'études (T4)",
      role: "Développeur Android",
      order: 5,
      portraitGallery: true,
    },
    create: {
      slug: "getdrunk",
      title: "GetDrunk",
      description: "Application Android de sélection aléatoire de bars à proximité",
      longDescription: "Application mobile Android développée en équipe de 4 dans le cadre du T4 du BUT Informatique. Géolocalise les bars proches et en choisit un via une roulette.",
      tags: ["Java", "Android", "Google Places API", "Figma", "SQLite"],
      color: "yellow",
      icon: "Smartphone",
      url: null,
      githubUrl: "https://github.com/Lirobi/but-t4",
      hasPage: true,
      markdownContent,
      year: "2024",
      client: "Projet d'études (T4)",
      role: "Développeur Android",
      order: 5,
      portraitGallery: true,
    },
  });
  console.log(`✓ Project created: ${project.title} (id: ${project.id})`);

  // Remove existing images for this project
  await prisma.projectImage.deleteMany({ where: { projectId: project.id } });

  for (const img of images) {
    if (!fs.existsSync(img.file)) {
      console.warn(`  ⚠ File not found: ${img.file}`);
      continue;
    }
    const data = fs.readFileSync(img.file);
    const mimeType = img.file.endsWith(".png") ? "image/png" : "image/jpeg";
    await prisma.projectImage.create({
      data: {
        projectId: project.id,
        data,
        mimeType,
        filename: path.basename(img.file),
        alt: img.alt,
        order: img.order,
      },
    });
    console.log(`  ✓ Image: ${img.alt}`);
  }

  console.log("Done.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
