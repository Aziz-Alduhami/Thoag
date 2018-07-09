module.exports = {
  siteMetadata: {
    title: 'Thoag - تطبيق ذوق l تنسيق ولائم وحفلات',
  },
  pathPrefix: "/thoag-test",
  plugins: ['gatsby-plugin-react-helmet',`gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: 'hdbiaxgw',
      },
    },
  ],
  
}
