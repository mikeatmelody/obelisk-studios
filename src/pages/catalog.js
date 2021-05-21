import * as React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/Header";

import { motion } from "framer-motion";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CatalogPage = () => {
  return (
    <Layout>
      <SEO title="Catalog" />
      <main className="catalog container">
        <Header />
        <div className="catalog-brand-titles">
          <StaticImage
            src="../images/pexels-tembela-bohle-1884583.jpg"
            alt="Catalog Backdrop Image"
            layout="fullWidth"
            aspectRatio={21 / 9}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.6,
          }}
        >
          <div className="container">
            <h1 className="title">Top Picks</h1>
            <div className="card-grid">
            <div  className="top-pick-card-1"/>
            <div  className="top-pick-card-2"/>
            <div  className="top-pick-card-3"/>
            </div>
          </div>
        </motion.div>
      </main>
    </Layout>
  );
};

export default CatalogPage;
