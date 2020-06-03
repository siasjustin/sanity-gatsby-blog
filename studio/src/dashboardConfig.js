export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed7cae11763a77e5490c545',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6mtqh5je',
                  apiId: '98279f58-ee3f-40b4-b5e0-d028bf25fc8d'
                },
                {
                  buildHookId: '5ed7cae20da6596b3d7918f8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-byt98scu',
                  apiId: '34bde5cd-2155-4292-bdee-9ca4203875c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/siasjustin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-byt98scu.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
