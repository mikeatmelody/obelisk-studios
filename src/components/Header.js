import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby"

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>

        <div className='logo'><Link to="/">Obelisk Studios</Link></div>
        <nav className='nav'>
          <li>
            <a href='/catalog'>Catalog</a>
          </li>
          <li>
            <a href='/about'>About Us</a>
          </li>
          <li>
            <a href='/services'>Services</a>
          </li>
        </nav>
        <div className='contact'>
          <a href='/contact'>Let's work together</a>
        </div>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;