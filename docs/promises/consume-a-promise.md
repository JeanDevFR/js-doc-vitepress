# Consommer une promesse

## La méthode `then()`

Pour obtenir la valeur d'une promesse lorsqu'elle est `réalisée`, appelez la méthode `then()`.

```js
promise.then(onFulfilled, onRejected)
```

La méthode `then()` accepte deux fonctions de rappel : `onFulfilled` et `onRejected`.

La méthode `then()` appelle `onFulfilled` avec une valeur si la promesse est `réalisée` ou `onRejected` avec une erreur si la promesse est `rejetée`.

::: info
Les arguments `onFulfilled` et `onRejected` sont facultatifs.
:::

L'exemple suivant montre comment utiliser la méthode `then()` sur la promesse renvoyée par la fonction `getUsers()` :

```js
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ])
    }, 1000)
  })
}

function onFulfilled(users) {
  console.log(users)
}

const promise = getUsers()
promise.then(onFulfilled)
```

Dans cet exemple :

- Tout d'abord, définissez la fonction `onFulfilled()` à appeler lorsque la promesse est `réalisée`.
- Deuxièmement, appelez la fonction `getUsers()` pour obtenir une promesse.
- Troisièmement, appelez la méthode `then()` sur la promesse et affichez la liste des utilisateurs.

Pour rendre le code plus concis, vous pouvez utiliser une fonction fléchée comme argument de la méthode `then()` comme ceci :

```js
promise.then((users) => {
  console.log(users)
})
```

Étant donné que la fonction `getUsers()` renvoie une promesse, vous pouvez enchaîner l'appel de la fonction avec la méthode `then()` comme ceci :

```js
getUsers().then((users) => {
  console.log(users)
})
```

Dans cet exemple, la fonction `getUsers()` réussit toujours. Pour simuler l'erreur, nous pouvons utiliser un indicateur de réussite comme celui-ci :

```js
let success = true

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ])
      } else {
        reject('Failed to the user list')
      }
    }, 1000)
  })
}

function onFulfilled(users) {
  console.log(users)
}

function onRejected(error) {
  console.log(error)
}

const promise = getUsers()
promise.then(onFulfilled, onRejected)
```

Comment ça fonctionne.

Tout d'abord, définissez la variable `success` et initialisez sa valeur à `true`.

Si `success` vaut `true`, la promesse dans la fonction `getUsers()` est `réalisée` avec une liste d'utilisateurs. Sinon, elle est `rejetée` avec un message d'erreur.

Deuxièmement, définissez les fonctions `onFulfilled` et `onRejected`.

Troisièmement, récupérez la promesse retournée par la fonction `getUsers()` et appelez la méthode `then()` avec les fonctions `onFulfilled` et `onRejected`.

Ce qui suit montre comment utiliser les fonctions fléchées comme arguments de la méthode `then()` :

```js
const promise = getUsers()
promise.then(
  (users) => console.log,
  (error) => console.log
)
```

## La méthode `catch()`

Si vous souhaitez obtenir l'erreur uniquement lorsque l'état de la promesse est `rejetée`, vous pouvez utiliser la méthode `catch()` sur la promesse :

```js
promise.catch(onRejected)
```

En interne, la méthode `catch()` invoque la méthode `then(undefined, onRejected)`.

## La méthode `finally()`

Parfois, vous souhaiterez exécuter du code, que la promesse soit `réalisée` ou `rejetée`. Par exemple:

```js
const render = () => {
  //...
}

getUsers()
  .then((users) => {
    console.log(users)
    render()
  })
  .catch((error) => {
    console.log(error)
    render()
  })
```

Comme vous pouvez le voir, l'appel de la fonction `render()` est dupliqué dans les méthodes `then()` et `catch()`.

Pour supprimer ce doublon et exécuter la fonction `render()` que la promesse soit `réalisée` ou `rejetée`, utilisez la méthode `finally()`, comme ceci :

```js
const render = () => {
  //...
}

getUsers()
  .then((users) => {
    console.log(users)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    render()
  })
```
