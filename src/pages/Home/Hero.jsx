import React from "react";
import TextStrip from "./TextStrip";
import Button from "../../components/Button";
import HeroBg from "./HeroBg";
import { motion } from "framer-motion";

const container = {
  animate: { transition: { staggerChildren: 0.2 } },
};

const heroContentVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      className="pt-[200px] overflow-x-clip pb-16 relative z-0"
    >
      <HeroBg />

      <div className="flex flex-col items-center text-center max-w-[1200px] w-full mx-auto gap-8">
        <motion.img
          variants={heroContentVariants}
          src="/logo-text.svg"
          alt="Shardeum"
        />

        <h1 className="text-[185px] leading-[0.85] tracking-tight flex flex-wrap justify-center gap-x-10">
          {"Decentralization for everyone".split(" ").map((item, index) => (
            <motion.span
              variants={heroContentVariants}
              key={index}
              className="font-helveticaProCn inline-block"
            >
              {item}{" "}
            </motion.span>
          ))}
        </h1>

        <motion.p variants={heroContentVariants} className="para-1 mt-2">
          Fast, scalable, and forever fair, Shardeum is an EVM-based, truly
          decentralized L1.
        </motion.p>

        <motion.div className="flex gap-8">
          <Button text="Claim Testnet SHM" variants={heroContentVariants} />
          <Button text="Join Betanet Sphinx" variants={heroContentVariants} />
        </motion.div>
      </div>

      <TextStrip
        text={[
          "800,000+ Community Members",
          "Est. 100,000+ TPS",
          "Est. $0.01 Transaction Cost",
          "1280 validators",
        ]}
      />

      <div className="flex flex-col items-center text-center gap-4">
        <div className="max-w-[790px] w-[80%] relative">
          <img src="/triangle.png" alt="triangle" className="w-full" />
          <img
            src="/triangle-shadow.svg"
            alt="shadow"
            className="absolute -right-[28%] bottom-0 w-[58.73%]"
          />
        </div>

        <p className="para-1 max-w-[700px] mt-8">
          Welcome to the Layer 1 blockchain where the community runs the nodes,
          and linear scalability means exponential growth.
        </p>

        <Button text="Join our Discord" />
      </div>
    </motion.div>
  );
};

export default Hero;
