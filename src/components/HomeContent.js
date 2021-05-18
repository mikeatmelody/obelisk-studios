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
      className="home-content-section container"
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
      <h1>Services</h1>
      <p className="copy">
        Pressing Matters is a multi-faceted print shop that specializes in
        screen printing and design. Proudly located in East Vancouver, our
        friendly in-house staff is here to help bring your designs to life.
        Screen Printing and Embroidery pricing are based on the quantity and
        number of colours used in your design. Please contact for a custom
        quote. ​ Our services include: Multi-Colour Screen Printing - Plastisol
        Inks Direct to Garment (DTG) Digital Printing Embroidery Eco-Friendly
        Water Based Screen Printing Graphic Design Digital Printing (stickers,
        buttons, decals)
      </p>
    </motion.div>
  );
};

export default HomeContent;
