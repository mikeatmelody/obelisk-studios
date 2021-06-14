import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { useLocation } from "@reach/router"

const Header = ({ menuState, setMenuState}) => {
  const location = useLocation()
  useEffect(() => {
    setMenuState(false)
  }, [location])
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <header className="header-inner">
        <div className="logo">
          <Link activeClassName="active" to="/">Obelisk Studios</Link>
        </div>
        <nav className="nav">
          <li>
            <Link activeClassName="active" to="/services">Services</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/top-picks">Top Picks</Link>
          </li>
          <li>
            <Link activeClassName="active"  to="/about">About Us</Link>
          </li>

          <li>
            <Link activeClassName="active" to="/brands">Brands</Link>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Let's work together</a>
        </div>
        <div onClick={() => setMenuState(!menuState)} 
        className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </header>
    </motion.div>
  );
};

export default Header;
