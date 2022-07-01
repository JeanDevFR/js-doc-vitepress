# Enchaînement

## Introduction

Parfois, vous souhaiterez exécuter deux ou plusieurs opérations asynchrones liées, l'opération suivante commençant par le résultat de l'étape précédente.

Tout d'abord, créez une nouvelle promesse qui se résout avec le nombre 10 après 3 secondes :

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 3000)
})
```

::: info
La fonction `setTimeout()` simule une opération asynchrone.
:::

Invoquez ensuite la méthode `then()` de la promesse :

```js
promise.then((result) => {
  console.log(result)
  return result * 2
})
```

La fonction de rappel passée à la méthode `then()` s'exécute une fois la promesse résolue. Dans la fonction de rappel, nous affichons le résultat de la promesse et renvoyons une nouvelle valeur multipliée par deux.

Étant donné que la méthode `then()` renvoie une nouvelle promesse avec une valeur, vous pouvez appeler la méthode `then()` sur la promesse comme ceci :

```js
promise
  .then((result) => {
    console.log(result)
    return result * 2
  })
  .then((result) => {
    console.log(result)
    return result * 3
  })
```

Dans cet exemple, la valeur de retour de la première méthode `then()` est transmise à la seconde méthode `then()`. Vous pouvez continuer à appeler la méthode `then()` successivement comme suit :

```js
promise
  .then((result) => {
    console.log(result) // 10
    return result * 2
  })
  .then((result) => {
    console.log(result) // 20
    return result * 3
  })
  .then((result) => {
    console.log(result) // 60
    return result * 4
  })
```

La façon dont nous appelons les méthodes `then()` est souvent appelée chaîne de promesses.

## Plusieurs gestionnaires pour une promesse

Lorsque vous appelez la méthode `then()` plusieurs fois sur une promesse, ce n'est pas une chaîne de promesses. Par exemple:

```js
promise.then((result) => {
  console.log(result) // 10
  return result * 2
})

promise.then((result) => {
  console.log(result) // 10
  return result * 3
})

promise.then((result) => {
  console.log(result) // 10
  return result * 4
})
```

Dans cet exemple, nous avons plusieurs gestionnaires pour une promesse. Ces gestionnaires n'ont aucune relation. De plus, ils s'exécutent indépendamment et ne transmettent pas le résultat de l'un à l'autre comme la chaîne de promesses ci-dessus.

En pratique, vous utiliserez rarement plusieurs gestionnaires pour une promesse.

## Renvoyer une promesse

Lorsque vous renvoyez une valeur dans la méthode `then()`, la méthode `then()` renvoie une nouvelle promesse immédiatement résolue avec la valeur.
