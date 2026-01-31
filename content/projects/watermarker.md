# Le projet en détail

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
- Traitement d'image côté client
