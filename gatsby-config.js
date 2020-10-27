module.exports = {
  siteMetadata: {
    title: `James Phillips`,
    description: `James Phillips. Freelance Lighting Engineer.`,
    author: `James Phillips`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#aaaaaa`,
        theme_color: `#aaaaaa`,
        display: `minimal-ui`,
        icon: `src/content/images/logoinverse.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
