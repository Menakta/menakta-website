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
   <section ref={ref} className="w-full py-32 px-8 bg-gradient-to-b from-black via-[#001845] to-[#2D0A4E] text-white relative overflow-hidden">

  {/* TITLE */}
  <h2 className={`font-tusker text-center text-6xl md:text-7xl tracking-tight mb-16 ${isVisible ? "translate-y-0 opacity-0 animate-[fadeInUp_0.3s_ease-out_0.6s_forwards]":""}`}>
    OUR MESSAGE
  </h2>

  {/* GLOWING CARD */}
  <div className="max-w-3xl mx-auto relative">

    {/* Actual Card */}
    <div className={`relative rounded-full border border-menakta-primaryFirst/40 bg-transparent backdrop-blur-xl px-10 py-12 shadow-xl`}>
    <p className={`font-clash text-center text-lg leading-relaxed text-[#D4E5FF] ${isVisible ? "leading-relaxed opacity-0 animate-[fadeIn_0.6s_ease-out_0.9s_forwards] translate-y-0":""}`}>
        Menakta bridges the gap between cold automation and meaningful experience by
        creating AI-driven 3D worlds, simulations, and robotics that think, move, and connect
        like people.
        <br /><br />
        Our message is simple: innovation should not only work, it should <span className="text-white font-semibold">feel</span>.
      </p>
    </div>
  </div>

  {/* BLUE STAR ICON */}
<div className="mt-20 flex justify-center">
 <StarIcon width={70} height={70}/>
</div>
</section>

  );
}
