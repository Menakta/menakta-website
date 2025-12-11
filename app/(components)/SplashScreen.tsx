"use client";

import { useState, useEffect } from "react";

const AktaIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 120"
    fill="none"
  >
    <defs>
      <linearGradient id="splashGradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#0041D5" />
        <stop offset="50%" stopColor="#00B0FF" />
        <stop offset="100%" stopColor="#0041D5" />
      </linearGradient>
    </defs>
    <path
      d="M50 0
         C50 45, 52 52, 85 60
         C52 68, 50 75, 50 120
         C50 75, 48 68, 15 60
         C48 52, 50 45, 50 0Z"
      fill="url(#splashGradient)"
    />
  </svg>
);

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if splash has already been shown in this session
    const splashShown = sessionStorage.getItem("splashShown");

    if (splashShown) {
      setIsVisible(false);
      setHasShown(true);
      return;
    }

    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Hide completely after 3 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setHasShown(true);
      sessionStorage.setItem("splashShown", "true");
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible || hasShown) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-menakta-secondaryFirst transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-menakta-primaryFirst/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-menakta-primarySecond/20 rounded-full blur-[120px] animate-pulse" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Akta Icon */}
        <div className="relative">
          {/* Glow effect behind icon */}
          <div className="absolute inset-0 blur-2xl">
            <AktaIcon className="w-24 h-28 md:w-32 md:h-36 opacity-50" />
          </div>

          {/* Main icon with animations */}
          <AktaIcon
            className="w-24 h-28 md:w-32 md:h-36 animate-pulse drop-shadow-[0_0_30px_rgba(0,176,255,0.5)]"
          />
        </div>

        {/* Loading bar */}
        <div className="mt-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-menakta-primaryFirst via-menakta-primarySecond to-menakta-primaryFirst rounded-full animate-[loadingBar_2.5s_ease-in-out_forwards]"
          />
        </div>

        {/* Optional: Brand name */}
        <p className="mt-6 font-tusker text-2xl md:text-3xl text-white/80 tracking-wider animate-pulse">
          MENAKTA
        </p>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
