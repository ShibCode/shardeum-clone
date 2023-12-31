import { motion } from "framer-motion";
import React from "react";

const stripText = [
  "800,000+ Community Members",
  "Est. 100,000+ TPS",
  "Est. $0.01 Transaction Cost",
  "1280 validators",
];

const stripVariants = {
  initial: { x: 0 },
  animate: {
    x: "-100%",
    transition: { duration: 50, repeat: Infinity, ease: "linear" },
  },
};

const TextStrip = () => {
  return (
    <div className="flex items-center h-[262px] relative z-0 rotate-[-5deg] translate-x-4">
      <div className="absolute bg-peachGreenGr h-[262px] w-[calc(60%)] border-black border-t-2 border-l-2 border-b-2 flex items-center overflow-hidden translate-y-[39px] -z-10 -left-1/2 translate-x-[calc(50%+91px)]">
        <motion.div
          custom={0}
          variants={stripVariants}
          initial="initial"
          animate="animate"
          className="flex gap-14 whitespace-nowrap items-center pl-14"
        >
          {stripText.map((text, i) => (
            <React.Fragment key={i}>
              <div className="font-helveticaProCn text-[100px] text-blue">
                {text}
              </div>
              <div className="min-w-[50px]">
                <img src="/blue-logo.svg" alt="separator" />
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          variants={stripVariants}
          initial="initial"
          animate="animate"
          className="flex gap-14 whitespace-nowrap items-center pl-14"
        >
          {stripText.map((text, i) => (
            <React.Fragment key={i}>
              <div className="font-helveticaProCn text-[100px] text-blue">
                {text}
              </div>
              <div className="min-w-[50px]">
                <img src="/blue-logo.svg" alt="separator" />
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="absolute left-[calc(40%+92px)] -translate-x-[calc(100%-1px)] -bottom-[38px] z-0">
        <img
          src="/text-strip-3d-effect.svg"
          alt="..."
          className="absolute bottom-0 right-0 z-10"
        />
        <img src="/text-strip-shadow.svg" alt="" />
      </div>

      <div className="absolute bg-peachGreenGr h-[262px] w-[60%] border-black border-t-2 border-l-2 border-b-2 flex items-center overflow-hidden z-10 right-0">
        <motion.div
          custom={1}
          variants={stripVariants}
          initial="initial"
          animate="animate"
          className="flex gap-14 whitespace-nowrap items-center pl-14"
          style={{ translate: "-950px 0px" }}
        >
          {stripText.map((text, i) => (
            <React.Fragment key={i}>
              <div className="font-helveticaProCn text-[100px] text-blue">
                {text}
              </div>
              <div className="min-w-[50px]">
                <img src="/blue-logo.svg" alt="separator" />
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          variants={stripVariants}
          initial="initial"
          animate="animate"
          className="flex gap-14 whitespace-nowrap items-center pl-14"
          style={{ translate: "-950px 0px" }}
        >
          {stripText.map((text, i) => (
            <React.Fragment key={i}>
              <div className="font-helveticaProCn text-[100px] text-blue">
                {text}
              </div>
              <div className="min-w-[50px]">
                <img src="/blue-logo.svg" alt="separator" />
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TextStrip;
