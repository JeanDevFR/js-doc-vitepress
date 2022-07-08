# Introduction

Par définition, une promesse est un objet qui encapsule le résultat d'une opération asynchrone.

Une promesse possède un état parmi les suivants :

- En attente
- Réalisée
- Rejetée

Au début, l'état d'une promesse est `en attente`, indiquant que l'opération asynchrone est en cours. Selon le résultat de l'opération asynchrone l'état passe à `réalisée` ou `rejetée`.

L'état `réalisée` indique que l'opération asynchrone s'est terminée avec succès.

L'état `rejetée` indique que l'opération asynchrone a échoué.
