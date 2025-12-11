"use client";
import Link from "next/link";
import Image from "next/image";

export default function MiddleImageSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="group relative p-20 px-6 md:px-20 bg-menakta-secondaryFirst flex items-center justify-center">
      {/* Background image with hover animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/optimized/middle-section.webp"
          alt="Innovation section background"
          fill
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoUAA0APm0qkUWkIqGYBABABsSgCdAEexO0oAAA/vPkn//Wf/1dv/q1b/+k5v/2av+1Q5MAn8AAAA=="
        />
      </div>

      {/* Gradient overlay - blue, purple, transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001845]/80 via-[#002060]/70 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-menakta-secondaryFirst via-transparent to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-tusker text-4xl text-menakta-secondarySecond uppercase tracking-tight leading-none mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-menakta-primarySecond mt-2">
            <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
             INNOVATION 
            </span>{" "}
            <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
              THAT 
            </span>{" "}
            <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
              FEELS 
            </span>{" "}
            <span className="inline-block opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
              ALIVE
            </span>{" "}
          </span>
        </h1>

        <p className="font-clash text-menakta-secondarySecond/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
          We create cutting-edge digital experiences using Unreal Engine, Web
          3D, and AI technologies that push the boundaries of interactive
          innovation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={"/services"} className="w-full sm:w-auto opacity-0 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards]">
            <button className="w-full sm:w-auto font-clash px-8 py-4 bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond border border-transparent text-white uppercase rounded-full text-sm tracking-wider hover:shadow-lg hover:shadow-menakta-primaryFirst/30 hover:scale-105 active:scale-95 transition-all duration-300">
              Our Services
            </button>
          </Link>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto font-clash px-8 py-4 border border-menakta-primaryFirst/30 text-menakta-primarySecond rounded-full text-sm uppercase tracking-wider hover:bg-menakta-primaryFirst/10 hover:border-menakta-primarySecond hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.4s_forwards]"
          >
            Contact
          </button>
         
        </div>
      </div>


      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-menakta-primaryFirst/30 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-200/60 rounded-full animate-float-medium" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-menakta-primaryFirst/30 rounded-full animate-float-fast" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-menakta-primarySecond/20 rounded-full animate-float-slow" />
        <div className="absolute top-1/4 right-1/5 w-1 h-1 bg-blue-400/40 rounded-full animate-float-medium" />
      </div>
    </section>
  );
}
