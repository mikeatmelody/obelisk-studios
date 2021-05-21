import * as React from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/Header";

import { motion } from "framer-motion";
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
        <SEO title="Contact" />
      <main className="container">
        <title>Contact Us</title>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.6,
          }}
          className="contact-section"
        >
          <h1 className="contact-title">CONTACT US FOR A CUSTOM QUOTE</h1>
          <p className="contact-copy">
            Please send us a message with the details of your order and upload
            your artwork. We will respond right away with a mockup and quote for
            your job. After the quote and mockup are approved we will send you
            an invoice that is payable online. The average time for completed
            orders is 5-10 business days.
          </p>
          <p>
            <a className="email" href="mailto:tom@obeliskstudios.ca">
              tom@obeliskstudios.ca
            </a>
            <a className="phone" href="tel:6043696472">
              604-369-6472
            </a>
          </p>
          <form method="post" action="#" className="form-section">
            <label className="form-name">
              Name:
              <input
                className="name-input"
                type="text"
                name="name"
                id="name"
                placeholder="name"
              />
            </label>
            <br />
            <label className="form-email">
              Email:
              <input type="email" name="email" id="email" placeholder="email" />
            </label>
            <br />
            <label className="form-subject">
              Subject:
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
              />
            </label>
            <br />
            <label className="form-message">
              Project Details:
              <textarea name="message" id="message" rows="1" />
            </label>
            <p>
              <label>
                Upload Media: <input type="file" name="picture" />
              </label>
            </p>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>
        </motion.div>
      </main>
    </Layout>
  );
};

export default ContactPage;
