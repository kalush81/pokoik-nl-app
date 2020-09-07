/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "oferty wnajmu pokoi/mieszkan",
    author: "Chris & Dominika",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `offerts`,
        path: `${__dirname}/src/offerts`,
      },
    },
  ],
}
