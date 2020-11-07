module.exports = {
  siteMetadata: {
    title: "Indra Arianggi",
    description:
      "Personal site by Indra Arianggi. Contains a profile, work portfolio, and several blog articles about technology, work, and hobbies.",
    url: "https://www.indraarianggi.com",
    year: "2020",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `poppins\:500,500i,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-fontawesome-css`,
  ],
}
