# En bref

- Une promesse est un objet qui encapsule le résultat d'une opération asynchrone.
- Une promesse commence à l'état `en attente` et se termine à l'état `réalisée` ou à l'état `rejetée`.
- Utilisez la méthode `then()` pour planifier l'exécution d'une fonction de rappel lorsque la promesse est `réalisée` et la méthode `catch()` pour planifier l'appel d'une fonction de rappel lorsque la promesse est `rejetée`.
- Placez le code que vous souhaitez exécuter dans la méthode `finally()`, que la promesse soit `réalisée` ou `rejetée`.
- La méthode `Promise.all()` accepte une liste de promesses et renvoie une nouvelle promesse qui se résout en un tableau de résultats des promesses si toutes les promesses sont réalisées ; ou rejetée si l'une des promesses est rejetée avec l'erreur de la première promesse rejetée
- Utilisez la méthode `Promise.all()` pour regrouper les résultats de plusieurs opérations asynchrones.
- La méthode `Promise.race()` accepte une liste de promesses et renvoie une nouvelle promesse qui est réalisée ou rejetée dès que l'une des promesses est réalisée ou rejetée, avec la valeur ou l'erreur de cette promesse.
- La méthode `Promise.any()` accepte une liste de promesses et renvoie une promesse dès qu'une promesse est réalisée, même si les autres promesses sont rejetées.
- La méthode `Promise.allSettled()` accepte une liste de promesses et renvoie une nouvelle promesse qui se résout lorsque chaque promesse est résolue avec un tableau d'objets qui décrit le résultat de chaque promesse de la liste.
- À l'intérieur de la promesse, la méthode `catch()` interceptera l'erreur causée par l'instruction `throw` et `reject()`.
- Si une erreur se produit et que vous n'avez pas la méthode `catch()`, le moteur JavaScript émet une erreur d'exécution et arrête le programme.
