"use client";

import StarIcon from "@/public/icons/star";
import { useEffect, useRef, useState } from "react";

export default function Message() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
   <section ref={ref} className="w-full py-32 md:px-20 px-2 relative overflow-hidden transition-colors duration-300 bg-gradient-to-t from-theme-bg-tertiary via-theme-bg-secondary to-theme-bg-primary text-theme-text-primary">

  {/* TITLE */}
  <h2 className={`font-tusker text-center text-4xl md:text-6xl tracking-tight mb-16 ${isVisible ? "translate-y-0 opacity-0 animate-[fadeInUp_0.3s_ease-out_0.6s_forwards]" : ""}`}>
    OUR MESSAGE
  </h2>

  {/* GLOWING CARD */}
  <div className="max-w-3xl mx-auto relative">

    {/* Actual Card */}
    <div className="relative rounded-full border backdrop-blur-xl px-10 py-12 shadow-xl border-theme-border bg-theme-card-bg">
    <p className={`font-clash text-center text-sm md:text-lg leading-relaxed ${isVisible ? "leading-relaxed opacity-0 animate-[fadeIn_0.6s_ease-out_0.9s_forwards] translate-y-0" : ""} text-theme-text-secondary`}>
        Menakta bridges the gap between cold automation and meaningful experience by
        creating AI-driven 3D worlds, simulations, and robotics that think, move, and connect
        like people.
        <br /><br />
        Our message is simple: innovation should not only work, it should <span className="font-semibold text-theme-text-primary">feel</span>.
      </p>
    </div>
  </div>

  {/* BLUE STAR ICON */}
<div className="mt-20 flex justify-center">
 <StarIcon width={80} height={80}/>
</div>
</section>

  );
}
