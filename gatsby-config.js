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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },

    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
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
  ],
};
