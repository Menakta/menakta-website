"use client";

import { useEffect, useRef, useState } from "react";
import ProjectsHero from "./(components)/ProjectsHero";
import ProjectCard from "./(components)/ProjectCard";

const projectsData = [
  {
    title: "Nebula Quest VR",
    description:
      "An immersive virtual reality space exploration game built with Unreal Engine 5. Players navigate through procedurally generated galaxies, discover alien civilizations, and engage in epic space battles.",
    image: "/images/optimized/project-1.webp",
    category: "Game Development",
    technologies: ["Unreal Engine 5", "C++", "VR SDK", "Niagara FX"],
    link: "#",
  },
  {
    title: "SmartStock AI",
    description:
      "An intelligent inventory management system powered by machine learning. Predicts demand patterns, optimizes stock levels, and reduces waste by 40% for retail businesses.",
    image: "/images/optimized/project-2.webp",
    category: "AI Automation",
    technologies: ["Python", "TensorFlow", "AWS", "React"],
    link: "#",
  },
  {
    title: "FinanceHub Portal",
    description:
      "A comprehensive fintech web application featuring real-time trading dashboards, portfolio analytics, and secure transaction processing for over 50,000 active users.",
    image: "/images/optimized/project-3.webp",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "MetaShowroom XR",
    description:
      "A WebXR-powered virtual showroom allowing customers to view and customize products in 3D. Increased conversion rates by 65% for e-commerce clients.",
    image: "/images/optimized/project-4.webp",
    category: "Immersive Experience",
    technologies: ["Three.js", "WebXR", "GSAP", "Node.js"],
    link: "#",
  },
  {
    title: "CyberArena Mobile",
    description:
      "A competitive multiplayer mobile game featuring real-time PvP battles, seasonal tournaments, and a thriving esports community with 2 million+ downloads.",
    image: "/images/optimized/project-5.webp",
    category: "Game Development",
    technologies: ["Unity", "C#", "Photon", "Firebase"],
    link: "#",
  },
  {
    title: "DocuMind Assistant",
    description:
      "An AI-powered document processing solution that extracts, categorizes, and summarizes information from thousands of documents with 98% accuracy.",
    image: "/images/optimized/project-6.webp",
    category: "AI Automation",
    technologies: ["Python", "GPT-4", "LangChain", "FastAPI"],
    link: "#",
  },
  {
    title: "HealthSync Platform",
    description:
      "A HIPAA-compliant healthcare platform connecting patients with providers. Features telemedicine, appointment scheduling, and secure medical record management.",
    image: "/images/optimized/project-2.webp",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    link: "#",
  },
  {
    title: "RoboGuide Interactive",
    description:
      "An interactive robotic installation for museum exhibits. Uses computer vision and NLP to provide personalized tours and answer visitor questions in real-time.",
    image: "/images/optimized/project-1.webp",
    category: "Robotics",
    technologies: ["ROS", "Python", "OpenCV", "Raspberry Pi"],
    link: "#",
  },
];

const categories = [
  "All",
  "Game Development",
  "AI Automation",
  "Web Development",
  "Immersive Experience",
  "Robotics",
];

export default function ProjectsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-[fadeInUp_0.6s_ease-out_forwards]");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-menakta-secondaryFirst">
      <ProjectsHero />

      {/* Projects Grid Section */}
      <section
        ref={sectionRef}
        className="w-full min-h-screen py-24 md:px-20 bg-gradient-to-b from-menakta-secondaryFirst via-[#0a1525] to-menakta-secondaryFirst text-white relative overflow-hidden"
      >
        {/* Background Gradient Orbs */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-menakta-primaryFirst/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-menakta-primarySecond/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-menakta-primarySecond/10 rounded-full blur-[130px]" />

        <div className="max-w-7xl mx-auto relative z-10 px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-tusker text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              OUR{" "}
              <span className="text-menakta-primarySecond">PORTFOLIO</span>
            </h2>
            <p className="font-clash text-[#D4E5FF] text-lg max-w-2xl mx-auto">
              Discover how we&apos;ve helped businesses across industries achieve
              their digital transformation goals through innovative solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-clash text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond border-transparent text-white"
                    : "border-menakta-primaryFirst/30 text-menakta-primarySecond hover:bg-menakta-primaryFirst/10 hover:border-menakta-primarySecond"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="opacity-0 translate-y-10 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  technologies={project.technologies}
                  link={project.link}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-clash text-[#D4E5FF] text-lg">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="group font-clash px-8 py-4 border border-menakta-primaryFirst/50 bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 text-white rounded-full text-sm uppercase tracking-wider hover:from-menakta-primaryFirst hover:to-menakta-primarySecond hover:border-menakta-primaryFirst hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2">
                Load More Projects
                <svg
                  className="w-5 h-5 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
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
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 md:px-20 bg-gradient-to-t from-black via-[#001845] to-[#0a1525] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-tusker text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            HAVE A PROJECT IN{" "}
            <span className="text-menakta-primarySecond">MIND?</span>
          </h2>
          <p className="font-clash text-[#D4E5FF] text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your vision to life. Our team is ready
            to create something extraordinary for you.
          </p>
          <a
            href="/landing#contact"
            className="inline-block font-clash px-10 py-4 bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond border border-transparent text-white rounded-full text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-menakta-primaryFirst/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </main>
  );
}
