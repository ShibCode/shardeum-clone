import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

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

        <div className="flex-1 flex justify-between">
          <Navbar />
        </div>
      </header>
    </div>
  );
};

export default Header;
