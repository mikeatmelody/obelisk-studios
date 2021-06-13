import * as React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="about container">
        <Header />
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
              highlights of our most recent work!
            </p>
            {/* <StaticImage
              src="../images/pexels-kai-pilger-996329.jpg"
              alt="About Image"
              className="about-image"
              layout="fullWidth"
              aspectRatio={16 / 9}
            /> */}
          </div>
        </motion.div>
      </main>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
