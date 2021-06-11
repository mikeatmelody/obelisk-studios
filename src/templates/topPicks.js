import React from "react";
import { graphql } from "gatsby";
// import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout";
import Header from "../components/Header";
import Footer from '../components/Footer';
// import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
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

const TopPicksTemplate = ({ data: { item }, location }) => {
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
        <Breadcrumb className="breadcrumb" location={location} crumbLabel={item.title} />
          <div className="thumbnail-image">
            <GatsbyImage image={image} alt={item.thumbnailImage.title} />
            <h2 className="tp-title">{item.title}</h2>
            <GatsbyImage image={hoverImage} alt={item.hoverImage.title} />
          </div>
          {/* render the rich text format description */}
     
        {/* {documentToReactComponents(item.hyperLink.raw, options)} */}
 
        </div>
      </main>
      <Footer/>
    </Layout>
  );
};

export default TopPicksTemplate;
