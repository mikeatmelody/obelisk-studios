import * as React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo";
// import { graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
// // import SwiperCore, { EffectCube } from 'swiper';
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/effect-cube/effect-cube.scss';


// // install Virtual module
// SwiperCore.use([EffectCube]);

const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <main className="about container">
        <motion.div
          initial={{ opacity: 0, y: 72 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.6,
          }}
        >
          <div className="about-section">
            <div className="p-text">
              <div className="sh-logo">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M118.7 0L0 180H180L118.7 0ZM119.54 29.2592L166.984 164.655H28.3634L119.54 29.2592Z"
                    fill="black"
                  />
                  <path
                    d="M148.572 151.08H51.2062L116.846 51.1953L148.572 151.08Z"
                    fill="black"
                  />
                </svg>
              </div>
              Since 2018 we have been providing quality garments and decoration
              for a multitude of great clients. We strive to “make it work with
              your budget”. Reaching a happy common ground and delivering you
              the best product we can is our goal, and mission. Below are some
              highlights of our most recent work! <br />
              <a
                className="ig"
                href="https://instagram.com/obeliskstudios.ca/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              {/* <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                // effect="cube"
                watchSlidesProgress
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {data.slideShow.edges.map(({ node }) => (
                  <SwiperSlide key={node.id}>
                    <GatsbyImage
                      image={node.childImageSharp.gatsbyImageData}
                      alt={node.base}
                    />
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default AboutPage;

// export const pageQuery = graphql`
//   query {
//     slideShow: allFile(
//       filter: { relativeDirectory: { eq: "about-slider" } }
//       sort: { fields: base, order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           relativePath
//           base
//           childImageSharp {
//             gatsbyImageData(
//               width: 900
//               # height: 600
//               # layout: FULL_WIDTH
//               placeholder: BLURRED
//               quality: 100
//               blurredOptions: { width: 100 }
//               # transformOptions: { cropFocus: CENTER, fit: COVER }
//             )
//           }
//         }
//       }
//     }
//   }
// `;
