"use client";

import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    image: "/images/team-1.jpg",
    description: "Visionary leader with 15+ years in tech innovation",
  },
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    image: "/images/team-2.jpg",
    description: "Award-winning designer passionate about user experiences",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Engineer",
    image: "/images/team-3.jpg",
    description: "Full-stack expert specializing in Unreal Engine & AI",
  },
  {
    name: "Elena Rodriguez",
    role: "AI Specialist",
    image: "/images/team-4.jpg",
    description: "Machine learning pioneer with research background",
  },
];

export default function Team() {
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
      className="w-full py-24 md:px-20 bg-gradient-to-b from-menakta-secondaryFirst via-[#0a1525] to-menakta-secondaryFirst text-white relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-menakta-primaryFirst/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-menakta-primarySecond/10 rounded-full blur-[150px]" />

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
            MEET THE{" "}
            <span className="text-menakta-primarySecond">TEAM</span>
          </h2>
          <p className="font-clash text-[#D4E5FF] text-lg max-w-2xl mx-auto">
            The brilliant minds behind Menakta&apos;s innovative solutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                animationDelay: isVisible ? `${0.2 + index * 0.1}s` : "0s",
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 border border-menakta-primaryFirst/20 p-6 hover:border-menakta-primarySecond/50 transition-all duration-300 hover:scale-105">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-menakta-primaryFirst to-menakta-primarySecond flex items-center justify-center overflow-hidden">
                  <span className="font-tusker text-4xl text-white">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="font-tusker text-xl text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-clash text-menakta-primarySecond text-sm uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="font-clash text-[#D4E5FF] text-sm">
                    {member.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-menakta-primaryFirst/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
