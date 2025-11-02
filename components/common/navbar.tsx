"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    ref: "About",
    refLink: "#about",
  },
  {
    ref: "Features",
    refLink: "#features",
  },
  {
    ref: "Pricing",
    refLink: "#pricing",
  },
  {
    ref: "Careers",
    refLink: "/career",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return false; // Hash links for now, can be enhanced with scroll spy
    }
    return pathname === href;
  };

  return (
    <nav className="navbar bg-[#0C081F] px-4 md:px-8 py-5 flex items-center justify-between relative border-white">
      <div className="">
        <Link href="/">
          <Image
            src="/logo-dark-mode.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <menu className="hidden md:flex items-center gap-6 lg:gap-10">
        {navItems.map((navItem) => {
          const active = isActive(navItem.refLink);
          return (
            <Link
              href={navItem.refLink}
              key={navItem.ref}
              className={`text-gray-200 text-base font-medium relative transition-colors hover:text-white ${
                active ? "text-white" : ""
              }`}
            >
              {navItem.ref}
              {active && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#CB30E0] block"></span>
              )}
            </Link>
          );
        })}

        <Link
          href={"#"}
          className="bg-white px-5 py-2.5 rounded-md text-[#0c081F] font-medium hover:bg-gray-100 transition-colors"
        >
          Get Started
        </Link>
      </menu>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-200 hover:text-white transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0C081F] border-b border-white md:hidden z-50">
          <menu className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((navItem) => {
              const active = isActive(navItem.refLink);
              return (
                <Link
                  href={navItem.refLink}
                  key={navItem.ref}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-200 text-base font-medium py-2 relative transition-colors hover:text-white ${
                    active ? "text-white" : ""
                  }`}
                >
                  {navItem.ref}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#CB30E0] block"></span>
                  )}
                </Link>
              );
            })}
            <Link
              href={"#"}
              onClick={() => setIsMenuOpen(false)}
              className="bg-white px-5 py-2.5 rounded-md text-[#0c081F] font-medium hover:bg-gray-100 transition-colors text-center mt-2"
            >
              Get Started
            </Link>
          </menu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
