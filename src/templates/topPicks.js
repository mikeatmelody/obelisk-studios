import React from "react";
import { graphql } from "gatsby";
// import { BLOCKS, MARKS, Text } from "@contentful/rich-text-types"
// import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
        gatsbyImageData(width: 500, placeholder: BLURRED)
      }
      hoverImage {
        title
        gatsbyImageData(width: 500, placeholder: BLURRED)
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

  // const Bold = ({ children }) => <span className="bold">{children}</span>
  // const Text = ({ children }) => <p className="align-center">{children}</p>
  // const description = item.hyperLink.raw;
  // console.log(description);
  // const options = {

  // }
  // const output = renderRichText(description, options)
  return (
    <>
      <main>
        <div className="top-picks container">
          <div className="thumbnail-image">
            
            <GatsbyImage image={image} alt={item.thumbnailImage.title} />

            <h2 className="tp-title">{item.title}</h2>
            <GatsbyImage image={hoverImage} alt={item.hoverImage.title} />
          </div>
          {/* <div><Bold>{output}</Bold></div> */}
        </div>
      </main>
    </>
  );
};

export default TopPicksTemplate;
