"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
// Note: useTheme still needed for logo switching
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/landing#contact" },
  { name: "Careers", href: "/careers" },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden transition-colors duration-300 bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary text-theme-text-primary"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-menakta-primaryFirst/10 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-menakta-primarySecond/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-menakta-primarySecond/5 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-menakta-primaryFirst/30 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300/40 rounded-full animate-float-medium" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-menakta-primarySecond/40 rounded-full animate-float-fast" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-menakta-primarySecond/30 rounded-full animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Tagline */}
          <div
            className={`lg:col-span-1 transition-all duration-700 ${
              isVisible
                ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link href={'/'}>
            <h2 className="mb-4 duration-300">
            <Image
              src={isDark ? "/logos/Menakta_White_Logo_2.png" : "/logos/Menakta_Black_Logo.png"}
              alt="Menakta Logo"
              width={200}
              height={200}
            />
            </h2>
            </Link>
            
            <p className="font-clash text-sm leading-relaxed mb-6 text-theme-text-secondary">
              Engineering the future of digital experiences. We create
              technology that feels alive, responsive, and deeply human.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group w-10 h-10 rounded-full border border-menakta-primaryFirst/50 bg-gradient-to-br from-menakta-primaryFirst/10 to-menakta-primarySecond/10 flex items-center justify-center hover:from-menakta-primaryFirst hover:to-menakta-primarySecond hover:border-menakta-primaryFirst hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <span className="text-menakta-primarySecond group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-tusker text-xl mb-6 text-theme-text-primary">QUICK LINKS</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-clash hover:text-menakta-primarySecond hover:pl-2 transition-all duration-300 inline-block text-theme-text-secondary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-tusker text-xl mb-6 text-theme-text-primary">CONTACT US</h3>
            <ul className="space-y-4">
              {/* Email */}
              <li className="group flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 flex items-center justify-center group-hover:from-menakta-primaryFirst group-hover:to-menakta-primarySecond transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-clash text-sm text-theme-text-primary">Email</p>
                  <a
                    href="mailto:hello@menakta.com"
                    className="font-clash text-menakta-primarySecond text-sm transition-colors duration-300 hover:text-menakta-primaryFirst"
                  >
                    ammad@menakta.com
                  </a>
                </div>
              </li>

              {/* Phone */}
              {/* <li className="group flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 flex items-center justify-center group-hover:from-menakta-primaryFirst group-hover:to-menakta-primarySecond transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className={`font-clash text-sm ${isDark ? "text-white" : "text-gray-900"}`}>Phone</p>
                  <a
                    href="tel:+1234567890"
                    className={`font-clash text-menakta-primarySecond text-sm transition-colors duration-300 ${isDark ? "hover:text-white" : "hover:text-menakta-primaryFirst"}`}
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </li> */}

              {/* Location */}
              <li className="group flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 flex items-center justify-center group-hover:from-menakta-primaryFirst group-hover:to-menakta-primarySecond transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-clash text-sm text-theme-text-primary">Location</p>
                  <p className="font-clash text-menakta-primarySecond text-sm">
                    Global / Remote First
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-tusker text-xl mb-6 text-theme-text-primary">
              STAY UPDATED
            </h3>
            <p className="font-clash text-sm mb-4 text-theme-text-secondary">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-theme-border rounded-lg font-clash text-sm focus:outline-none focus:border-menakta-primarySecond transition-all duration-300 bg-theme-card-bg text-theme-text-primary placeholder-theme-text-muted"
              />
              <button
                type="submit"
                className="w-full font-clash px-6 py-3 bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond text-white rounded-lg text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-menakta-primarySecond/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-menakta-primaryFirst/50 to-transparent mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Bottom Bar */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 ${
            isVisible
              ? "opacity-0 animate-[fadeIn_0.6s_ease-out_0.6s_forwards]"
              : "opacity-0"
          }`}
        >
          <p className="font-clash text-sm text-center md:text-left text-theme-text-muted">
            © {new Date().getFullYear()} Menakta. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href={"/privacy-policy"}>
            <button
              className="font-clash text-sm hover:text-menakta-primarySecond transition-colors duration-300 text-theme-text-muted"
            >
              Privacy Policy
            </button>
            </Link>
            <Link href={"/terms-of-service"}>
              <button
              className="font-clash text-sm hover:text-menakta-primarySecond transition-colors duration-300 text-theme-text-muted"
            >
              Terms of Service
            </button>
            </Link>
          
          </div>
        </div>
      </div>

      {/* Animated Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-menakta-primaryFirst via-menakta-primarySecond to-menakta-primaryFirst opacity-50" />
    </footer>
  );
}
