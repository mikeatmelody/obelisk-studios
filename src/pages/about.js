import * as React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/Header";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <Layout>
      <main className="container">
        <title>About Us</title>
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
          <p className="p-text">
            Obelisk Studios is a boutique print and design workshop
            located in East Vancouver. We specialize in merchandise, design and
            branding, with an emphasis on the creative and fitness industries. A
            few of our areas of expertise include screen printing, embroidery,
            direct to garment printing (DTG), merchandise procurement and
            consultation services. ​ Our humble roots began silk-screening
            posters and t-shirts for independent bands out of a tiny living
            room. In a few short years, our business has grown into a
            multifaceted firm that can undertake any project and deliver on time
            and on budget. Please don’t hesitate to get in touch.
          </p>
        </motion.div>
      </main>
    </Layout>
  );
};

export default AboutPage;
