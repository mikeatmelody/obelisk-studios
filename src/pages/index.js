import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../styles/index.scss";
import { StaticImage } from "gatsby-plugin-image";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import HomeContent from "../components/HomeContent";
import SEO from "../components/seo";

// markup
const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      <SEO title="Home" />
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Banner />
              {!loading && (
                <div className="transition-image final">
                  <motion.div
                 initial={{ opacity: 0, y: -60 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{
                   ease: "easeInOut",
                   duration: 1,
                   delay: 1.6,
                 }}
                  >
                    <StaticImage
                      src="../images/pexels-liza-summer-6347888.jpg"
                      alt="TOM"
                      placeholder="blurred"
                      layout="fullWidth"
                      aspectRatio={21 / 9}
                      loading="blurred"
                    />
                  </motion.div>
                </div>
              )}
              <div style={{marginBottom: "10vh"}}>
              <HomeContent />
              </div>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default IndexPage;
