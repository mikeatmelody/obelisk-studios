import React from "react";
import { graphql } from "gatsby";
// import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
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
  const description = item.hyperLink;
  // const options = {

  // }


  const output = renderRichText(description)
  return (
    <>
      <main>
        <div className="top-picks container">
        <h2 className="tp-title">{item.title}</h2>
          <div className="thumbnail-image">
            <GatsbyImage image={image} alt={item.thumbnailImage.title} />
          </div>
          <div className="hover-image">
          <GatsbyImage image={hoverImage} alt={item.hoverImage.title} />
          </div>
          <div className="styled-list">{output}</div>
        </div>
      </main>
    </>
  );
};

export default TopPicksTemplate;
