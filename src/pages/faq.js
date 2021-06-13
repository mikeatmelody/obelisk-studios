import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const FAQPage = () => {
  return (
    <>
      <main className="container">
        <title>FAQ</title>
        <Link className="link" to="/">Go home</Link>.
        <div className="faq">
        
          <motion.h1
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 1.4,
                  }}>
            FAQ{" "}
            <span role="img" aria-label="face with monocle">
              🧐
            </span>{" "}
          </motion.h1>
      
              <motion.div className="wrapper"
                   initial={{ opacity: 0, y: 60 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{
                     ease: "easeInOut",
                     duration: 1,
                     delay: 2,
                   }}>
            <h2>How do I place an order? </h2>
            <p>
              To place an order, please first have a look through our top
              selling products and find the items you are interested in printing
              on. Send us an email (tom@obeliskstudios.ca) with your artwork and
              a little order information (i.e. sizes, colours, quantity). If the
              garments you have in mind aren’t in our top picks, include a photo
              or description of what you are looking for in that email and we
              will happily source it for you.
            </p>
            <p>
              We will reply asap with a custom quote and mockups of all of your
              designs.
            </p>
            <p>
              Once the order details are finalized we will send you an invoice
              that is payable online. Once the payment is processed we will get
              the order into our production que.
            </p>
            <h2>What type of artwork files should I send?</h2>
            <p>
              We can work with most image files as long as they are high enough
              resolution. Prefered file types: 300 dpi JPG, AI, PDF, TIF, or
              PSD.
            </p>
            <p>We do not need multi layered images for full colour prints.</p>
            <h2>How can I rush my order?</h2>
            <p>
              To rush an order, please leave us a note in your order comments
              stating your deadline, and requesting Express shipping. We will
              follow up with a quote!
            </p>
            <h2>How many colours can you print?</h2>
            <p>
              Screen printing - up to 6 colour designs, DTG digital printer -
              full colour artwork. Send us your artwork and we'll let you know
              what the best way to print will be.
            </p>
            <h2>How much does the printing cost?</h2>
            <p>
              The cost of printing or embroidery is based on the quantity of
              garments you order as well as the amount of colours in your
              design. Please email us your artwork and we will promptly send you
              a quote.
            </p>
            <h2>How soon can I have an order?</h2>
            <p>
              It depends on the order. If you are just looking for blanks, it
              varies based on where you are located and the quantity. We have
              done local orders within 3 days, and overseas that took 2 weeks!
              When decorations are involved (printing, embroidery) that process
              usually takes between 7-10 days turnaround.
            </p>
            <h2>How can I check the status of my order?</h2>
            <p>
              Email tom@obeliskstudios.ca with an order status request. Be sure
              to provide us with your order number.
            </p>
            <h2>
              Are the garments shown on your site the only ones you have access
              to?
            </h2>
            <p>
              Absolutely not! We have a *ton* more options, in pretty much every
              style of clothing you could think of! Just reach out on the
              contact us page and send a request in for what you’re looking for!
            </p>
            <h2>Do you have a minimum order?</h2>
            <p>
              Our minimum orders with printing are 12 units - Embroidery
              minimums are 24, and blanks have no minimums! Sometimes this can
              change, we have done embroidery orders of 12 but the cost is
              definitely higher.
            </p>
            <h2>Do you ship to the USA?</h2>
            <p>We do!</p>
            </motion.div>

        </div>
      </main>
    </>
  );
};

export default FAQPage;
