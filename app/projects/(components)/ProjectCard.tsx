"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-[#0a1628]/80 to-[#001845]/80 border border-menakta-primaryFirst/30 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-menakta-primarySecond/50 transition-all duration-300 hover:shadow-lg hover:shadow-menakta-primaryFirst/10">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-menakta-primaryFirst/5 to-menakta-primarySecond/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoUAA0APm0qkUWkIqGYBABABsSgCdAEexO0oAAA/vPkn//Wf/1dv/q1b/+k5v/2av+1Q5MAn8AAAA=="
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-clash text-xs uppercase tracking-wider px-3 py-1.5 bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond text-white rounded-full">
            {category}
          </span>
        </div>

        {/* Link icon on hover */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:from-menakta-primaryFirst hover:to-menakta-primarySecond hover:scale-110 transition-all duration-300"
          >
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Title */}
        <h3 className="font-tusker text-2xl text-white mb-3 group-hover:text-menakta-primarySecond transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="font-clash text-[#D4E5FF] leading-relaxed mb-5 text-sm">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="font-clash text-xs px-3 py-1 bg-menakta-primaryFirst/10 border border-menakta-primaryFirst/30 text-menakta-primarySecond rounded-full hover:bg-menakta-primaryFirst/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
