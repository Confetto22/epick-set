"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

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
    <nav className="navbar bg-background px-4 md:px-8 py-5 flex items-center justify-between relative border-b border-border">
      <div className="relative">
        <Link href="/">
          <Image
            src="/logo-dark-mode.svg"
            alt="logo"
            width={100}
            height={100}
            className="dark:opacity-100 opacity-0 absolute inset-0"
          />
          <Image
            src="/logo-light-mode.svg"
            alt="logo"
            width={100}
            height={100}
            className="dark:opacity-0 opacity-100 relative"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <menu className="hidden md:flex items-center gap-4 lg:gap-6">
        {navItems.map((navItem) => {
          const active = isActive(navItem.refLink);
          return (
            <Link
              href={navItem.refLink}
              key={navItem.ref}
              className={`text-foreground/80 text-base font-medium relative transition-colors hover:text-foreground ${
                active ? "text-foreground" : ""
              }`}
            >
              {navItem.ref}
              {active && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent block"></span>
              )}
            </Link>
          );
        })}

        <ThemeToggle />

        <Link
          href={"#"}
          className="bg-foreground text-background px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      </menu>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          className="text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden z-50">
          <menu className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((navItem) => {
              const active = isActive(navItem.refLink);
              return (
                <Link
                  href={navItem.refLink}
                  key={navItem.ref}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-foreground/80 text-base font-medium py-2 relative transition-colors hover:text-foreground ${
                    active ? "text-foreground" : ""
                  }`}
                >
                  {navItem.ref}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent block"></span>
                  )}
                </Link>
              );
            })}
            <Link
              href={"#"}
              onClick={() => setIsMenuOpen(false)}
              className="bg-foreground text-background px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity text-center mt-2"
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
