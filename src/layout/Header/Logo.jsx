import React from "react";
import { motion } from "framer-motion";

const logoVariants = {
  expanded: {
    width: "1em",
    transition: { ease: [0.12, 0, 0.39, 0], duration: 0.35 },
  },
  condensed: {
    width: "0.24em",
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
    <div className="relative z-0 h-[70px] flex items-center w-[170px] xs:w-[190px] md:w-[218px]">
      <motion.div
        variants={boxVariants}
        initial="hide"
        animate={isScrolled ? "show" : "hide"}
        className="absolute w-[68px] h-[70px] -left-[9px] bg-blue -z-10 rounded-[20px] cursor-pointer"
      ></motion.div>

      <motion.div
        variants={logoVariants}
        initial="expanded"
        animate={isScrolled ? "condensed" : "expanded"}
        className="overflow-hidden text-[170px] xs:text-[190px] md:text-[218px] cursor-pointer"
      >
        <img
          src="/logo.svg"
          alt="logo"
          className="min-w-[170px] max-w-[170px] xs:min-w-[190px] xs:max-w-[190px] md:min-w-[218px] md:max-w-[218px]"
        />
      </motion.div>
    </div>
  );
};

export default Logo;
