"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "20+", label: "Projects Delivered" },
  { number: "99%", label: "Success Rate" },
  { number: "15+", label: "Team Members" },
  { number: "10+", label: "Global Partners" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-menakta-primaryFirst via-menakta-primarySecond to-menakta-primaryFirst text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                animationDelay: isVisible ? `${0.1 + index * 0.1}s` : "0s",
              }}
            >
              <div className="font-tusker text-5xl md:text-6xl lg:text-7xl text-white mb-2">
                {stat.number}
              </div>
              <div className="font-clash text-white/80 text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
