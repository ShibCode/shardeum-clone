import { motion } from "framer-motion";
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
          <li key={index} className="relative group/navLink">
            <a href={link.href} className="flex items-center gap-2">
              {link.name}
              <img
                src="/chevron-down.svg"
                alt="arrow down"
                className="w-4 translate-y-[1px]"
              />
            </a>

            <ul className="flex flex-col gap-2 absolute w-max rounded-[20px] text-black bg-white px-7 py-6 min-w-[220px] text-lg top-[calc(100%+14px)] before:absolute before:w-full before:h-[calc(100%+14px)] before:-top-[14px] before:left-0 pointer-events-none opacity-0 -translate-y-3 group-hover/navLink:opacity-100 group-hover/navLink:pointer-events-auto group-hover/navLink:translate-y-0 transition-all duration-[400ms]">
              {link.options.map((linkOpt, index) => (
                <li key={index}>
                  <a href={linkOpt.href}>{linkOpt.name}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
