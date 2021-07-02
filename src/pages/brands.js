import * as React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";

const BrandsPage = () => {
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
          <div>
            <StaticImage
              src="../images/brand-logos.png"
              alt="brand-logos"
              layout="fullWidth"
              loading="lazy"
            />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default BrandsPage;
