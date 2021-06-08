import React, { useEffect } from "react";

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
      <div className="home-content-section container">
        <h1>Services</h1>
        <p className="copy">
          Obelisk Studios is a multi-faceted print shop that specializes in
          screen printing and design. Proudly located in East Vancouver, our
          friendly in-house staff is here to help bring your designs to life.
          Screen Printing and Embroidery pricing are based on the quantity and
          number of colours used in your design. Please contact for a custom
          quote.
        
        <ul className="list">
         <h2>Our services include:</h2>
          <li>Multi-Colour Screen Printing - Plastisol Inks</li>
          <li>Direct to Garment (DTG) Digital Printing</li>
          <li>Embroidery</li>
          <li>Eco-Friendly Water Based Screen Printing</li>
          <li>Graphic Design Digital Printing (stickers,buttons, decals)</li>
        </ul>
        </p>
      </div>
    </motion.div>
  );
};

export default HomeContent;
