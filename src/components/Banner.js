import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 3,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  const BannerRowLong = [
    "Premium\xa0Blanks",
    "\xa0Embroidery",
    "\xa0Screen\xa0Printing"
  ]

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 3000);
  }, []);
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"Obelisk"} />
      <BannerRowCenter title={(BannerRowLong.join(', '))} playMarquee={playMarquee} />
      <BannerRowBottom title={"Studios"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, i) => (
      <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}
        key={i}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        <span className='row-message'>
        Providing quality garments, printing and embroidery at competitive rates, regardless of budget.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 3 }}
        className='marquee__inner'>
        <AnimatedLetters key="al-1-2" title={title} disabled />
        <AnimatedLetters key="al-2-2-3" title={title} />
        <AnimatedLetters key="al-3-3-5" title={title} disabled />
        <AnimatedLetters key="al-4-5-6" title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;