import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const TopPicksPage = () => {
  return (
    <>
      <SEO title="Top Picks" />
      <main className="top-picks container">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.6,
          }}
        >
          <div className="text-grid">
            <h1>OUR MOST POPULAR CLOTHING OPTIONS</h1>
            <p>
              We have many options available through our wholesalers for just
              about any garment you are looking for. These items featured here
              are just a collection of our most commonly sold t-shirts, hoodies,
              crewnecks and totes. Please feel free to request any custom brand
              and we will do our best to supply it.
            </p>
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
              <Link to="/t-shirts">
                <div className="top-pick-card-1">
                  <h1>T-Shirts</h1>
                  <StaticImage
                    src="../images/TSHIRTS.jpg"
                    alt="T Shirt Top Picks"
                    layout="fullWidth"
                    loading="lazy"
                    // aspectRatio={9 / 16}
                    objectFit="cover"
                    // transformOptions={{ grayscale: true }}
                  />
                </div>
              </Link>
              <Link to="/hoodies">
                <div className="top-pick-card-2">
                  <h1>Hoodies</h1>
                  <StaticImage
                    src="../images/HOODIE.jpg"
                    alt="Hoodie Top Picks"
                    layout="fullWidth"
                    loading="lazy"
                    // aspectRatio={9 / 16}
                    objectFit="cover"
                    // transformOptions={{ grayscale: true }}
                  />
                </div>
              </Link>
              <Link to="/crewnecks">
                <div className="top-pick-card-3">
                  <h1>Crewnecks</h1>
                </div>
              </Link>
              <Link to="/pants">
                <div className="top-pick-card-4">
                  <h1>Pants</h1>
                </div>
              </Link>
              <Link to="/bags-and-hats">
                <div className="top-pick-card-5">
                  <h1>Bags & Hats</h1>
                </div>
              </Link>
              <Link to="/kids">
                <div className="top-pick-card-6">
                  <h1>Kids</h1>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default TopPicksPage;
