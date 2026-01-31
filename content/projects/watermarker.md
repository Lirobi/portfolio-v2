# Watermarker

Application web permettant d'ajouter facilement des filigranes personnalisés à vos images et vidéos.

## Pourquoi ce projet ?

Les photographes et créateurs de contenu ont souvent besoin de protéger leurs créations avec un filigrane. Les solutions existantes étaient soit trop complexes, soit payantes avec des fonctionnalités limitées.

**Watermarker** propose une alternative simple, rapide et intuitive.

## Fonctionnalités principales

### 🖼️ Support multi-formats

- Images : JPG, PNG, WebP, GIF
- Vidéos : MP4, WebM, MOV

### ✨ Personnalisation avancée

- Texte personnalisé avec polices variées
- Upload de logo/image comme filigrane
- Contrôle de l'opacité et de la position
- Redimensionnement et rotation

### 🔐 Authentification Google

Connexion simplifiée avec votre compte Google pour sauvegarder vos presets et historique.

## Animations fluides

J'ai utilisé **Framer Motion** pour créer des animations fluides et naturelles :

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Contenu */}
</motion.div>
```

## Performance

Le traitement des images se fait côté client pour :

- Préserver la confidentialité des fichiers
- Réduire les coûts serveur
- Offrir une expérience instantanée

## Prochaines étapes

- [ ] Traitement par lot
- [ ] Templates de filigranes
- [ ] API pour intégration externe
