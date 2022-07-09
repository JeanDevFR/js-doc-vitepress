# Gestion des erreurs

Lorsque vous déclenchez une exception en dehors de la promesse, vous devez l'attraper avec `try/catch`.

```js
try {
  foo().then(console.log).catch(console.log)
} catch (error) {
  console.log(error)
}
```

Si vous lancez une erreur dans la promesse, la méthode `catch()` l'attrapera.

```js
function foo() {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      throw new Error('Unauthorized')
    }

    resolve('Yeah!')
  })
}
```

Si vous enchaînez des promesses, la méthode `catch()` détectera les erreurs survenues dans n'importe quelle promesse.

```js
promise1
  .then(promise2)
  .then(promise3)
  .then(promise4)
  .catch((err) => console.log(err))
```

Lancer une erreur a le même effet que d'appeler `reject()`.

```js
function foo() {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject('Unauthorized')
    }

    resolve('Yeah!')
  })
}
```

Si vous n'utilisez pas la méthode `catch()` pour gérer une erreur survenue dans une promesse, cela provoquera une erreur d'exécution et terminera le programme.
