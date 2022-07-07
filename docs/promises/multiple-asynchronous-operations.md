# Plusieurs opérations asynchrones

## La méthode `Promise.all()`

La méthode statique `Promise.all()` attend une liste de promesses.

La méthode `Promise.all()` renvoie une seule promesse qui se résout lorsque toutes les promesses ont été résolues. La promesse renvoyée se résout en un tableau des résultats des promesses.

En d'autres termes, `Promise.all()` attend que toutes les promesses soient résolues et renvoie une nouvelle promesse qui se résout en un tableau contenant les résultats des promesses.

Si l'une des promesses est `rejetée`, la méthode `Promise.all()` renvoie immédiatement une promesse qui est `rejetée` avec l'erreur de la première promesse `rejetée`.

En pratique, `Promise.all()` est utile pour regrouper les résultats de plusieurs opérations asynchrones.

### Toutes les promesses sont réalisées

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('bar')
  }, 3000)
})

Promise.all([promise1, promise2]).then(console.log)
```

Lorsque toutes les promesses ont été réalisées, les valeurs de ces promesses sont transmises à la fonction de rappel de la méthode `then()` sous forme de tableau.

### Une des promesses est rejetée

La méthode `Promise.all()` renvoie une promesse qui est `rejetée` si l'une des promesses est rejetée.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 3000)
})

Promise.all([promise1, promise2]).then(console.log).catch(console.log)
```

## La méthode `Promise.race()`

La méthode statique `Promise.race()` accepte une liste de promesses et renvoie une nouvelle promesse `réalisée` ou `rejetée` dès qu'il y a une promesse qui est `réalisée` ou `rejetée`, avec la valeur ou la raison de l'erreur de cette promesse.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error')
  }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('bar')
  }, 1000)
})

Promise.race([promise1, promise2]).then(console.log).catch(console.log)
```

## La méthode `Promise.any()`

La méthode `Promise.any()` accepte une liste de promesses.

Si l'une des promesses est réalisée, `Promise.any()` renvoie une nouvelle promesse qui se résout en une valeur qui est le résultat de la première promesse réalisée, même si certaines promesses sont rejetées.

Si toutes les promesses sont rejetées ou si la liste est vide, `Promise.any()` renvoie une promesse rejetée avec une erreur `AggregateError` contenant toutes les raisons du rejet.

En pratique, vous utiliserez `Promise.any()` pour renvoyer la première promesse réalisée. Une fois qu'une promesse est réalisée, la méthode `Promise.any()` n'attend pas que les autres promesses soient terminées.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error')
  }, 500)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('bar')
  }, 5000)
})

Promise.any([promise1, promise2]).then(console.log)
```
