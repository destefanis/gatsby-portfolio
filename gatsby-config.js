module.exports = {
  siteMetadata: {
    title: "Gatsby Portfolio",
    pathPrefix: "/gatsby-portfolio",
  },
  plugins: [
    "gatsby-plugin-react-helmet", 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 90,
          breakpoints: [960, 1200, 1400, 1600],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
        defaultQuality: 100,
      },
    },
    "gatsby-transformer-sharp",
    `gatsby-plugin-image`,
  ],
};
