import React from "react";
import TextStrip from "./TextStrip";
import Button from "../../components/Button";
import HeroBg from "./HeroBg";
import { motion } from "framer-motion";

const heroContentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.7 + i * 0.15 },
  }),
};

const Hero = () => {
  return (
    <div className="pt-[130px] md:pt-[150px] lg:pt-[200px] overflow-x-clip pb-16 relative z-0 overflow-hidden">
      <HeroBg />

      <div className="flex flex-col items-center text-center max-w-[1200px] w-full mx-auto gap-6 lg:gap-8">
        <motion.img
          variants={heroContentVariants}
          custom={0}
          initial="initial"
          animate="animate"
          src="/logo-text.svg"
          alt="Shardeum"
          className="-mb-1 xs:mb-0 w-[125px] xs:w-[150px] sm:w-[160px] md:w-[200px] lg:w-[217px]"
        />

        <h1 className="text-[52px] xs:text-[64px] sm:text-[80px] md:text-[100px] lg:text-[130px] 2xl:text-[185px] leading-[0.85] tracking-tight flex flex-wrap justify-center gap-x-[0.216em] max-w-[350px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-none">
          {"Decentralization for everyone".split(" ").map((item, index) => (
            <motion.span
              variants={heroContentVariants}
              custom={1}
              initial="initial"
              animate="animate"
              key={index}
              className="font-helveticaProCn inline-block"
            >
              {item}{" "}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={heroContentVariants}
          custom={2}
          initial="initial"
          animate="animate"
          className="para-1 lg:mt-2 w-[90%]"
        >
          Fast, scalable, and forever fair, Shardeum is an EVM-based, truly
          decentralized L1.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-5 lg:gap-8">
          <Button
            text="Claim Testnet SHM"
            variants={heroContentVariants}
            custom={3}
            initial="initial"
            animate="animate"
          />
          <Button
            text="Join Betanet Sphinx"
            variants={heroContentVariants}
            custom={4}
            initial="initial"
            animate="animate"
          />
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
        <div className="max-w-[600px] lg:max-w-[670px] xl:max-w-[790px] w-[90%] xs:w-[80%] relative">
          <div className="w-full aspect-[1.5364]">
            <img src="/triangle.png" alt="triangle" className="w-full" />
          </div>
          <img
            src="/triangle-shadow.svg"
            alt="shadow"
            className="absolute -right-[28%] bottom-0 w-[58.73%]"
          />
        </div>

        <p className="para-1 max-w-[700px] mt-4 xs:mt-8 w-[90%]">
          Welcome to the Layer 1 blockchain where the community runs the nodes,
          and linear scalability means exponential growth.
        </p>

        <Button text="Join our Discord" />
      </div>
    </div>
  );
};

export default Hero;
