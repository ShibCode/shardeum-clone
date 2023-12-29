import React from "react";
import { motion } from "framer-motion";

const logoVariants = {
  expanded: {
    width: "218px",
    transition: { ease: [0.12, 0, 0.39, 0], duration: 0.35 },
  },
  condensed: {
    width: "50px",
    transition: { ease: [0.12, 0, 0.39, 0], duration: 0.35, delay: 0.2 },
  },
};

const boxVariants = {
  show: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
  hide: {
    opacity: 0,
  },
};

const Logo = ({ isScrolled }) => {
  return (
    <div className="relative z-0 h-[70px] flex items-center w-[218px]">
      <motion.div
        variants={boxVariants}
        initial="hide"
        animate={isScrolled ? "show" : "hide"}
        className="absolute w-[68px] h-[70px] -left-[9px] bg-[red] -z-10 rounded-[20px]"
      ></motion.div>

      <motion.div
        variants={logoVariants}
        initial="expanded"
        animate={isScrolled ? "condensed" : "expanded"}
        className="overflow-hidden"
      >
        <img src="/logo.svg" alt="logo" className="min-w-[218px]" />
      </motion.div>
    </div>
  );
};

export default Logo;
