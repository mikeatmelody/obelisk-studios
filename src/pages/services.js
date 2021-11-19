import * as React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo";
import HomeContent from "../components/HomeContent";
import { StaticImage } from "gatsby-plugin-image";

const ServicesPage = () => {
  return (
    <>
      <SEO title="Services" />

      <main>
        <title>Services</title>

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.6,
          }}
        >
          <div className="services container">

              <div className="left-wrap">
              <HomeContent />
              </div>
              <div className="right-wrap">
              <StaticImage
                src="../images/OBL Filler 7 1.jpg"
                alt="Services Image"
                layout="fullWidth"
                aspectRatio={16 / 9}
              />
              </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default ServicesPage;
