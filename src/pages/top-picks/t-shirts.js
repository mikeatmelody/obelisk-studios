import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion"

// run template query
export const query = graphql`
  {
    allItems: allContentfulTopPicks(
      filter: { contentType: { eq: "t-shirts" } }
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

const TShirtTemplate = ({ data: { allItems } }) => {
  const products = allItems.nodes;
  const pageName = {
    name: "T-Shirts",
  };
  return (
    <>
      <main>
        <div className="products-title container">
        <h1>{pageName.name}</h1>
        <Link to="/top-picks">Top Picks</Link>
        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.title}
              to={`/top-picks/${product.contentType}/${product.slug}`}
            >
              <div>
                <motion.div className="image-wrapper" whileHover={{ scale: 1.01 }}>
                  <GatsbyImage
                    image={getImage(product.thumbnailImage)}
                    alt={product.thumbnailImage.title}
                  />
                </motion.div>
                <h4>{product.title}</h4>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </main>
    </>
  );
};

export default TShirtTemplate;
