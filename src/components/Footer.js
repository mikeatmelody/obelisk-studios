import React, { useEffect, useRef } from "react"

// Scroll Animations
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"


const Footer = () => {
    const animation = useAnimation()
    const [footerRef, inView] = useInView({
      triggerOnce: true,
      rootMargin: "300px",
    })
    useEffect(() => {
      if (inView) {
        animation.start("visible")
      }
    }, [animation, inView])
    return (
        <motion.footer className="footer"
        ref={footerRef}
        animate={animation}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9], delay: 5 },
          },
          hidden: { opacity: 0, y: 72 },
        }}>
            <div className="footer__wrapper container">
                <div className="footer__content">
                    <p>604-369-6472</p>
                    <p>tom@obeliskstudios.ca</p>
                    <p>955 E. Hastings Street</p>
                    <p>Vancouver, BC</p>
                    <div className="footer__links">

                    </div>
                </div>

            </div>
        </motion.footer>
    )
}
export default Footer