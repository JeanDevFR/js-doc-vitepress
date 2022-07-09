# async / await

ES2017 a introduit les mots-clés `async/await` qui s'appuient sur les promesses, vous permettant d'écrire du code asynchrone qui ressemble plus à du code synchrone. Techniquement parlant, `async/await` est du sucre syntaxique pour les promesses.

Si une fonction renvoie une promesse, vous pouvez placer le mot clé `await` devant l'appel de la fonction, comme ceci :

```js
const result = await foo()
```

Le mot-clé `await` attendra que la promesse renvoyée par la fonction `foo()` soit résolue.

Le mot-clé `await` ne peut être utilisé qu'à l'intérieur des fonctions asynchrones.

Ce qui suit définit une fonction asynchrone qui appelle les trois opérations asynchrones dans l'ordre :

```js
async function showServiceCost() {
  const user = await getUser(100)
  const services = await getServices(user)
  const cost = await getServiceCost(services)
  console.log(`The service cost is ${cost}`)
}

showServiceCost()
```

Comme vous pouvez le voir, le code asynchrone ressemble maintenant à du code synchrone.

## Le mot-clé `async`

Le mot-clé `async` vous permet de définir une fonction qui gère les opérations asynchrones.

Pour définir une fonction asynchrone, placez le mot-clé `async` devant le mot-clé `function` comme suit :

```js
async function sayHi() {
  return 'Hi'
}
```

Les fonctions asynchrones s'exécutent de manière asynchrone via la boucle d'événements. Elles renvoient toujours une promesse.

Dans cet exemple, comme la fonction `sayHi()` renvoie une promesse, vous pouvez la consommer, comme ceci :

```js
sayHi().then(console.log)
```

Vous pouvez également renvoyer explicitement une promesse à partir de la fonction `sayHi()`, comme indiqué dans le code suivant :

```js
async function sayHi() {
  return Promise.resolve('Hi')
}
```

L'effet est le même.

Outre les fonctions régulières, vous pouvez utiliser le mot clé `async` dans les expressions de fonction :

```js
const sayHi = async function () {
  return 'Hi'
}
```

Et les fonctions fléchées :

```js
const sayHi = async () => 'Hi'
```

Et les méthodes d'une classe :

```js
class Greeter {
  async sayHi() {
    return 'Hi'
  }
}
```

## Le mot-clé `await`

Utilisez le mot-clé `await` pour attendre qu'une promesse soit résolue dans un état réalisée ou rejetée. Vous ne pouvez utiliser le mot-clé `await` qu'à l'intérieur d'une fonction asynchrone :

```js
async function display() {
  const result = await sayHi()
  console.log(result)
}
```

Dans cet exemple, le mot-clé `await` indique d'attendre que la fonction `sayHi()` se termine avant d'afficher le message.

Notez que si vous utilisez le mot-clé `await` en dehors d'une fonction asynchrone, vous obtiendrez une erreur.

## Gestion des erreurs

Si une promesse est réalisée, la promesse renvoie le résultat. Cependant, lorsque la promesse est rejetée, la promesse lèvera une erreur comme s'il y avait une instruction `throw`.

Le code suivant :

```js
async function getUser(userId) {
  await Promise.reject(new Error('Error'))
}
```

Et le même que :

```js
async function getUser(userId) {
  throw new Error('Error')
}
```

Vous pouvez intercepter l'erreur en utilisant l'instruction `try/catch`, de la même manière qu'une instruction `throw` classique :

```js
async function getUser(userId) {
  try {
    const user = await Promise.reject(new Error('Invalid User Id'))
  } catch (error) {
    console.log(error)
  }
}
```

Il est possible d'intercepter les erreurs causées par une ou plusieurs promesses :

```js
async function showServiceCost() {
  try {
    let user = await getUser(100)
    let services = await getServices(user)
    let cost = await getServiceCost(services)
    console.log(`The service cost is ${cost}`)
  } catch (error) {
    console.log(error)
  }
}
```
