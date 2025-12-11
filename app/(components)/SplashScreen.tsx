"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSplashEnd = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      setHasShown(true);
      sessionStorage.setItem("splashShown", "true");
    }, 500);
  }, []);

  useEffect(() => {
    // Check if splash has already been shown in this session
    const splashShown = sessionStorage.getItem("splashShown");

    if (splashShown) {
      setIsVisible(false);
      setHasShown(true);
      return;
    }

    // Fallback timer in case video doesn't load or play
    const fallbackTimer = setTimeout(() => {
      handleSplashEnd();
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [handleSplashEnd]);

  // Handle video end
  const handleVideoEnd = () => {
    handleSplashEnd();
  };

  // Handle video loaded - start playing
  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // If autoplay fails, end splash after short delay
        setTimeout(handleSplashEnd, 1000);
      });
    }
  };

  if (!isVisible || hasShown) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-menakta-secondaryFirst transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Video Container */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          autoPlay
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="deny"
          onLoadedData={handleVideoLoaded}
          onEnded={handleVideoEnd}
          onError={handleSplashEnd}
        >
          <source
            src="/videos/Menakta_Logo Animation_Horizontal.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
