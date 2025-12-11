"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="group relative min-h-screen overflow-hidden flex items-center justify-center transition-colors duration-300 bg-theme-bg-primary">
      {/* Background image with hover animation */}
      <div className="absolute inset-0 z-0 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out">
        <Image
          src="/images/optimized/aboutHero.webp"
          alt="About hero background"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoUAA0APm0qkUWkIqGYBABABsSgCdAEexO0oAAA/vPkn//Wf/1dv/q1b/+k5v/2av+1Q5MAn8AAAA=="
        />
      </div>

      {/* Gradient overlay - blue, purple, transparent */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-menakta-primaryFirst/60 via-menakta-primarySecond/40 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-theme-bg-primary via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-tusker text-4xl uppercase tracking-tight leading-none mb-6 text-white">
          <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
            Get
          </span>{" "}
          <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
            To
          </span>{" "}
          <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
            Know
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-menakta-primarySecond mt-2">
            <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
              About
            </span>{" "}
            <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
              Us
            </span>
          </span>
        </h1>

        <p className="font-clash text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards] text-white/80">
          We are a team of passionate innovators, engineers, and designers
          dedicated to creating technology that connects, inspires, and
          transforms.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/landing#contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto font-clash px-8 py-4 bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond border border-transparent text-white rounded-full text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-menakta-primaryFirst/30 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards]">
              Get in Touch
            </button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto font-clash px-8 py-4 border border-menakta-primaryFirst/30 text-menakta-primarySecond rounded-full text-sm uppercase tracking-wider hover:bg-menakta-primaryFirst/10 hover:border-menakta-primarySecond hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.4s_forwards]">
              Our Services
            </button>
          </Link>
        </div>
      </div>

      {/* Wave Container - Static waves */}
      <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-80 md:h-96 overflow-hidden z-[5]">
        {/* Wave 1 - Back */}
        <svg
          className="absolute bottom-0 w-full h-full animate-wave-gentle-1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="aboutWaveGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00B0FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0041D5" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            fill="url(#aboutWaveGradient1)"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Wave 2 - Middle */}
        <svg
          className="absolute bottom-0 w-full h-full animate-wave-gentle-2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="aboutWaveGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0041D5" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#306dfdff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#65ceffff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            fill="url(#aboutWaveGradient2)"
            d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,165.3C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Wave 3 - Front */}
        <svg
          className="absolute bottom-0 w-full h-full animate-wave-gentle-3"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="aboutWaveGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#00B0FF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00B0FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#aboutWaveGradient3)"
            d="M0,224L60,218.7C120,213,240,203,360,208C480,213,600,235,720,234.7C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Glow effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-menakta-primarySecond/20 via-menakta-primaryFirst/10 to-transparent blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-menakta-primaryFirst/30 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-menakta-primarySecond/60 rounded-full animate-float-medium" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-menakta-primarySecond/30 rounded-full animate-float-fast" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full animate-float-slow" />
        <div className="absolute top-1/4 right-1/5 w-1 h-1 bg-menakta-primaryFirst/40 rounded-full animate-float-medium" />
      </div>
    </section>
  );
}
