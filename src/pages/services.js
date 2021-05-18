import * as React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/Header";

import { motion } from "framer-motion";


const ServicesPage = () => {
  return (
    <Layout>
      <main className="services container">
        <title>Services</title>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.6,
          }}
        >
        <h1>Services</h1>
        <p className="copy">
          Obelisk Studios is a multi-faceted print shop that specializes in
          screen printing and design. Proudly located in East Vancouver, our
          friendly in-house staff is here to help bring your designs to life.
          Screen Printing and Embroidery pricing are based on the quantity and
          number of colours used in your design. Please contact for a custom
          quote. ​ Our services include: Multi-Colour Screen Printing -
          Plastisol Inks Direct to Garment (DTG) Digital Printing Embroidery
          Eco-Friendly Water Based Screen Printing Graphic Design Digital
          Printing (stickers, buttons, decals)
        </p>
        </motion.div>
      </main>
    </Layout>
  );
};

export default ServicesPage;
