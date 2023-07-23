# Bienvenue sur ITSV
Un module de validation simple écrit en TypeScript.


# Introduction
ITSV est un module de validation conçu pour être simple a comprendre, simple a utiliser, extensible et customisé facilement.


Il est articulé autour de 3 classes :
 - `Schema` et l'interface `SchemaDef`
 - `Field`
 - `Validator`

Ce module est développé pour apporter une réponse à la question de la validation des entrée utilisateurs sur les applications web modernes.

Imaginons une application web moderne avec :
 - Un client développé en Javascript (sur angular par exemple)
 - Une API NodeJS

Ce type de conception exporte toute la logique d'affichage et l'enchainement des vues directement dans le navigateur client.

Une problématique fait alors son apparition :

> Ou, et comment dois-je valider les donnée de formulaires fournies par l'utilisateur ?

ITSV permet :
 - De définir avec précision la strucutre des données fournies par l'utilisateurs
 - D'exporter cette définition au format JSON, celle-ci pouvant être réimporter en temps réel pour pouvoir être exploitée
 - De définir avec précision les conditions de validation des entrée utilisateurs pour chaque donnée.

**DOC A POURSUIVRE.....**