"use client";

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
    <div className="bg-gradient-to-br from-[#0a1628] to-[#1a0a30] border border-menakta-primaryFirst/30 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
      {/* Quote Icon */}
      <div className="text-menakta-primaryFirst text-5xl font-serif mb-4">"</div>

      {/* Testimonial Text */}
      <p className="font-clash text-lg md:text-xl text-[#D4E5FF] leading-relaxed mb-8">
        {testimonial}
      </p>

      {/* Author Info */}
      <div className="group flex items-center gap-4 cursor-pointer">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-menakta-primaryFirst/20 to-purple-600/20 group-hover:from-menakta-primaryFirst group-hover:to-purple-600 group-hover:scale-110 transition-all duration-300 flex items-center justify-center text-menakta-primarySecond group-hover:text-white font-tusker text-xl overflow-hidden">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>

        {/* Name and Role */}
        <div>
          <h4 className="font-tusker text-white text-lg group-hover:text-menakta-primarySecond transition-colors duration-300">{name}</h4>
          <p className="font-clash text-menakta-primarySecond text-sm group-hover:text-white transition-colors duration-300">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
