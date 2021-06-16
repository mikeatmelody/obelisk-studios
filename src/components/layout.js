import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { motion, AnimatePresence } from "framer-motion";
//Hooks

//components
import Loading from "../components/loading";
// import Header from "../components/Header";
import NavBar from "../components/Nav/NavBar"

import Footer from "../components/Footer";


//styles
import "../styles/index.scss";

const Layout = ({ children }) => {
  const [finishLoading, setFinishLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false);
    }, 3000);
  }, []);

  return (
    <motion.div>
      <AnimatePresence>
        {finishLoading ? (
          <Loading key={"home2"} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NavBar />

            <div>
              <main>{children}</main>
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
