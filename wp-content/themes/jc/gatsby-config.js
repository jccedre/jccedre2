module.exports = {
  siteMetadata: {
    title: `Jean Carlos Cedre Personal Website`,
    description: `Portfolio Website`,
    author: `@jccedre`,
    twitterUsername: `@jccedre`,
  },

  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `http://localhost:8000/graphql`,
        html: {
          useGatsbyImage: true,
          generateWebpImages: true,
        },
        // verbose: true,
        // debug: {
        //   throwRefetchErrors: true,
        // },
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-smoothscroll`,
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jean Carlos Cedre`,
        short_name: `JCCedre`,
        start_url: `/`,
        background_color: `#0E151D`,
        theme_color: `#151E29`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,

    // For Styled Components
    `gatsby-plugin-styled-components`,

    // For Netlify
    `gatsby-plugin-netlify`,

    // Load Google fonts
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Advent Pro',
            weights: ['400', '500', '600'],
          },
          {
            family: 'Josefin Sans',
            weights: ['600', '700'],
          },
        ],
      }
    },
  ],
}
