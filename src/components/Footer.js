import React, { useEffect } from "react";

// Scroll Animations
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const Footer = () => {
  const animation = useAnimation();
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  });
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  return (
    <motion.footer
      className="footer"
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <div className="content container">
        <p className="col-1">Give us a call! <a href="tel:7788062310">778-806-2310</a></p>
        <p className="col-2"><a href="mailto:tom@obeliskstudios.ca">tom@obeliskstudios.ca</a></p>
        <p className="col-3">955 E. Hastings Street</p>
        <p className="col-4">Vancouver, BC</p>
        <div className="footer__links"></div>
      </div>
    </motion.footer>
  );
};
export default Footer;
