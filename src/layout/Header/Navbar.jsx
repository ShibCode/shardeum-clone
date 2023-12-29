import { motion, useAnimate } from "framer-motion";
import React from "react";

const links = [
  {
    name: "Developers",
    href: "#",
    options: [
      { name: "Start Building", href: "#" },
      { name: "Betanet Sphinx", href: "#" },
      { name: "Dapps Ecosystem", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Explorer", href: "#" },
    ],
  },
  {
    name: "Community",
    href: "#",
    options: [
      { name: "Start Building", href: "#" },
      { name: "Betanet Sphinx", href: "#" },
      { name: "Dapps Ecosystem", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Explorer", href: "#" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    options: [
      { name: "Start Building", href: "#" },
      { name: "Betanet Sphinx", href: "#" },
      { name: "Dapps Ecosystem", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Explorer", href: "#" },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex text-white text-lg gap-14">
        {links.map((link, index) => (
          <NavLink key={index} link={link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const NavLink = ({ link }) => {
  const [scope, animate] = useAnimate();

  const handleAnimation = async (direction) => {
    if (direction === "enter") {
      animate(".ball", { opacity: 1, top: [-64, -20] }, { duration: 0.2 });

      animate(
        ".dropdown",
        { paddingTop: [4, 16], opacity: 1 },
        { duration: 0.2, delay: 0.25 }
      );

      await animate("primary-link", { y: 2 }, { delay: 0.1, duration: 0.2 });
      animate(".ball", { top: -24 }), { duration: 0.2 };

      await animate("primary-link", { y: 0 }, { duration: 0.2 });
    } else {
      animate(".ball", { opacity: 0 });
      animate(
        ".dropdown",
        { paddingTop: [16, 4], opacity: 0 },
        { duration: 0.2 }
      );
    }
  };

  return (
    <motion.li
      ref={scope}
      onMouseEnter={() => handleAnimation("enter")}
      onMouseLeave={() => handleAnimation("exit")}
      className="relative group/navLink"
    >
      <motion.div className="ball w-[9px] aspect-square bg-white rounded-full absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none" />

      <motion.a
        href={link.href}
        className="primary-link flex items-center gap-2"
      >
        {link.name}
        <img
          src="/chevron-down.svg"
          alt="arrow down"
          className="w-4 translate-y-[1px]"
        />
      </motion.a>

      <motion.div className="dropdown absolute left-0 opacity-0 pointer-events-none group-hover/navLink:pointer-events-auto">
        <ul className="bg-white text-black rounded-[20px] px-8 py-6 w-[240px] flex flex-col gap-2">
          {link.options.map((opt, i) => (
            <li key={i}>{opt.name}</li>
          ))}
        </ul>
      </motion.div>
    </motion.li>
  );
};
