# Créer une promesse

## Le constructeur `Promise()`

Pour créer une promesse, utilisez le constructeur `Promise()` :

```js
const promise = new Promise((resolve, reject) => {
  // opération asynchrone
  // ...

  // changement de l'état
  if (success) {
    resolve(value)
  } else {
    reject(error)
  }
})
```

Le constructeur `Promise()` accepte une fonction de rappel qui effectue généralement une opération asynchrone. Cette fonction est souvent appelée **exécuteur**.

À son tour, l'exécuteur accepte deux fonctions de rappel avec le nom `resolve` et `reject`.

::: info
Les fonctions de rappel transmises à l'exécuteur se nomment `resolve` et `reject` par convention.
:::

Si l'opération asynchrone se termine avec succès, l'exécuteur appellera la fonction `resolve()` pour changer l'état de la promesse de `en attente` à `réalisée` avec une valeur.

En cas d'erreur, l'exécuteur appellera la fonction `reject()` pour changer l'état de la promesse de `en attente` à `rejetée` avec la raison de l'erreur.

Une fois qu'une promesse atteint l'état `réalisée` ou `rejetée`, elle est **résolue** (resolved). La promesse reste dans cet état et ne peut pas passer à un autre état.

En d'autres termes, une promesse ne peut pas passer de l'état `réalisée` à `rejetée` et vice versa. De plus, elle ne peut pas revenir de l'état `réalisée` ou `rejetée` à l'état `en attente`.

::: info
Vous créerez rarement des promesses. En revanche, il est courant de consommer les promesses.
:::
