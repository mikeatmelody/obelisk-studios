import * as React from "react";
// import { Link } from "gatsby"
import { motion } from "framer-motion";
import SEO from "../components/seo";

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact" />
      <main className="container">
        <title>Contact Us</title>

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
            Please send us a detailed message, and upload any artwork you may
            have. You can expect a fast reply. We're happy to answer any and all
            questions and can easily provide mockups at your request.
          </p>
          {/* <p>
            <a className="email" href="mailto:tom@obeliskstudios.ca">
              tom@obeliskstudios.ca
            </a>
            <a className="phone" href="tel:6043696472">
              604-369-6472
            </a>
          </p> */}
          <form method="POST" action="/success" className="form-section" data-netlify="true" name="contact">
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
              <label className="upload">
                Upload Media: <input type="file" name="picture" />
              </label>
            </p>
            <button type="submit">Send</button>
            <input className="clear" type="reset" value="Clear" />
          </form>
        </motion.div>
      </main>

    </>
  );
};

export default ContactPage;
