export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60271f7f4e84c713b180391e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-oku7cqwb',
                  apiId: 'cf460e6c-f83d-4665-88dd-3f39061a534b'
                },
                {
                  buildHookId: '60271f7fb46f990f2ee43dec',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-qfbzptm4',
                  apiId: '208004a5-1465-42dc-8f62-3f981af34454'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sandboxVegas/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-qfbzptm4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
