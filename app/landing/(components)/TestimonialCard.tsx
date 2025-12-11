"use client";

import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="border border-theme-border rounded-2xl p-8 md:p-10 max-w-2xl mx-auto transition-colors duration-300 bg-theme-card-bg">
      {/* Quote Icon */}
      <div className="text-menakta-primaryFirst text-5xl font-serif mb-4">"</div>

      {/* Testimonial Text */}
      <p className="font-clash text-lg md:text-xl leading-relaxed mb-8 text-theme-text-secondary">
        {testimonial}
      </p>

      {/* Author Info */}
      <div className="group flex items-center gap-4 cursor-pointer">
        {/* Avatar */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 group-hover:from-menakta-primaryFirst group-hover:to-menakta-primarySecond group-hover:scale-110 transition-all duration-300 flex items-center justify-center text-menakta-primarySecond group-hover:text-white font-tusker text-xl overflow-hidden">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              fill
              sizes="56px"
              className="rounded-full object-cover"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoUAA0APm0qkUWkIqGYBABABsSgCdAEexO0oAAA/vPkn//Wf/1dv/q1b/+k5v/2av+1Q5MAn8AAAA=="
            />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>

        {/* Name and Role */}
        <div>
          <h4 className="font-tusker text-lg group-hover:text-menakta-primarySecond transition-colors duration-300 text-theme-text-primary">{name}</h4>
          <p className="font-clash text-menakta-primarySecond text-sm transition-colors duration-300 group-hover:text-menakta-primaryFirst">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
