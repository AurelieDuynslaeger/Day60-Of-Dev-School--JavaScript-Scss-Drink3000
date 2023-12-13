## DRINK 3000

Les grandes lignes ! ;) 

Initalisation de sass (npm install -g sass)
lancer le watch sass pour la partie front par la suite (sass --watch sass/main.scss css/main.css)

Links faits dans le head html (css, js, fontawesome)
Fonts pas encore ajoutées mais c'est un détail ;p

dossiers assets ok avec le starter !


# JS

- Header : apparait au scroll (le h1 de drink 3000 dans le hero se déplacerait dans une navbar, et celle-ci contiendrait les différents liens du menu sur la droite -> à voir s'il faut jouer avec les class "visible" et "hidden" comme les anciens projets) / header qui au responsive, ses liens se modulent en menu burger.

- selection des boissons : à première vue, ce sont les div qui sont en soi des liens (cf btn selectionner ou des toggles) et qui au clik deviendraient soit :
    .1- séléctionnées (puis apparition du nom de la boisson sélectionnée dans un div dessous - div qui sera surement vide sur le html et qui selon la selection serait en visible avec le contenu qui changerait)

    .2- au filtrage (energisante ou rafraichissante), divs toutes actives, et au click sur le filtre ces divs seraient en class "inactive" avec le textContent qui changerait.

alors du coup le js ici jouerait sur les class des divs selon le clik ou le filtre choisi. ca ressemble à du classList.add ou classList.remove ?

Pour le reste, à la lecture, tu me diras si j'ai oublié quelque chose !
il me semble que l'autre grosse partie ca reste du responsive ! :)

