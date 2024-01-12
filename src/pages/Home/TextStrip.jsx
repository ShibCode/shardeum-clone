import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const stripText = [
  "800,000+ Community Members",
  "Est. 100,000+ TPS",
  "Est. $0.01 Transaction Cost",
  "1280 validators",
];

const stripVariants = {
  animate: {
    x: "-100%",
    transition: { duration: 50, repeat: Infinity, ease: "linear" },
  },
};

const TextStrip = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex relative max-w-[2500px] -rotate-[5deg] pb-10 min-w-[700px] mx-auto mt-[360px] mb-20">
      <div className="bg-peachGreenGr flex min-w-[calc(45%+100px)] -translate-x-[100px] overflow-hidden h-[262px] items-center border-y-2 border-black translate-y-10">
        <motion.div
          variants={stripVariants}
          animate="animate"
          className="flex whitespace-nowrap min-w-max gap-14 pl-14"
        >
          {stripText.map((text, index) => (
            <React.Fragment key={index}>
              <span className="font-helveticaProCn text-[117px] text-blue">
                {text}
              </span>
              <img src="/blue-logo.svg" alt="seperator" />
            </React.Fragment>
          ))}
        </motion.div>
        <motion.div
          variants={stripVariants}
          animate="animate"
          className="flex whitespace-nowrap min-w-max gap-14 pl-14"
        >
          {stripText.map((text, index) => (
            <React.Fragment key={index}>
              <span className="font-helveticaProCn text-[117px] text-blue">
                {text}
              </span>
              <img src="/blue-logo.svg" alt="seperator" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-[45%] -translate-x-[calc(100%-1px)]">
        <img
          src="/text-strip-3d-effect.svg"
          alt="..."
          className="absolute bottom-[2px] right-0 z-10"
        />
        <img src="/text-strip-shadow.svg" alt="" />
      </div>
      <div className="bg-peachGreenGr flex min-w-[calc(55%+93px+100px)] overflow-hidden h-[262px] items-center border-y-2 border-black z-10 -translate-x-[calc(92px+100px)] border-l">
        <motion.div
          style={{
            translate: `${(viewportWidth * (45 / 100) + 100) * -1 - 0}px 0px`,
          }}
          variants={stripVariants}
          animate="animate"
          className="flex whitespace-nowrap min-w-max gap-14 pl-14"
        >
          {stripText.map((text, index) => (
            <React.Fragment key={index}>
              <span className="font-helveticaProCn text-[117px] text-blue">
                {text}
              </span>
              <img src="/blue-logo.svg" alt="seperator" />
            </React.Fragment>
          ))}
        </motion.div>
        <motion.div
          style={{
            translate: `${(viewportWidth * (45 / 100) + 100) * -1 - 0}px 0px`,
          }}
          variants={stripVariants}
          animate="animate"
          className="flex whitespace-nowrap min-w-max gap-14 pl-14"
        >
          {stripText.map((text, index) => (
            <React.Fragment key={index}>
              <span className="font-helveticaProCn text-[117px] text-blue">
                {text}
              </span>
              <img src="/blue-logo.svg" alt="seperator" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TextStrip;
