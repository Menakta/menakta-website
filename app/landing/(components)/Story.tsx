"use client";

import { useEffect, useRef, useState } from "react";

export default function Story() {
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
      className="w-full py-24 px-6 md:px-20 bg-menakta-secondaryFirst text-white"
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
            <div>STORY</div>
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
            Most technologies work fast, but they don’t truly connect.
            <br />
            <span className="font-semibold text-white">
              Menakta was created to change that, to bring emotion and intelligence together in one experience.
            </span>{" "}
            Our mission is simple: to make technology that feels alive, responsive, intuitive, and deeply human.
          </p>

          <p className="text-[#D4E5FF]">
            Built by a collective of engineers, designers, and storytellers,{" "}
            <span className="font-semibold text-white">
              Menakta brings AI, Unreal Engine, WebXR, and robotics together
            </span>{" "}
            to create digital ecosystems that think and move like living systems.
          </p>

          <p className="text-[#D4E5FF]">
            From immersive 3D simulations to robots in shopping malls that greet, chat, and interact with people like friends, 
            every creation is designed to make technology not just useful but memorable.
          </p>

          <p className="text-[#D4E5FF]">
            With{" "}
            <span className="font-semibold text-white">20+ projects delivered, a 99% success rate,</span> 
            and a growing network of global partners, we’re building the next generation of human-centered innovation.
            Because the future isn’t just about smarter machines;
            it’s about technology that{" "}
            <span className="font-semibold text-white">feels, learns, and connects.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
