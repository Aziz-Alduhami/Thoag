module.exports = {
  siteMetadata: {
    title: 'Thoag - تطبيق ذوق l تنسيق ولائم وحفلات',
  },
  pathPrefix: "/thoag",
  plugins: ['gatsby-plugin-react-helmet',`gatsby-plugin-styled-components`,
    {resolve: `gatsby-plugin-typography`, options: {pathToConfigModule: `src/styles/utils/typography.js`}},
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: 'hdbiaxgw',
      },
    },
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: 'hdbiaxgw'
      }
    }
  ],  
}
