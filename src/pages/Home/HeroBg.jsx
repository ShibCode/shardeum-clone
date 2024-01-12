import React from "react";
import { motion } from "framer-motion";

const shapeTransition = (delay) => ({
  type: "spring",
  stiffness: 80,
  damping: 12,
  delay,
});

const HeroBg = () => {
  return (
    <div className="absolute inset-0 min-w-[2050px] max-w-[2050px] -z-10 left-1/2 -translate-x-1/2">
      <div className="absolute w-full h-[1000px] grid place-items-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ top: 120, left: 0, opacity: 1 }}
          transition={shapeTransition(0)}
          src="/background objects/hero-1.png"
          alt="shape"
          className="w-[448px] absolute z-20"
        />
        <svg
          width="447"
          height="499"
          viewBox="0 0 447 499"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[400px] left-[45px] z-10"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            d="M0.9,62.1c71.4-19.4,717.8-250.4,226.6,343.1c-183.2,221.4,244.2-44.8,216.9,92.6"
            stroke="black"
            strokeWidth="2"
          ></motion.path>
        </svg>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ top: 745, left: 245, opacity: 1 }}
          transition={shapeTransition(0.1)}
          src="/background objects/hero-2.png"
          alt="shape"
          className="w-[390px] absolute"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ top: -100, right: 615, opacity: 1 }}
          transition={shapeTransition(0.15)}
          src="/background objects/hero-3.png"
          alt="shape"
          className="w-[307px] absolute"
        />
        <svg
          viewBox="0 0 483 312"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[482px] absolute right-[260px] top-[-160px]"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            d="M1.09735 263.15C208.015 482.072 379.821 -132.415 481.616 28.6476"
            stroke="black"
            strokeWidth="2"
          ></motion.path>
        </svg>

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ top: 135, right: -7, opacity: 1 }}
          transition={shapeTransition(0.2)}
          src="/background objects/hero-4.png"
          alt="shape"
          className="w-[378px] absolute"
        />
        <svg
          width="124"
          height="526"
          viewBox="0 0 124 526"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[210px] top-[350px] z-10"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            d="M1.00256 524.253C301.036 497.39 -74.9974 -18.0819 114.503 1.75207"
            stroke="black"
            stroke-width="2"
          ></motion.path>
        </svg>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ top: 650, right: -140, opacity: 1 }}
          transition={shapeTransition(0.25)}
          src="/background objects/hero-5.png"
          alt="shape"
          className="w-[731px] absolute"
        />
        <svg
          width="559"
          height="217"
          viewBox="0 0 559 217"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[690px] right-[390px]"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            d="M547.005 165.593C602.005 -185.838 442.269 121.102 0.412827 215.526"
            stroke="black"
            stroke-width="2"
          ></motion.path>
        </svg>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ top: 626, right: 694, opacity: 1 }}
          transition={shapeTransition(0.3)}
          src="/background objects/hero-6.png"
          alt="shape"
          className="w-[614px] absolute"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ top: 410, right: -90, opacity: 1 }}
          transition={shapeTransition(0.35)}
          src="/background objects/hero-7.png"
          alt="shape"
          className="w-[392px] absolute"
        />
      </div>
    </div>
  );
};

export default HeroBg;
