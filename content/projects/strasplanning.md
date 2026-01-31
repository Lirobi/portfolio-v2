# Présentation de StrasPlanning

## Contexte et besoin
StrasPlanning est un projet d'études collectif imaginé pour les opérations événementielles exigeantes : zones réglementées, barrières, véhicules, équipes, équipements et parcours doivent être planifiés puis exécutés sur le terrain avec des contraintes de sécurité, de coordination et parfois sans connexion réseau. L'application structure la préparation et la mise en place, organise les dispositifs et réduit les erreurs d'oubli grâce à une vision cartographique et des supports exportables.

## Solution détaillée
1. **Double facette Desktop + Mobile**
   - L'application desktop (Electron + React) offre une vision globale : création d'événements, définition de zones et parcours, affectation de personnel et équipements, import/export de données.
   - La version mobile consomme l'information structurée (via QR codes ou transfert) et guide les équipes sur le terrain : navigation, prises de photos, suivi des tâches et consultations hors connexion.
   - La synchronisation est orchestrée grâce à un canal bidirectionnel (socket/QR) : la carte embarquée reçoit les mises à jour et peut renvoyer des retours terrain.

2. **Cartographie hors connexion**
   - Une carte statique embarque les fonds et permet d’afficher zones, parcours et équipements même sans réseau.
   - Les recherches et la sélection de points s’appuient sur la base locale pour rester fluide, prévisualiser des lieux et restaurer rapidement la vue active.

3. **Flux de données fiables**
   - Les informations sont centralisées dans une base locale versionnée, avec des scénarios prêts à l’emploi pour reproduire des dispositifs sur chaque nouveau projet.
   - L’import/export est accompagné d’un système de notifications qui informe l’utilisateur des réussites, des erreurs et déclenche le rafraîchissement des cartes afin de garder les données terrain cohérentes.

## Fonctionnalités clés
- **Gestion complète des événements** : chaque événement matérialise des zones, des parcours, des équipements et des équipes ciblées (barrières, véhicules, points d’intérêt).
- **Zones & équipements** : création par polygones/polylignes colorés, spécifications d’équipements standard (hauteur, rotation, description) et liberté de modification en temps réel.
- **Parcours opératoires** : planification séquentielle, navigation guidée sur mobile, génération de listes de tâches et instructions terrain.
- **Gestion du personnel** : enregistrement des équipes et affectation des rôles depuis le desktop, transmission instantanée vers la mobile pour consultation ou validation.
- **Exports terrain prêts à l’emploi** : génération de PDF et de fichiers Excel pour les supports opérationnels transmis aux équipes sur le terrain ou aux partenaires.
- **Import/partage de données** : import de jeux d’exemples, rapprochement avec les flux mobiles, notifications de statut et rafraîchissement dynamique de la carte pour toujours travailler sur les dernières données.
- **Outils de support** : prévisualisation des données importées avant leur intégration sur le dispositif.

## Bénéfices observés
- Centralisation de l’information : événements, dispositifs, véhicules, équipes et parcours réunis dans une seule base avec synchronisation instantanée.
- Planification sécurisée : anticipation des besoins matériels/humains, réduction des oublis, coordination fluide entre sécurité, logistique et terrain.
- Supports clairs pour les équipes terrain : plans lisibles, PDF prêts à l’emploi et mobilité hors connexion.
- Réactivité et gain de temps : accès mobile aux données, moins d’allers-retours, décisions plus rapides et fiabilité en conditions réelles grâce au fonctionnement sans réseau.

## Technologies & innovations
- **Frontend** : React 19, Leaflet pour la cartographie, composants Lucide et Tailwind/PostCSS pour une UI moderne.
- **Desktop** : Electron permet de déployer une application cross-platform avec accès local et fonctionnement hors connexion.
- **Backend embarqué** : base SQLite versionnée avec migrations pour sécuriser les données terrain, complétée par des scripts d’initialisation.
- **Transferts de données** : synchronisation via QR codes et flux socket pour alimenter la version mobile et récupérer les retours terrain.
- **Exports** : PDF et Excel sont générés en sortie afin de proposer des plans/ fiches de tâches immédiatement exploitables.
- **Offline map** : fonds cartographiques, points d’intérêt, polygones/polylignes et calculs géométriques intégrés pour supporter la planification précise.

