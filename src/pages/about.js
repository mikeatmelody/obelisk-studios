import * as React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo";

const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <main className="about container">

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.6,
          }}
        >
          <div className="about-section">
            <p className="p-text">
              Since 2018 we have been providing quality garments and decoration
              for a multitude of great clients. We strive to “make it work with
              your budget”. Reaching a happy common ground and delivering you
              the best product we can is our goal, and mission. Below are some
              highlights of our most recent work! <br/>
              <a className="ig" href="https://instagram.com/obeliskstudios.ca/" target="_blank" rel="noreferrer">Instagram</a>
            </p>
            
          </div>
        </motion.div>
      </main>

    </>
  );
};

export default AboutPage;
