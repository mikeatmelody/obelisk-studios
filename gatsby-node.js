// gatsby-node.js
const path = require("path");

// use gatsby create pages api and query for all product slugs

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allPicks: allContentfulTopPicks {
        nodes {
          id
          title
          contentType
          slug
        }
      }
    }
  `);

  //create page for each product and list
  data.allPicks.nodes.forEach((item) => {
    createPage({
      path: `top-picks/${item.contentType}/${item.slug}`,
      component: path.resolve("./src/templates/topPicks.js"),
      context: {
        // data passed to context is available
        // in page queries as GraphQL variables.
        id: item.id,
        title: item.title,
        slug: item.slug,
        contentType: item.contentType

      },
    });
  });
};


