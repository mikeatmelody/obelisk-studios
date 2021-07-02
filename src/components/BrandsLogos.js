// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// export default function BrandsLogos() {
//   const data = useStaticQuery(graphql`
//     query BrandsQuery {
//       allContentfulBrands {
//         nodes {
//           brandName
//           logo {
//             id
//             gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
//             title
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <div className="container">
//       {data.allContentfulBrands.nodes.map(({ node, i }) => {
//         <div>
//           <GatsbyImage
//             key={i}
//             image={getImage(node.logo)}
//             alt={node.logo.title}
//           />
//           ;
//         </div>;
//       })}
//     </div>
//   );
// }
