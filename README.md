# Bienvenue sur ITSV
Un module de validation simple écrit en TypeScript.


# Introduction
ITSV est un module de validation conçu pour être simple a comprendre, simple a utiliser, extensible et customisé facilement.


Il est articulé autour de 3 classes :
 - `Schema` et l'interface `SchemaDef`
 - `Field`
 - `Validator`

Ce module est développé pour apporter une réponse à la question de la validation des entrée utilisateurs sur les applications web modernes.

# Prise en main rapide

La validation des données utilisateurs est réalisée de la manière suivante :

 * Création d'un objet de type `SchemaDef` qui contiendra la structure des données à validée, ainsi que les règles de validation
 * Instanciation d'un `Schema` prenant en paramètre le `SchemaDef`
 * Validation des données par l'appel de la fonction `Schema(data)`
 * Il est possible de générer un rapport qui contiendra tous les éléments du `Schema` ainsi que le rapport de chaque validateur pour chaque champs.


# Pour les exemples, voir [src/test.ts](src/test.ts)
