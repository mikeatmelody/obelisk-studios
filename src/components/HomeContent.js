import React, { useEffect } from "react";
import { Link } from "gatsby";
//Scroll Observer
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const HomeContent = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  return (
    <motion.div
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <div className="home-content-section">
        <h1>Services</h1>
        <div className="copy">
          Obelisk Studios is wholesale garment supplier, with an in house print
          shop that specializes in screen printing and design. We are proudly
          located in East Vancouver. Screen Printing and Embroidery pricing is
          based on the quantity of garments and number of colours used in your
          design. Please contact us for a custom quote.
          <ul className="list">
            <div>
              <h2>Our services include:</h2>
            </div>
            <li>Multi-Colour Screen Printing - Plastisol Inks</li>
            <li>Direct to Garment (DTG) Digital Printing</li>
            <li>Embroidery</li>
            <li>Eco-Friendly Water Based Screen Printing</li>
            <li>Graphic Design Digital Printing (stickers,buttons, decals)</li>
          </ul>
          <br />
          Minimum orders with printing are 12 units - Embroidery minimums are
          24, and blanks have no minimums!
        </div>
        <br/>
        <Link to='/top-picks'>Check out our top picks</Link>
        {/* <div className="cta-top-picks">
        <Link to='/top-picks'>Checkout our Top Picks</Link>
        </div> */}
      </div>
    </motion.div>
  );
};

export default HomeContent;
