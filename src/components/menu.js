import React from "react";
import { Link } from "gatsby";

import { motion, AnimatePresence } from "framer-motion";

//icons
import { Close } from "../icons/icons.js";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const Menu = ({ setMenuState, menuState }) => {
  return (
    <>
      <AnimatePresence>
        {menuState && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ ...transition, duration: 1 }}
            className="menu"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ...transition }}
              onClick={() => setMenuState(!menuState)}
              className="close"
            >
              CLOSE <Close />
            </motion.div>
            {/* <div className="container"> */}
            <motion.div className="menu-inner">
              <motion.ul>
                <li>
                  <motion.span
                    initial={{ y: 300, skewY: 40 }}
                    animate={{
                      y: 0,
                      skewY: 0,
                    }}
                    exit={{ y: 300, skewY: 40 }}
                    transition={{ delay: 0.1, ...transition }}
                  >
                    <Link to="/services">Services</Link>
                  </motion.span>
                </li>
                <li>
                  <motion.span
                    initial={{ y: 300, skewY: 40 }}
                    animate={{
                      y: 0,
                      skewY: 0,
                    }}
                    exit={{ y: 300, skewY: 40 }}
                    transition={{ delay: 0.2, ...transition }}
                  >
                    <Link to="/top-picks">Top Picks</Link>
                  </motion.span>
                </li>
                <li>
                  <motion.span
                    initial={{ y: 300, skewY: 40 }}
                    animate={{
                      y: 0,
                      skewY: 0,
                    }}
                    exit={{ y: 300, skewY: 40 }}
                    transition={{ delay: 0.2, ...transition }}
                  >
                    <Link to="/about">About Us</Link>
                  </motion.span>
                </li>
                <li>
                  <motion.span
                    initial={{ y: 300, skewY: 40 }}
                    animate={{
                      y: 0,
                      skewY: 0,
                    }}
                    exit={{ y: 300, skewY: 40 }}
                    transition={{ delay: 0.2, ...transition }}
                  >
                    <Link to="/brands">Brands</Link>
                  </motion.span>
                </li>
                <li>
                  <motion.span
                    initial={{ y: 300, skewY: 40 }}
                    animate={{
                      y: 0,
                      skewY: 0,
                    }}
                    exit={{ y: 300, skewY: 40 }}
                    transition={{ delay: 0.2, ...transition }}
                  >
                    <Link to="/faq">FAQ</Link>
                  </motion.span>
                </li>
                <li>
                  <motion.span
                    initial={{ y: 300, skewY: 40 }}
                    animate={{
                      y: 0,
                      skewY: 0,
                    }}
                    exit={{ y: 300, skewY: 40 }}
                    transition={{ delay: 0.2, ...transition }}
                  >
                    <Link to="/contact">Let's work together</Link>
                  </motion.span>
                </li>
                <li>
                  <motion.span
                    initial={{ y: 300, skewY: 40 }}
                    animate={{
                      y: 0,
                      skewY: 0,
                    }}
                    exit={{ y: 300, skewY: 40 }}
                    transition={{ delay: 0.3, ...transition }}
                  >
                    <a href="mailto: tom@obeliskstudios.ca">
                      tom@obeliskstudios.ca
                    </a>
                  </motion.span>
                </li>
              </motion.ul>
            </motion.div>
            {/* </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
