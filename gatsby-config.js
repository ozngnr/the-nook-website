/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NB4C6SQ",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
  siteMetadata: {
    siteTitle: "The Nook London",
    siteDescription:
      "Wine bar & restaurant || The Nook is an all day venue, where you can find drinks and food for all times of the day alongside friendly company and lively music.",
    contact: "hello@thenooklondon.co.uk",
    tel: "020 7288 2929",
    siteImage: "src/images/logo.png",
    location: {
      place: "The Nook",
      placeId: "ChIJcbMx61IbdkgRrH8qzAG_wZw",
      address: "220 St. Paul's Road, London N1 2LL, UK",
      lat: 51.5469759,
      lng: -0.098375,
    },
    copyright: "Copyright The Nook 2022",
    siteKeywords:
      "wine bar, restaurant, food, natural wine, london, islington, shop",
  },
}
