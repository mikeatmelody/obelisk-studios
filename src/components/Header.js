import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { useLocation } from "@reach/router"
import WordMark from '../images/svg/obelisk-longhand.svg'

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
          <Link activeClassName="active" to="/">
          <WordMark />
          </Link>
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
          <li>
            <Link activeClassName="active" to="/faq">FAQ</Link>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Let's work together</a>
        </div>
        <div 
        onClick={() => setMenuState(!menuState)} 
        onKeyPress={() => setMenuState(!menuState)} 
        className="hamburger-menu"
        role="tablist">
          <span role="tab" aria-selected="false" aria-controls="tab-1-pane"></span>
          <span role="tab" aria-selected="false" aria-controls="tab-2-pane"></span>
        </div>
      </header>
    </motion.div>
  );
};

export default Header;

<div role="tablist">
	<button role="tab" aria-selected="true" aria-controls="tab-1-pane" active>
		Tab 1
	</button>
	<button role="tab" aria-selected="false" tabindex="-1" aria-controls="tab-2-pane">
		Tab 2
	</button>
	<button role="tab" aria-selected="false" tabindex="-1" aria-controls="tab-3-pane">
		Tab 3
	</button>
</div>