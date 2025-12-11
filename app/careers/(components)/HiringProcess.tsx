"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your application with your resume and portfolio. Tell us why you're excited about Menakta.",
  },
  {
    number: "02",
    title: "Initial Call",
    description:
      "A 30-minute chat with our team to learn about you and share more about the role and our culture.",
  },
  {
    number: "03",
    title: "Technical Assessment",
    description:
      "A practical challenge relevant to your role. We value real-world problem-solving skills.",
  },
  {
    number: "04",
    title: "Team Interview",
    description:
      "Meet your potential teammates and dive deeper into technical discussions and culture fit.",
  },
  {
    number: "05",
    title: "Offer",
    description:
      "If there's a mutual fit, we'll extend an offer and welcome you to the Menakta family!",
  },
];

export default function HiringProcess() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="w-full py-24 md:px-20 relative overflow-hidden transition-colors duration-300 bg-theme-bg-tertiary text-theme-text-primary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10 px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-tusker text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            OUR HIRING{" "}
            <span className="text-menakta-primarySecond">PROCESS</span>
          </h2>
          <p className="font-clash text-lg max-w-2xl mx-auto text-theme-text-secondary">
            A transparent and efficient process designed to find the best fit for
            both you and Menakta.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-menakta-primaryFirst via-menakta-primarySecond to-menakta-primaryFirst" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${
                  isVisible
                    ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  animationDelay: isVisible ? `${0.2 + index * 0.15}s` : "0s",
                }}
              >
                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`inline-block border border-theme-border rounded-2xl p-6 backdrop-blur-sm bg-theme-card-bg hover:border-menakta-primarySecond/50 transition-all duration-300 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <span className="font-tusker text-4xl text-menakta-primarySecond">
                      {step.number}
                    </span>
                    <h3 className="font-tusker text-2xl mt-2 mb-3 text-theme-text-primary">
                      {step.title}
                    </h3>
                    <p className="font-clash text-theme-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Circle on Timeline */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-menakta-primaryFirst to-menakta-primarySecond shadow-lg shadow-menakta-primaryFirst/30" />

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
