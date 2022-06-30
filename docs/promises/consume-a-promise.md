# Consommer une promesse

## La méthode `then`

Pour obtenir la valeur d'une promesse lorsqu'elle est `réalisée`, vous appelez la méthode `then`.

```js
promise.then(onFulfilled, onRejected)
```

La méthode `then` accepte deux fonctions de rappel : `onFulfilled` et `onRejected`.

La méthode `then` appelle `onFulfilled` avec une valeur si la promesse est `réalisée` ou `onRejected` avec une erreur si la promesse est `rejetée`.

::: info
Les arguments `onFulfilled` et `onRejected` sont facultatifs.
:::

L'exemple suivant montre comment utiliser la méthode `then` sur la promesse renvoyée par la fonction `getUsers` :
