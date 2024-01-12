import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Button from "../../components/Button";
import { AnimatePresence, motion } from "framer-motion";
import HamButton from "./HamButton";
import Hammenu from "./Hammenu";

const menuVariants = {
  initial: { opacity: 0.4, scale: 0.4 },
  animate: { opacity: 1, scale: 1 },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isShowingHeader, setIsShowingHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0) setIsShowingHeader(false);
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wrapper fixed w-full top-0 z-20">
      <header className="contain h-[170px] items-center gap-14">
        <Logo isScrolled={isScrolled} />

        <div className="flex-1 flex justify-between items-center">
          <AnimatePresence initial={false}>
            {!isScrolled && <Navbar />}
          </AnimatePresence>

          <AnimatePresence initial={false} mode="wait">
            {isScrolled ? (
              <motion.div
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                transition={{ duration: 0.175, ease: "linear" }}
                className="ml-auto relative z-0"
              >
                <AnimatePresence>
                  {isShowingHeader && (
                    <Hammenu isShowingHeader={isShowingHeader} />
                  )}
                </AnimatePresence>

                <HamButton
                  key={1}
                  isShowingHeader={isShowingHeader}
                  setIsShowingHeader={setIsShowingHeader}
                />
              </motion.div>
            ) : (
              <motion.button
                key={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "linear" }}
              >
                <Button text="Join Our Discord" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </header>
    </div>
  );
};

export default Header;
