import React from "react";
import { motion } from "framer-motion";

const HamButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
      className="w-[68px] h-[68px] bg-white ml-auto"
    >
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </motion.button>
  );
};

export default HamButton;
