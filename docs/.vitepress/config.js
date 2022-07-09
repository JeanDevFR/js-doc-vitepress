export default {
  title: 'JavaScript',
  themeConfig: {
    sidebar: [
      {
        text: 'Les classes',
        collapsible: true,
        items: [],
      },
      {
        text: 'Les modules',
        collapsible: true,
        items: [],
      },
      {
        text: 'Promesses',
        collapsible: true,
        items: [
          {
            text: 'Introduction',
            link: '/promises/introduction',
          },
          {
            text: 'Créer une promesse',
            link: '/promises/create-a-promise',
          },
          {
            text: 'Consommer une promesse',
            link: '/promises/consume-a-promise',
          },
          {
            text: 'Enchaînement',
            link: '/promises/chaining.md',
          },
          {
            text: 'Plusieurs opérations asynchrones',
            link: '/promises/multiple-asynchronous-operations',
          },
          {
            text: 'Gestion des erreurs',
            link: '/promises/errors-handling',
          },
          {
            text: 'async/await',
            link: '/promises/async-await',
          },
          {
            text: 'En bref',
            link: '/promises/summary',
          },
        ],
      },
    ],
  },
}
