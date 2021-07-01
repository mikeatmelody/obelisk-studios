import * as React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo";
// import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// import BrandsLogo from '../components/BrandsLogos'

// run template query
// export const query = graphql`
//   {
//    allBrands: allContentfulBrands {
//       nodes {
//         brandName
//         logo {
//           id
//           gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, backgroundColor: "#f0eff1", resizingBehavior: FILL)
//           title
//         }
//       }
//     }
//   }
// `;

const BrandsPage = () => {
  // const brands = allBrands.nodes;
  return (
    <>
      <SEO title="Brands" />
      <main className="container">
        <title>Brands</title>
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delayChildren: 0.5,
            staggerDirection: -1,
            ease: "easeInOut",
            duration: 1,
          }}
          className="brands"
        >
          <StaticImage 
          src="../images/brand-logos.png" 
          alt="brand-logos"
          layout="fullWidth" />

        </motion.div>
      </main>
    </>
  );
};

export default BrandsPage;



          // {/* {brands.map((brand, index) => (
          //   <div className="brands-section container" key={index}>
          //     <GatsbyImage
          //       key={index}
          //       image={getImage(brand.logo)}
          //       alt={brand.logo.title}
          //     />
          //     {/* <h1>{brand.brandName}</h1> */}
          //     </div>
          //   ))} */}