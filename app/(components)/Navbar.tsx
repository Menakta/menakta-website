"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
];

// Theme Toggle Button Component
function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full ${isDark?"bg-gray-800":"bg-white"} border transition-all duration-300 flex items-center`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Toggle Circle */}
      <div
        className={`absolute w-5 h-5 rounded-full bg-blue-700 shadow-lg transition-all duration-300 flex items-center justify-center ${
          isDark ? "left-1" : "left-8"
        }`}
      >
        {/* Sun Icon */}
        {!isDark && (
          <svg
            className="w-4 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {/* Moon Icon */}
        {isDark && (
          <svg
            className="w-4 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </div>
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isDark } = useTheme();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/landing";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? isDark
            ? "bg-gradient-to-br from-[#001845]/95 via-[#002060]/95 to-[#0041D5]/95 backdrop-blur-md shadow-lg"
            : "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <div className="w-30 md:w-50">
             <Image
              src={isDark || !scrolled ? "/logos/Menakta_White_Logo_2.png" : "/logos/Menakta_Black_Logo.png"}
              alt="Menakta Logo"
              width={200}
              height={50}
              layout="responsive"
            />
          </div>
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-clash transition-colors duration-300 text-sm uppercase tracking-wider ${
                  isActive(link.href)
                    ? "text-menakta-primarySecond border-b-2 border-menakta-primarySecond pb-1"
                    : isDark || !scrolled
                      ? "text-menakta-secondarySecond hover:text-menakta-primarySecond"
                      : "text-menakta-secondaryFirst hover:text-menakta-primaryFirst"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isDark || !scrolled ? "bg-menakta-secondarySecond" : "bg-menakta-secondaryFirst"
                } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isDark || !scrolled ? "bg-menakta-secondarySecond" : "bg-menakta-secondaryFirst"
                } ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isDark || !scrolled ? "bg-menakta-secondarySecond" : "bg-menakta-secondaryFirst"
                } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-br from-[#001845]/95 via-[#002060]/95 to-[#0041D5]/95"
            : "bg-white/95"
        } backdrop-blur-md ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block font-clash transition-colors duration-300 text-lg uppercase tracking-wider py-2 ${
                isActive(link.href)
                  ? "text-menakta-primarySecond border-l-4 border-menakta-primarySecond pl-4"
                  : isDark
                    ? "text-menakta-secondarySecond hover:text-menakta-primarySecond pl-4"
                    : "text-menakta-secondaryFirst hover:text-menakta-primaryFirst pl-4"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
