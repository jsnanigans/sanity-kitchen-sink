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
                  buildHookId: '5ee4a604bc45a5573f809d47',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dicr8a4j',
                  apiId: '58b0ba9d-221d-4b01-978b-629b08ecc036'
                },
                {
                  buildHookId: '5ee4a604d464fda132ef337a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-87wwbu45',
                  apiId: 'f751c44d-5493-4f53-a826-3f6381fb68dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jsnanigans/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-87wwbu45.netlify.app', category: 'apps'}
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
