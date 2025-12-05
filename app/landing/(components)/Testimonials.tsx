"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    name: "Sarah Chen",
    avatar: "/images/testimonial-1.jpg",
    role: "CTO",
    company: "TechVision Labs",
    testimonial:
      "Menakta transformed our customer experience with their AI-driven 3D solutions. The level of immersion and interactivity they delivered exceeded all expectations. Our engagement metrics increased by 300%.",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Innovation",
    avatar: "/images/testimonial-2.jpg",
    company: "RetailNext",
    testimonial:
      "The robotic installation Menakta created for our flagship store has become a landmark attraction. Customers genuinely connect with it, and it has revolutionized how we think about in-store experiences.",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director",
    company: "Immerse Studios",
    avatar: "/images/testimonial-3.jpg",

    testimonial:
      "Working with Menakta was a game-changer. Their team understood our vision immediately and delivered a WebXR experience that left our audience speechless. True innovators in the space.",
  },
  {
    name: "David Park",
    role: "CEO",
    company: "FutureBuild Inc",
    avatar: "/images/testimonial-2.jpg",
    testimonial:
      "The simulation platform Menakta built for our training program reduced onboarding time by 60%. It feels so real that our employees forget they're in a virtual environment.",
  },
  {
    name: "Aisha Patel",
    role: "VP of Digital",
    company: "GlobalConnect",
    avatar: "/images/testimonial-1.jpg",
    testimonial:
      "Menakta doesn't just build technology; they craft experiences. Their attention to the emotional connection between users and technology sets them apart from everyone else in the industry.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full h-[100vh] py-32 md:px-20 px-2 bg-gradient-to-t from-black via-[#001845] to-[#2D0A4E] text-white relative overflow-hidden text-white relative">
      {/* Animated Gradient Circle Background */}

      {/* Title */}
      <h2 className="font-tusker text-center text-6xl md:text-7xl tracking-tight mb-16">
        WHAT THEY SAY
      </h2>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="group absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-menakta-primaryFirst/50 bg-gradient-to-br from-menakta-primaryFirst/20 to-purple-600/20 hover:from-menakta-primaryFirst hover:to-purple-600 hover:border-menakta-primaryFirst hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="group absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-menakta-primaryFirst/50 bg-gradient-to-br from-menakta-primaryFirst/20 to-purple-600/20 hover:from-menakta-primaryFirst hover:to-purple-600 hover:border-menakta-primaryFirst hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="px-12 md:px-0">
          <TestimonialCard
            name={testimonialData[currentIndex].name}
            role={testimonialData[currentIndex].role}
            company={testimonialData[currentIndex].company}
            avatar={testimonialData[currentIndex].avatar}
            testimonial={testimonialData[currentIndex].testimonial}
          />
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-menakta-primaryFirst w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
