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

Lorsque vous renvoyez une valeur dans la méthode `then()`, la méthode renvoie une nouvelle promesse immédiatement résolue avec la valeur.

De plus, vous pouvez renvoyer une nouvelle promesse dans la méthode `then()`, comme ceci :

```js
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 2000)
})

p.then((result) => {
  console.log(result)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2)
    }, 2000)
  })
})
  .then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3)
      }, 2000)
    })
  })
  .then((result) => console.log(result))
```

Ce qui suit modifie l'exemple ci-dessus :

```js
function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 2000)
  })
}

generateNumber(10)
  .then((result) => {
    console.log(result)
    return generateNumber(result * 2)
  })
  .then((result) => {
    console.log(result)
    return generateNumber(result * 3)
  })
  .then((result) => console.log(result))
```

### Syntaxe de chaînage des promesses

Parfois, vous avez plusieurs tâches asynchrones que vous souhaiterez exécuter en séquence. De plus, vous devez transmettre le résultat de l'étape précédente à la suivante. Dans ce cas, vous pouvez utiliser la syntaxe suivante :

```js
step1()
  .then((result) => step2(result))
  .then((result) => step3(result))
```

Si vous avez besoin de passer le résultat de la tâche précédente à la suivante sans passer le résultat, vous pouvez utiliser cette syntaxe :

```js
step1().then(step2).then(step3)
```

Supposons que vous souhaitiez effectuer les opérations asynchrones suivantes dans l'ordre :

- Tout d'abord, récupérer l'utilisateur à partir de la base de données.
- Deuxièmement, obtenir les services de l'utilisateur sélectionné.
- Troisièmement, calculer le coût du service à partir des services de l'utilisateur.

Les fonctions suivantes illustrent les trois opérations asynchrones :

```js
function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Récupération de l'utilisateur depuis la base de données")
    setTimeout(() => {
      resolve({
        userId: userId,
        username: 'admin',
      })
    }, 1000)
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Récupération des services de ${user.username} depuis une API`)
    setTimeout(() => {
      resolve(['Email', 'VPN', 'CDN'])
    }, 3000)
  })
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calcul du coût des services ${services}.`)
    setTimeout(() => {
      resolve(services.length * 100)
    }, 2000)
  })
}
```

Ce qui suit utilise les promesses :

```js
getUser(100).then(getServices).then(getServiceCost).then(console.log)
```
