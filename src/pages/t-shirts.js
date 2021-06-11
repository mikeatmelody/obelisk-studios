import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// run template query
export const query = graphql`
  {
    allItems: allContentfulTopPicks(
      filter: { contentType: { eq: "Tshirts" } }
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
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        hoverImage {
          title
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
  return (
    <Layout>
      <Header />
      <main className="products-grid container">
        {products.map((product) => (
              <Link key={product.title} to={`/top-picks/${product.contentType}/${product.slug}`}>
          <div>
            <GatsbyImage image={getImage(product.thumbnailImage)} alt={product.thumbnailImage.title} />
            <h4>{product.title}</h4>
          </div>
          </Link>
        ))}
      </main>
      <Footer />
    </Layout>
  );
};

export default TShirtTemplate;
