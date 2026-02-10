Je veux que tu crées un système dans lequel je peux editer les projets via une interface admin. Pour ça, on va remplacer tout le stockage json par une bdd postgres.
Pour le développement en local, tu vas rajouter un docker-compose.yml afin d'avoir une base de données en local.
Tu vas utiliser prisma, ainsi que faire une API sécurisée protégée derriere next-auth (uniquement mon compte admin, qui est ajouté au seed.ts). Je ne veux pas de bouton pour se rendre sur l'interface admin, pour cela il faudra rentrer l'url /admin, et ça menera a l'authentification.

Je veux donc pouvoir éditer tout le contenu du site visuellement directement depuis cette page, un peu comme wordpress.
Pour les pages de projet, je veux pouvoir editer le texte, mais également mettre des images (en gros je veux pouvoir editer la page comme si c'était un document). Tout ça en ayant une prévisualisation en temps réel d'à quoi ça va ressembler au final. le mieux serait de juste éditer la prévisualisation. Il faut ensuite que je puisse choisir de publier ma nouvelle version sur le site publique.

Pour tout cela, tu vas produire un code professionnel, très simple à comprendre et a maintenir tout en n'étant pas trop verbeux, respecter les bonnes pratiques et les conventions ainsi que t'assurer que tout est très sécurisé.

A la fin, tu supprimeras le fichier prompt.md
