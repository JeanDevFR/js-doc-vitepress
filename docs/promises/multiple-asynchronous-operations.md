# Plusieurs opérations asynchrones

## La méthode `Promise.all()`

La méthode statique `Promise.all()` attend un itérable de promesses.

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

Lorsque toutes les promesses ont été résolues, les valeurs de ces promesses sont transmises à la fonction de rappel de la méthode `then()` sous forme de tableau.

### Une des promesses es rejetée

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
