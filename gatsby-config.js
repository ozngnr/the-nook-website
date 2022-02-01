/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menus`,
        path: `${__dirname}/src/menus`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
  siteMetadata: {
    title: "The Nook Restaurant",
    description: "Wine bar & restaurant",
    contact: "hello@thenooklondon.co.uk",
    tel: "020 7288 2929",
    location: {
      address: "220 St. Paul's Road, London N1 2LL, UK",
      lat: 51.5469759,
      lng: -0.098375,
    },
    copyright: "Copyright The Nook 2022",
  },
}
