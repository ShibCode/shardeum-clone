import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Button from "../../components/Button";
import { AnimatePresence, motion } from "framer-motion";
import HamButton from "./HamButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);

  const handleScroll = () => setIsScrolled(window.scrollY > 0);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wrapper fixed w-full">
      <header className="contain py-[50px] gap-14">
        <Logo isScrolled={isScrolled} />

        <AnimatePresence initial={false} mode="wait">
          {isScrolled ? (
            <HamButton key={1} />
          ) : (
            <div className="flex-1 flex justify-between items-center" key={2}>
              <Navbar />

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "linear" }}
              >
                <Button text="Join Our Discord" />
              </motion.button>
            </div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
