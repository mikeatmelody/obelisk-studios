import * as React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/Header";

import { motion } from "framer-motion";
import SEO from "../components/seo"

const CatalogPage = () => {
  return (
    <Layout>
        <SEO title="Catalog" />
      <main className="catalog container">
        <title>Catalog</title>
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
          <div className="container">
            <h1 className="title">Our Brands</h1>
            <ul>
              <li>DRYFRAME</li>
              <li>COAL HARBOUR</li>
              <li>THE AUTHENTIC T-SHIRT COMPANY</li>
              <li>GILDAN</li>
            </ul>
            <ul>
              <li>KOI</li>
              <li>OGIO</li>
              <li>NEW ERA</li>
            </ul>
          </div>
        </motion.div>
      </main>
    </Layout>
  );
};

export default CatalogPage;
