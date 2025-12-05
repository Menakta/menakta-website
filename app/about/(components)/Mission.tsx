"use client";

import { useEffect, useRef, useState } from "react";

export default function Mission() {
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
    <section
      ref={ref}
      className="w-full py-24 md:px-20 bg-menakta-secondaryFirst text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Title */}
          <div
            className={`
              text-7xl md:text-8xl font-tusker text-menakta-primaryFirst leading-none tracking-tight
              transition-all duration-[1200ms] opacity-0 translate-y-10
              ${isVisible ? "translate-y-0 opacity-0 animate-[fadeInUp_0.3s_ease-out_0.6s_forwards]" : ""}
            `}
          >
            <div>OUR</div>
            <div>MISSION</div>
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div
          className={`
            space-y-6 font-clash text-lg leading-relaxed max-w-xl transition-all duration-[1400ms]
            opacity-0 translate-y-8
            ${isVisible ? "leading-relaxed opacity-0 animate-[fadeIn_0.6s_ease-out_0.9s_forwards] translate-y-0" : ""}
          `}
        >
          <p className="text-[#D4E5FF]">
            At Menakta, we believe technology should be more than functional, it should be{" "}
            <span className="font-semibold text-white">
              transformative, intuitive, and deeply human.
            </span>
          </p>

          <p className="text-[#D4E5FF]">
            Our mission is to bridge the gap between cutting-edge innovation and meaningful human experiences.{" "}
            <span className="font-semibold text-white">
              We craft digital solutions that don&apos;t just solve problems they inspire, engage, and connect.
            </span>
          </p>

          <p className="text-[#D4E5FF]">
            From immersive gaming experiences to intelligent AI systems, from interactive web platforms to robotics that feel alive every
            <span className="font-semibold text-white">
                project we undertake is driven by our commitment to excellence and innovation.
            </span>
          </p>

          <p className="text-[#D4E5FF]">
            We&apos;re not just building technology;{" "}
            <span className="font-semibold text-white">
              we&apos;re shaping the future of human-digital interaction.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
