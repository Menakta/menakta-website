"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    title: "Innovation",
    description:
      "We push boundaries and embrace emerging technologies to create solutions that define the future.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, delivering quality that exceeds expectations every time.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "We believe the best solutions come from diverse perspectives working together toward a common goal.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honesty, and a commitment to doing what's right.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:px-20 bg-menakta-secondaryFirst text-white relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-menakta-primarySecond/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-menakta-primaryFirst/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10 px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-tusker text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            OUR{" "}
            <span className="text-menakta-primarySecond">VALUES</span>
          </h2>
          <p className="font-clash text-[#D4E5FF] text-lg max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                animationDelay: isVisible ? `${0.2 + index * 0.1}s` : "0s",
              }}
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-menakta-primaryFirst/10 to-menakta-primarySecond/10 border border-menakta-primaryFirst/20 hover:border-menakta-primarySecond/50 transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-menakta-primaryFirst to-menakta-primarySecond flex items-center justify-center text-white">
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="font-tusker text-2xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="font-clash text-[#D4E5FF] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
