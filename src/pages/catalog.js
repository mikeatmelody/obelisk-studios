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
      
        <motion.div
                 initial={{ opacity: 0, y: -60 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{
                   ease: "easeInOut",
                   duration: 1,
                   delay: 1.6,
                 }}
                  >
         <div className="catalog-brand-titles">
         <h1 className="brand-title">OUR BRANDS</h1>
          <ul className="left-col">
            <li>ADIDAS</li>
            <li>GILDAN</li>
            <li>ALSTYLE</li>
            <li>ATC</li>
            <li>AMERICAN APPAREL</li>
            <li>ANVIL</li>
            <li>BELLA + CANVAS</li>
            <li>CALVIN KLEIN</li>
            <li>COLUMBIA</li>
            <li>COAL HARBOUR</li>
            <li>CHAMPION</li>
            <li>CALLAWAY</li>
            <li>DICKIES</li>
            <li>DRY FRAME</li>
            <li>FLEECE FACTORY</li>
            <li>FRUIT OF THE LOOM</li>
            <li>INDEPENDENT</li>
          </ul>
          <ul className="right-col">
          <li>KING ATHLETICS</li>
            <li>KOI</li>
            <li>LOS ANGELES APPAREL</li>
            <li>M&O</li>
            <li>NEW ERA</li>
            <li>NORTH FACE</li>
            <li>NEW BALANCE</li>
            <li>NIKE</li>
            <li>OAKLEY</li>
            <li>PUMA</li>
            <li>THREADFAST APPAREL</li>
            <li>VALUCAP</li>
            <li>Q-TEES</li>
            <li>VANCOUVER APPAREL</li>
            <li>FLEXFIT</li>
            <li>BURNSIDE APPAREL</li>
            <li>RABBIT SKINS</li>
          </ul>
          <StaticImage
            src="../images/pexels-tembela-bohle-1884583.jpg"
            alt="Catalog Backdrop Image"
            layout="fullWidth"
            aspectRatio={21 / 9}
            transformOptions={{ grayscale: true}}
            // className="catalog-banner"
          />
          </div>
          </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 2.6,
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
