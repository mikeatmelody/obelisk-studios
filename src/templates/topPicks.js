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
  const description = item.hyperLink;
  // const options = {

  // }



// const PrevPage = () => (
//   <div>
//     <Link
//       to={`/nextpage`}
//       state={{ prevPath: location.pathname }}
//     >
//       Next Page
//     </Link>
//   </div>
// )

// const NextPage = (props) => (
//   <div>
//     <p>previous path is: {props.location.state.prevPath}</p>
//   </div>
// );


  const output = renderRichText(description)
  return (
    <>
      <main>
        {/* <Link to={location.prevPath}>Prev</Link> */}
      <h2 style={{fontSize: "20px", fontWeight: 600}} className="tp-title container">{item.title}</h2>
        <div className="top-picks container">
        
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
