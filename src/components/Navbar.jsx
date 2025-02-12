import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const offset = -70;
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="fixed z-10 w-full border-b border-orange-50/10 bg-emerald-950">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="/">
              <img src={logo} alt="logo" width={120} height={20} />
            </a>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 bg-emerald-950 text-orange-50"
              >
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 flex flex-col space-y-0 
            bg-emerald-950 px-20 text-4xl font-bold uppercase text-emerald-100
            lg:text-6xl"
        >
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="absolute right-4 top-4 rounded-full
                    bg-emerald-900 p-2 text-orange-50 lg:right-20"
          >
            <FaTimes className="w-6 h-6" />
          </button>
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="transition-colors
                duration-300 hover:text-orange-50 hover:underline text-center py-4 mt-4" // Adjusted here
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;