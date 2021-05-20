import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import "../styles/index.scss";
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/Header";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import HomeContent from "../components/HomeContent"

// markup
const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <Layout>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Header />
              <Banner />
              {!loading && (
                <div className="transition-image final">
                  <motion.div
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1.6,
                    }}
                  >
                    <StaticImage
                      src="../images/pexels-liza-summer-6347888.jpg"
                      alt="TOM"
                      placeholder="blurred"
                      layout="fullWidth"
                      width={2400}
                      layoutId="main-image-1"
                    />
                  </motion.div>
                  
                </div>
              )}
              <HomeContent />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
  
    </Layout>
  );
};

export default IndexPage;
