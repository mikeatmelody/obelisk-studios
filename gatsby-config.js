require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Define site URL here

let URL;
if (process.env.NODE_ENV === "production") {
  URL = "https://obelisk-studios-demo.netlify.app";
} else {
  URL = "http://localhost:8000";
}

module.exports = {
  siteMetadata: {
    title: "Obelisk Studios",
    author: "Mike at Melody Digital",
    siteUrl: URL,
    keywords: "wholesale clothing, garments, merch, merchandise, screenprint, tshirt, hoodies, hats, clothing, highquality, directtogarment, screenprinting, screenprinter, clothingbrand, customgarments, embroidery, smallbusiness, dtg, printing, Custom logo, custom brand, custom design, design, merch, merchandise, custom merch,"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          // location: required and must include the pathname property
          location: {
            pathname: "/top-picks",
          },
          // crumbLabel: required label for the default crumb
          crumbLabel: "Top Picks",
          // all other properties optional
          crumbSeparator: " / ",
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },

    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Obelisk Studios - Premium Blanks, Embroidery, & Screen Printing`,
        short_name: `Obelisk`,
        start_url: `/`,
        lang: `en`,
        theme_color_in_head: false,
        icon: `src/images/sh-obelisk-logo.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: process.env.CRISP_ID,
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
  ],
};
