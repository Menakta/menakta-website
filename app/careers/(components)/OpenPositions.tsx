"use client";

import { useEffect, useRef, useState } from "react";

const positions = [
  {
    title: "Senior Unreal Engine Developer",
    department: "Game Development",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our game development team to create stunning AAA-quality experiences using Unreal Engine 5.",
    requirements: [
      "5+ years of Unreal Engine experience",
      "Strong C++ skills",
      "Experience with multiplayer systems",
      "Portfolio of shipped games or projects",
    ],
  },
  {
    title: "AI/ML Engineer",
    department: "AI Automation",
    location: "Remote",
    type: "Full-time",
    description:
      "Help us build intelligent systems that learn and adapt using cutting-edge AI technologies.",
    requirements: [
      "3+ years of ML/AI experience",
      "Proficiency in Python, TensorFlow/PyTorch",
      "Experience with NLP and computer vision",
      "Strong mathematical foundation",
    ],
  },
  {
    title: "Full Stack Developer",
    department: "Web Development",
    location: "Remote",
    type: "Full-time",
    description:
      "Build modern, high-performance web applications using Next.js, React, and Node.js.",
    requirements: [
      "4+ years of web development experience",
      "Expertise in React/Next.js",
      "Experience with TypeScript",
      "Database design and optimization skills",
    ],
  },
  {
    title: "WebXR Developer",
    department: "Immersive Experience",
    location: "Remote",
    type: "Full-time",
    description:
      "Create immersive 3D web experiences using Three.js, WebGL, and WebXR technologies.",
    requirements: [
      "3+ years of 3D web development",
      "Strong Three.js/WebGL skills",
      "Experience with VR/AR development",
      "Understanding of 3D mathematics",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Design beautiful, intuitive interfaces that delight users and drive engagement.",
    requirements: [
      "4+ years of UI/UX design experience",
      "Proficiency in Figma",
      "Strong portfolio of digital products",
      "Experience with design systems",
    ],
  },
  {
    title: "Robotics Engineer",
    department: "Robotics & IoT",
    location: "Remote / On-site",
    type: "Full-time",
    description:
      "Design and develop intelligent robotic systems and IoT solutions.",
    requirements: [
      "3+ years of robotics experience",
      "Experience with ROS",
      "Embedded systems programming",
      "Computer vision knowledge",
    ],
  },
];

export default function OpenPositions() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="positions"
      ref={ref}
      className="w-full py-24 md:px-20 relative overflow-hidden transition-colors duration-300 bg-theme-bg-primary text-theme-text-primary"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-menakta-primarySecond/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-menakta-primaryFirst/10 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative z-10 px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-tusker text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            OPEN{" "}
            <span className="text-menakta-primarySecond">POSITIONS</span>
          </h2>
          <p className="font-clash text-lg max-w-2xl mx-auto text-theme-text-secondary">
            Find your perfect role and start your journey with us today.
          </p>
        </div>

        {/* Positions List */}
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div
              key={position.title}
              className={`border border-theme-border rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 bg-theme-card-bg hover:border-menakta-primarySecond/50 ${
                isVisible
                  ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                animationDelay: isVisible ? `${0.2 + index * 0.1}s` : "0s",
              }}
            >
              {/* Position Header */}
              <button
                onClick={() =>
                  setExpandedPosition(
                    expandedPosition === index ? null : index
                  )
                }
                className="w-full p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
              >
                <div className="flex-1">
                  <h3 className="font-tusker text-xl md:text-2xl text-theme-text-primary mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="font-clash text-sm px-3 py-1 rounded-full bg-menakta-primaryFirst/10 text-menakta-primarySecond">
                      {position.department}
                    </span>
                    <span className="font-clash text-sm px-3 py-1 rounded-full bg-theme-bg-secondary text-theme-text-secondary">
                      {position.location}
                    </span>
                    <span className="font-clash text-sm px-3 py-1 rounded-full bg-theme-bg-secondary text-theme-text-secondary">
                      {position.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <svg
                    className={`w-6 h-6 text-menakta-primarySecond transition-transform duration-300 ${
                      expandedPosition === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Expanded Content */}
              <div
                className={`transition-all duration-300 ${
                  expandedPosition === index
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-theme-border pt-6">
                  <p className="font-clash text-theme-text-secondary mb-6">
                    {position.description}
                  </p>

                  <h4 className="font-clash font-semibold text-theme-text-primary mb-3">
                    Requirements:
                  </h4>
                  <ul className="font-clash text-theme-text-secondary space-y-2 mb-6">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-menakta-primarySecond flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:careers@menakta.com?subject=Application: ${position.title}`}
                    className="inline-block font-clash px-6 py-3 bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond border border-transparent text-white rounded-full text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-menakta-primaryFirst/30 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Position Found CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible
              ? "opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]"
              : "opacity-0"
          }`}
        >
          <p className="font-clash text-theme-text-secondary mb-4">
            Don&apos;t see a position that fits?
          </p>
          <a
            href="mailto:careers@menakta.com?subject=General Application"
            className="inline-block font-clash text-menakta-primarySecond hover:text-menakta-primaryFirst transition-colors duration-300 underline underline-offset-4"
          >
            Send us your resume anyway
          </a>
        </div>
      </div>
    </section>
  );
}
