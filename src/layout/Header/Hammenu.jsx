import React, { useState } from "react";
import { motion } from "framer-motion";
import links from "./links.json";
import Button from "../../components/Button";

const hammenuVariants = {
  opened: {
    width: "auto",
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1],
      when: "beforeChildren",
    },
  },
  closed: {
    width: 68,
    height: 68,
    transition: { delay: 0.3, duration: 0.3, ease: [0.61, 1, 0.88, 1] },
  },
};

const linkVariants = {
  initial: { opacity: 0, x: 10 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.17, duration: 0.3 },
  }),
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3 },
  },
};

const Hammenu = () => {
  const [openedDropdown, setOpenedDropdown] = useState("");

  return (
    <motion.div
      variants={hammenuVariants}
      initial="closed"
      animate="opened"
      exit="closed"
      className="absolute right-0 top-0 rounded-[20px] bg-white -z-10 max-h-[85vh] overflow-hidden"
    >
      <div className="p-6 mt-6 w-max flex flex-col gap-5">
        <nav className="flex flex-col gap-3">
          {links.map((link, index) => (
            <Link
              key={index}
              link={link}
              index={index}
              openedDropdown={openedDropdown}
              setOpenedDropdown={setOpenedDropdown}
            />
          ))}
        </nav>

        <motion.div
          custom={links.length}
          variants={linkVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col gap-4"
        >
          <Button text="Claim Testnet SHM" maxWidth="192px" />
          <Button text="Join Betanet" maxWidth="192px" />
          <Button text="Join Our Discord" maxWidth="192px" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hammenu;

const Link = ({ link, openedDropdown, setOpenedDropdown, index }) => {
  return (
    <motion.div
      custom={index}
      variants={linkVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <a
        href={!link.options && opt.href}
        className="flex gap-2 items-center justify-between max-w-[200px] text-black hover:text-blue cursor-pointer transition-colors duration-200 select-none"
        onClick={() => {
          if (openedDropdown === link.name) setOpenedDropdown("");
          else setOpenedDropdown(link.name);
        }}
      >
        <span className="text-[38px] leading-[1] font-bold font-helveticaProCn">
          {link.name}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="currentColor"
          class={`transition-transform duration-[250ms] ease-linear translate-y-0.5 w-5 ${
            openedDropdown === link.name ? "rotate-90" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </a>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: openedDropdown === link.name ? "auto" : 0 }}
        transition={{ ease: [0.12, 0, 0.39, 0], duration: 0.3 }}
        className="flex flex-col overflow-hidden gap-2.5"
      >
        {link.options.map((opt, index) => (
          <a
            href={!opt.options && opt.href}
            className="text-lg flex items-center gap-2 text-black hover:text-blue cursor-pointer transition-colors duration-200 relative first:mt-4 last:mb-4"
            key={index}
          >
            {opt.name}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};
