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
      filter: { contentType: { eq: "Crewnecks" } }
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

const CrewnecksTemplate = ({ data: { allItems } }) => {
  const products = allItems.nodes;
  const pageName = {
    name: "Crewnecks"
}
  return (
    <Layout>
      <Header />
      <main className="products-title container">
      <h1>{pageName.name}</h1>
          <Link to="/top-picks">Top Picks</Link>
          <div className="products-grid">
        {products.map((product) => (
              <Link key={product.title} to={`/top-picks/${product.contentType}/${product.slug}`}>
          <div>
            <GatsbyImage image={getImage(product.thumbnailImage)} alt={product.thumbnailImage.title} />
            <h4>{product.title}</h4>
          </div>
          </Link>
        ))}
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default CrewnecksTemplate;