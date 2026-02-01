# Le projet en détail

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

L'extension propose un modèle freemium avec paiement via Stripe. La version gratuite offre les fonctionnalités de base, tandis que la version Pro débloque les appareils illimités, les thèmes personnalisés et le support prioritaire.
