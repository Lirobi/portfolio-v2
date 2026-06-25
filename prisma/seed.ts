import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const projects = [
  {
    slug: "etik-be",
    title: "ETiK BE",
    description: "Site vitrine d'un Bureau d'Études",
    longDescription:
      "Conception et développement d'un site vitrine moderne pour ETiK BE, un bureau d'études. Le site met en avant leur expertise.",
    tags: ["Next.js", "Three.js", "Prisma"],
    color: "coral",
    icon: "Globe",
    url: "https://etik-be.com/",
    githubUrl: null,
    hasPage: true,
    markdownContent: `### Le projet en détail

Conception et développement d'un site vitrine moderne pour ETiK BE, un bureau d'études. Le site met en avant leur expertise.

## Objectifs du projet

- Créer une identité visuelle forte et professionnelle
- Mettre en avant les compétences techniques
- Intégrer des animations 3D pour se démarquer
- Optimiser le référencement naturel

## Défis techniques

### Intégration Three.js

L'un des principaux défis a été d'intégrer des modèles 3D interactifs tout en maintenant des performances optimales. Plusieurs techniques d'optimisation ont été mises en place :

- Chargement différé des modèles 3D
- Compression des textures
- Gestion des niveaux de détail (LOD)

### Optimisation des performances

Le site atteint un score Lighthouse supérieur à 95 sur l'ensemble des métriques grâce à l'optimisation des images via Next.js, le code splitting automatique et le prefetching des pages.`,
    year: "2025",
    client: "ETiK BE",
    role: "Développeur",
    order: 1,
  },
  {
    slug: "mobile-preview",
    title: "Mobile Preview",
    description:
      "Extension VS Code pour prévisualiser des sites web dans un appareil mobile",
    longDescription:
      "Extension VS Code permettant aux développeurs de prévisualiser instantanément leurs sites web dans un appareil mobile, directement dans l'éditeur.",
    tags: ["TypeScript", "Next.js", "Stripe"],
    color: "teal",
    icon: "Smartphone",
    url: "https://mobilepreview.lirobi.com/",
    githubUrl: null,
    hasPage: true,
    markdownContent: `# Le projet en détail

Mobile Preview est une extension VS Code permettant de prévisualiser instantanément les sites web dans un appareil mobile, directement depuis l'éditeur.

## Problématique

Le workflow classique pour tester un site en mode responsive implique d'ouvrir les DevTools, d'activer le mode responsive et de jongler entre différentes tailles d'écran. Cette extension simplifie ce processus.

## Fonctionnalités principales

### Prévisualisation instantanée

Un simple clic pour afficher le site dans un iPhone, Android ou tablette directement dans VS Code.

### Rechargement automatique

Le preview se met à jour automatiquement à chaque sauvegarde de fichier.

### Bibliothèque d'appareils

Choix parmi une sélection d'appareils prédéfinis ou création de dimensions personnalisées.

## Stack technique

- TypeScript pour un code robuste et maintenable
- VS Code Extension API pour l'intégration native
- Webview API pour le rendu du preview

## Modèle économique

L'extension propose un modèle freemium avec paiement via Stripe. La version gratuite offre les fonctionnalités de base, tandis que la version Pro débloque les appareils illimités, les thèmes personnalisés et le support prioritaire.`,
    year: "2025",
    client: "Projet personnel",
    role: "Créateur & Développeur",
    order: 2,
  },
  {
    slug: "watermarker",
    title: "Watermarker",
    description:
      "Application web pour ajouter des filigranes personnalisés à vos images et vidéos",
    longDescription:
      "Application web intuitive permettant d'ajouter des filigranes personnalisés à vos images et vidéos en quelques clics, avec authentification Google.",
    tags: ["Next.js", "Framer Motion", "Google OAuth"],
    color: "purple",
    icon: "Image",
    url: "https://watermarker.lirobi.com/",
    githubUrl: null,
    hasPage: true,
    markdownContent: `# Le projet en détail

Watermarker est une application web permettant d'ajouter des filigranes personnalisés à des images et vidéos.

## Contexte

Les photographes et créateurs de contenu ont souvent besoin de protéger leurs créations avec un filigrane. Les solutions existantes sont souvent complexes ou proposent des fonctionnalités limitées. Watermarker offre une alternative simple et intuitive.

## Fonctionnalités principales

### Support multi-formats

- Images : JPG, PNG, WebP, GIF
- Vidéos : MP4, WebM, MOV

### Personnalisation avancée

- Texte personnalisé avec différentes polices
- Upload de logo ou image comme filigrane
- Contrôle de l'opacité et de la position
- Redimensionnement et rotation

### Authentification

Connexion via Google pour sauvegarder les presets et l'historique de traitement.

## Architecture technique

Les animations sont réalisées avec Framer Motion pour une expérience utilisateur fluide. Le traitement des fichiers s'effectue côté client, ce qui garantit la confidentialité des données et offre une expérience instantanée sans dépendance serveur.

## Stack

- Next.js et React
- Framer Motion pour les animations
- Authentification OAuth Google
- Traitement d'image côté client`,
    year: "2024",
    client: "Projet personnel",
    role: "Créateur & Développeur",
    order: 3,
  },
  {
    slug: "strasplanning",
    title: "StrasPlanning (Níðhöggr)",
    description:
      "Application de gestion de planning pour les entreprises réalisée lors d'un projet d'études en équipe de 6",
    longDescription:
      "Application web de gestion de planning développée en équipe.",
    tags: ["React", "Node.js", "Electron", "leaflet.js"],
    color: "blue",
    icon: "Calendar",
    url: "https://github.com/Lirobi/t5_strasplanning",
    githubUrl: "https://github.com/Lirobi/t5_strasplanning",
    hasPage: true,
    markdownContent: `# Présentation de StrasPlanning

## Contexte et besoin
StrasPlanning est un projet d'études collectif imaginé pour les opérations événementielles exigeantes : zones réglementées, barrières, véhicules, équipes, équipements et parcours doivent être planifiés puis exécutés sur le terrain avec des contraintes de sécurité, de coordination et parfois sans connexion réseau. L'application structure la préparation et la mise en place, organise les dispositifs et réduit les erreurs d'oubli grâce à une vision cartographique et des supports exportables.

## Solution détaillée
1. **Double facette Desktop + Mobile**
   - L'application desktop (Electron + React) offre une vision globale : création d'événements, définition de zones et parcours, affectation de personnel et équipements, import/export de données.
   - La version mobile consomme l'information structurée (via QR codes ou transfert) et guide les équipes sur le terrain : navigation, prises de photos, suivi des tâches et consultations hors connexion.
   - La synchronisation est orchestrée grâce à un canal bidirectionnel (socket/QR) : la carte embarquée reçoit les mises à jour et peut renvoyer des retours terrain.

2. **Cartographie hors connexion**
   - Une carte statique embarque les fonds et permet d'afficher zones, parcours et équipements même sans réseau.
   - Les recherches et la sélection de points s'appuient sur la base locale pour rester fluide, prévisualiser des lieux et restaurer rapidement la vue active.

3. **Flux de données fiables**
   - Les informations sont centralisées dans une base locale versionnée, avec des scénarios prêts à l'emploi pour reproduire des dispositifs sur chaque nouveau projet.
   - L'import/export est accompagné d'un système de notifications qui informe l'utilisateur des réussites, des erreurs et déclenche le rafraîchissement des cartes afin de garder les données terrain cohérentes.

## Fonctionnalités clés
- **Gestion complète des événements** : chaque événement matérialise des zones, des parcours, des équipements et des équipes ciblées (barrières, véhicules, points d'intérêt).
- **Zones & équipements** : création par polygones/polylignes colorés, spécifications d'équipements standard (hauteur, rotation, description) et liberté de modification en temps réel.
- **Parcours opératoires** : planification séquentielle, navigation guidée sur mobile, génération de listes de tâches et instructions terrain.
- **Gestion du personnel** : enregistrement des équipes et affectation des rôles depuis le desktop, transmission instantanée vers la mobile pour consultation ou validation.
- **Exports terrain prêts à l'emploi** : génération de PDF et de fichiers Excel pour les supports opérationnels transmis aux équipes sur le terrain ou aux partenaires.

## Technologies & innovations
- **Frontend** : React 19, Leaflet pour la cartographie, composants Lucide et Tailwind/PostCSS pour une UI moderne.
- **Desktop** : Electron permet de déployer une application cross-platform avec accès local et fonctionnement hors connexion.
- **Backend embarqué** : base SQLite versionnée avec migrations pour sécuriser les données terrain, complétée par des scripts d'initialisation.
- **Transferts de données** : synchronisation via QR codes et flux socket pour alimenter la version mobile et récupérer les retours terrain.
- **Exports** : PDF et Excel sont générés en sortie afin de proposer des plans/ fiches de tâches immédiatement exploitables.`,
    year: "2025",
    client: "Projet d'études",
    role: "Lead dev",
    order: 4,
  },
];

async function main() {
  console.log("Seeding projects...");
  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
    console.log(`✓ ${project.title}`);
  }
  console.log("Done.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
