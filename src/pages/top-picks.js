import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const TopPicksPage = () => {
  return (
    <>
      <SEO title="Top Picks" />
      <main className="top-picks-page container">
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
            <h1 className="text-grid-title">
              OUR MOST POPULAR CLOTHING OPTIONS
            </h1>
            <p>
              We have many options available through our wholesalers for just
              about any garment you are looking for. The items featured below
              are a collection of our most commonly sold apparel. Please feel
              free to request any custom brand and we will do our best to supply
              it.
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
              <Link to="/top-picks/t-shirts">
                <div className="top-pick-card-1">
                  <h1>T-Shirts</h1>
                  <StaticImage
                    src="../images/TSHIRTS.jpg"
                    alt="T Shirt Top Picks"
                    // layout="fullWidth"
                    loading="lazy"
                    wi={600}
                    objectFit="cover"
                    // transformOptions={{ grayscale: true }}
                  />
                </div>
              </Link>
              <Link to="/top-picks/hoodies">
                <div className="top-pick-card-2">
                  <h1>Hoodies</h1>
                  <StaticImage
                    src="../images/HOODIE.jpg"
                    alt="Hoodie Top Picks"
                    // layout="fullWidth"
                    loading="lazy"
                    width={600}
                    objectFit="cover"
                    // transformOptions={{ grayscale: true }}
                  />
                </div>
              </Link>
              <Link to="/top-picks/crewnecks">
                <div className="top-pick-card-3">
                  <h1>Crewnecks</h1>
                  <StaticImage
                    src="../images/crewneck.jpg"
                    alt="Crewneck Top Picks"
                    // layout="fullWidth"
                    loading="lazy"
                    width={600}
                    objectFit="cover"
                    // transformOptions={{ grayscale: true }}
                  />
                </div>
              </Link>
              <Link to="/top-picks/sweatpants">
                <div className="top-pick-card-4">
                  <h1>Sweatpants</h1>
                  <StaticImage
                    src="../images/SWEATPANTS.jpg"
                    alt="Pants Top Picks"
                    // layout="fullWidth"
                    loading="lazy"
                    width={600}
                    objectFit="cover"
                    // transformOptions={{ grayscale: true }}
                  />
                </div>
              </Link>
              <Link to="/top-picks/bags-and-hats">
                <div className="top-pick-card-5">
                  <h1>Bags & Hats</h1>
                  <StaticImage
                    src="../images/bags-and-hats.jpg"
                    alt="Bags and Hats Top Picks"
                    // layout="fullWidth"
                    loading="lazy"
                    width={600}
                    objectFit="cover"
                    // transformOptions={{ grayscale: true }}
                  />
                </div>
              </Link>
              <Link to="/top-picks/kids">
                <div className="top-pick-card-6">
                  <h1>Kids</h1>
                  <StaticImage
                    src="../images/KIDS.jpg"
                    alt="Bags and Hats Top Picks"
                    // layout="fullWidth"
                    loading="lazy"
                    width={600}
                    objectFit="cover"
                    // transformOptions={{ grayscale: true }}
                  />
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
