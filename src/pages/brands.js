import * as React from "react";
// import { Link } from "gatsby"
import { motion } from "framer-motion";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const BrandsPage = () => {
  return (
    <>
      <SEO title="Brands" />
      <main className="brands container">
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
        >

          <div className="brand-titles">
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
            {/* <div className="catalog-banner">
            <StaticImage
              src="../images/pexels-tembela-bohle-1884583.jpg"
              alt="Catalog Backdrop Image"
              layout="fullWidth"
              aspectRatio={21 / 9}
              transformOptions={{ grayscale: true }}
            />
            </div> */}
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default BrandsPage;
