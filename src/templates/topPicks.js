import React from "react";
import { graphql } from "gatsby";
// import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'

// run template query

export const query = graphql`
  query TopPicksTemplateQuery($slug: String!) {
    item: contentfulTopPicks(slug: { eq: $slug }) {
      id
      slug
      contentType
      title
      price
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
        <div className="container" style={{fontSize: '20px', fontWeight: 600, textDecoration: 'underline', textTransform: 'capitalize'}}>
        <Link className to={`/top-picks/${item.contentType}`} >Back to {item.contentType}</Link>
        </div>
      <h2 style={{fontSize: "20px", fontWeight: 600}} className="tp-title container">{item.title}</h2>
      <p className="container"><i>${item.price}/unit</i></p>
        <div className="top-picks container">
        
          <div className="thumbnail-image container">
            <GatsbyImage image={image} alt={item.thumbnailImage.title} />
          </div>
          <div className="hover-image container">
          <GatsbyImage image={hoverImage} alt={item.hoverImage.title} />
          </div>
          <div className="styled-list container">{output}</div>
        </div>
      </main>
    </>
  );
};

export default TopPicksTemplate;
