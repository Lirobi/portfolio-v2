# Mobile Preview

Une extension VS Code qui révolutionne le workflow des développeurs web en permettant de prévisualiser instantanément leurs sites dans un émulateur mobile.

## Le problème

En tant que développeur, je passais un temps fou à :

- Ouvrir les DevTools pour activer le mode responsive
- Redimensionner manuellement la fenêtre
- Jongler entre différentes tailles d'écran

J'ai donc créé **Mobile Preview** pour résoudre ce problème.

## Fonctionnalités

### 📱 Prévisualisation instantanée

Un simple clic pour voir votre site dans un iPhone, Android ou tablette directement dans VS Code.

### 🔄 Hot Reload

Le preview se met à jour automatiquement à chaque sauvegarde de fichier.

### 📐 Appareils personnalisables

Choisissez parmi une bibliothèque d'appareils ou créez vos propres dimensions.

## Stack technique

- **TypeScript** pour un code robuste et maintenable
- **VS Code Extension API** pour l'intégration native
- **Webview API** pour le rendu du preview

## Modèle économique

L'extension propose un modèle freemium avec paiement via **Stripe** :

- Version gratuite : fonctionnalités de base
- Version Pro : appareils illimités, thèmes personnalisés, support prioritaire

## Liens

- [Marketplace VS Code](https://marketplace.visualstudio.com/)
- [Documentation](https://mobilepreview.lirobi.com/docs)
