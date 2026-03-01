"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = ["Home", "About", "Experience", "Projects", "Contact"];


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScroll(true);
      else setScroll(false);

      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const id of menuItems.map((m) => m.toLowerCase())) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setActiveSection(id);
  setNavOpen(false);
};


  return (
    <nav
      className={`fixed w-full py-2 z-50 transition-all duration-500 ${
        scroll
          ? " bg-black/80 shadow-lg "
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("home");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection("home");
          }}
          className="border border-[#00c050] px-2 py-1 rounded-md  text-lg text-white"
        >
          Irene <span className="text-[#00ff88]">Tayler</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  space-x-8  items-center">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={item}>
             <a
               href={`#${id}`}
               onClick={(e) => handleNavClick(e, id)}
               className={`px-1 relative transition-all duration-300 
               ${isActive 
               ? "text-[#00ff88] border-b-2 border-[#00ff88]" 
              : " text-white border-b-2 border-transparent hover:text-[#00ff88] hover:border-[#00ff88]  transition-all duration-500"
            }`}
              >
         {item}
          </a>

              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <button
            onClick={() => setNavOpen((s) => !s)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            className="p-1"
          >
            {navOpen ? "" : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed w-[80%] inset-0 z-[50] flex items-start justify-center transition-transform duration-500 ease-in-out pointer-events-auto ${
          navOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 backdrop-blur-md bg-black/50"
          onClick={() => setNavOpen(false)}
        />

        {/* Drawer content */}
        <div className="relative z-[60] w-full max-w-md mx-auto mt-24 bg-transparent flex flex-col items-center gap-6 px-8 pb-12 pt-6">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`text-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#00ff88] border-b-2 border-[#00ff88]"
                    : "text-white hover:text-[#00ff88]"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Cross button (fixed top-right) */}
        <button
          onClick={() => setNavOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 right-4 z-[70] text-white bg-black/20 backdrop-blur-sm p-2 rounded-md border border-white/10"
        >
          <FiX size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;












