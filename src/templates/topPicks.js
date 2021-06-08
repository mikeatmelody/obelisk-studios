import React from "react";
import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import Header from "../components/Header";
// import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

// run template query

export const query = graphql`
  query TopPicksTemplateQuery($slug: String!) {
    item: contentfulTopPicks(slug: { eq: $slug }) {
      id
      slug
      title
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

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const TopPicksTemplate = ({ data: { item } }) => {
  const image = getImage(item.thumbnailImage);
  const hoverImage = getImage(item.hoverImage);

  // const options = {

  //   // options for rich text formating

  // };

  return (
    <Layout>
      <Header />
      <main className="container">
        <div className="top-picks">
          
          <div className="thumbnail-image">
            <GatsbyImage image={image} alt={item.thumbnailImage.title} />
            <h2 className="tp-title">{item.title}</h2>
            <GatsbyImage image={hoverImage} alt={item.hoverImage.title} />
          </div>
          {/* render the rich text format description */}
          {/*   
        <main>{documentToReactComponents(item.description.json, options)}</main> 
        */}
        </div>
      </main>
    </Layout>
  );
};

export default TopPicksTemplate;
