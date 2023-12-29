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
      { name: "Find your Tribe", href: "#" },
      { name: "Events", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Shardeum Updates", href: "#" },
      { name: "Community Rewards", href: "#" },
      { name: "Proof of Community", href: "#" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    options: [
      { name: "Whitepaper", href: "#" },
      { name: "Mainnet Roadmap", href: "#" },
      { name: "SHM Tokenonmics", href: "#" },
      { name: "Blog", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <motion.ul className="flex text-white text-lg gap-14">
        {links.map((link, index) => (
          <NavLink key={index} link={link} custom={index} />
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;

const linkVariants = {
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { ease: [0.5, 1, 0.89, 1], duration: 0.25, delay: i * 0.05 },
  }),

  hide: (i) => ({
    y: -100,
    opacity: 0,
    transition: {
      ease: [0.11, 0, 0.5, 0],
      duration: 0.25,
      delay: (links.length - 1 - i) * 0.05,
    },
  }),
};

const NavLink = ({ link, custom }) => {
  const [scope, animate] = useAnimate();

  const handleAnimation = async (direction) => {
    if (direction === "enter") {
      animate(".ball", { opacity: 1, top: [-64, -20] }, { duration: 0.2 });

      animate(
        ".dropdown",
        { paddingTop: [4, 16], opacity: 1 },
        { duration: 0.2, delay: 0.25 }
      );

      await animate(".primary-link", { y: 2 }, { delay: 0.1, duration: 0.2 });
      animate(".ball", { top: -24 }), { duration: 0.2 };

      await animate(".primary-link", { y: 0 }, { duration: 0.2 });
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
      variants={linkVariants}
      custom={custom}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <motion.div className="ball w-[9px] aspect-square bg-white rounded-full absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none" />

      <motion.a
        href={link.href}
        className="primary-link flex items-center gap-2 font-medium"
      >
        {link.name}
        <img
          src="/chevron-down.svg"
          alt="arrow down"
          className="w-4 translate-y-[1px]"
        />
      </motion.a>

      <motion.div className="dropdown absolute left-0 opacity-0 pointer-events-none group-hover/navLink:pointer-events-auto">
        <ul className="bg-white text-black rounded-[20px] px-8 py-6 w-[240px] flex flex-col gap-2 text-lg font-[400]">
          {link.options.map((opt, i) => (
            <li key={i}>{opt.name}</li>
          ))}
        </ul>
      </motion.div>
    </motion.li>
  );
};
