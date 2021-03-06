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
              about any garment you are looking for.
            </p>
            <p>
              The items featured below are a collection of our most commonly
              sold apparel. Please feel free to request any custom brand and we
              will do our best to supply it.
            </p>
            <p>
              <b style={{ fontWeight: "600" }}>Please note:</b> that with all
              garments, the cost of XXL, XXXL+ sizes tends to be slightly higher
              then XS-XL.
            </p>
            <Link
              style={{
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "underline",
              }}
              to="/contact"
            >
              Contact us if you have questions
            </Link>
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
          {/* <div className="container"> */}
          <h1 className="title">Top Picks</h1>
          <p></p>
          <div className="card-grid">
            <Link to="/top-picks/t-shirts">
              <div className="top-pick-card-1">
                <h1>T-Shirts</h1>
                <StaticImage
                  src="../images/tee.png"
                  alt="T Shirt Top Picks"
                  layout="fullWidth"
                  loading="lazy"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link to="/top-picks/hoodies-and-jackets">
              <div className="top-pick-card-2">
                <h1>Hoodies & Jackets</h1>
                <StaticImage
                  src="../images/jack_hood.png"
                  alt="Hoodie Top Picks"
                  layout="fullWidth"
                  loading="lazy"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link to="/top-picks/crewnecks">
              <div className="top-pick-card-3">
                <h1>Crewnecks</h1>
                <StaticImage
                  src="../images/crew.png"
                  alt="Crewneck Top Picks"
                  layout="fullWidth"
                  loading="lazy"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link to="/top-picks/sweatpants">
              <div className="top-pick-card-4">
                <h1>Sweatpants</h1>
                <StaticImage
                  src="../images/sweat.png"
                  alt="Pants Top Picks"
                  layout="fullWidth"
                  loading="lazy"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link to="/top-picks/bags-and-hats">
              <div className="top-pick-card-5">
                <h1>Bags & Hats</h1>
                <StaticImage
                  src="../images/hat_bag.png"
                  alt="Bags and Hats Top Picks"
                  layout="fullWidth"
                  loading="lazy"
                  objectFit="cover"
                />
              </div>
            </Link>
            <Link to="/top-picks/kids">
              <div className="top-pick-card-6">
                <h1>Kids</h1>
                <StaticImage
                  src="../images/b.png"
                  alt="Bags and Hats Top Picks"
                  layout="fullWidth"
                  loading="lazy"
                  objectFit="cover"
                />
              </div>
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default TopPicksPage;
