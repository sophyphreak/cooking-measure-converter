module.exports = {
  siteMetadata: {
    title: `cooking measure converter`,
    description: `Convert measurements from metric to standard and back again.`,
    author: `Andrew Horn`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cooking-measure-converter`,
        short_name: `measure-converter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
};
