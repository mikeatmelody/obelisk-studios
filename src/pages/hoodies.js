import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from 'framer-motion'
// run template query
export const query = graphql`
  {
    allItems: allContentfulTopPicks(
      filter: { contentType: { eq: "Hoodies" } }
    ) {
      nodes {
        contentType
        title
        slug
        hyperLink {
          raw
        }
        thumbnailImage {
          title
          gatsbyImageData(width: 500, placeholder: BLURRED)
        }
        hoverImage {
          title
          gatsbyImageData(width: 500, placeholder: BLURRED)
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const HoodiesTemplate = ({ data: { allItems } }) => {
  const products = allItems.nodes;
  const pageName = {
    name: "Hoodies",
  };
  return (
    <>
      <main className="products-title container">
        <h1>{pageName.name}</h1>
        <Link to="/top-picks">Top Picks</Link>
        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.title}
              to={`/top-picks/${product.contentType}/${product.slug}`}
            >
              <motion.div className="image-wrapper" whileHover={{ scale: 1.01 }}>
                <div className="image-wrapper">
                  <GatsbyImage
                    image={getImage(product.thumbnailImage)}
                    alt={product.thumbnailImage.title}
                  />
                </div>
                <h4>{product.title}</h4>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default HoodiesTemplate;
