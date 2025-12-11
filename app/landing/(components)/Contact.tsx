"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-24 md:px-20 bg-menakta-secondaryFirst text-white relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-menakta-primaryFirst/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-menakta-primarySecond/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10 px-8">
        {/* Title */}
        <h2 className="font-tusker text-center text-6xl md:text-7xl tracking-tight mb-6">
          GET IN TOUCH
        </h2>
        <p className="font-clash text-center text-[#D4E5FF] text-lg max-w-2xl mx-auto mb-16">
          Ready to bring your vision to life? Let&apos;s create something
          extraordinary together.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-tusker text-3xl text-menakta-primarySecond mb-4">
                LET&apos;S TALK
              </h3>
              <p className="font-clash text-[#D4E5FF] leading-relaxed">
                Whether you have a project in mind or just want to explore
                possibilities, we&apos;re here to listen and collaborate.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="group flex items-center gap-4 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 flex items-center justify-center group-hover:from-menakta-primaryFirst group-hover:to-menakta-primarySecond group-hover:scale-110 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-clash text-white font-semibold">Email</p>
                  <p className="font-clash text-menakta-primarySecond group-hover:text-white transition-colors duration-300">
                    hello@menakta.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-4 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-menakta-primaryFirst/20 to-menakta-primarySecond/20 flex items-center justify-center group-hover:from-menakta-primaryFirst group-hover:to-menakta-primarySecond group-hover:scale-110 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-clash text-white font-semibold">
                    Location
                  </p>
                  <p className="font-clash text-menakta-primarySecond group-hover:text-white transition-colors duration-300">
                    Global / Remote First
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#"
                  className="group w-10 h-10 rounded-full border border-menakta-primaryFirst/50 bg-gradient-to-br from-menakta-primaryFirst/10 to-menakta-primarySecond/10 flex items-center justify-center hover:from-menakta-primaryFirst hover:to-menakta-primarySecond hover:border-menakta-primaryFirst hover:scale-110 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-full border border-menakta-primaryFirst/50 bg-gradient-to-br from-menakta-primaryFirst/10 to-menakta-primarySecond/10 flex items-center justify-center hover:from-menakta-primaryFirst hover:to-menakta-primarySecond hover:border-menakta-primaryFirst hover:scale-110 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-full border border-menakta-primaryFirst/50 bg-gradient-to-br from-menakta-primaryFirst/10 to-menakta-primarySecond/10 flex items-center justify-center hover:from-menakta-primaryFirst hover:to-menakta-primarySecond hover:border-menakta-primaryFirst hover:scale-110 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-menakta-primarySecond group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-[#0a1628]/80 to-[#001845]/80 border border-menakta-primaryFirst/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-clash text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-menakta-secondaryFirst/50 border border-menakta-primaryFirst/30 rounded-lg font-clash text-white placeholder-white/40 focus:outline-none focus:border-menakta-primarySecond transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-clash text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-menakta-secondaryFirst/50 border border-menakta-primaryFirst/30 rounded-lg font-clash text-white placeholder-white/40 focus:outline-none focus:border-menakta-primarySecond transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block font-clash text-white mb-2"
                >
                  Company{" "}
                  <span className="text-white/40 text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-menakta-secondaryFirst/50 border border-menakta-primaryFirst/30 rounded-lg font-clash text-white placeholder-white/40 focus:outline-none focus:border-menakta-primarySecond transition-colors"
                  placeholder="Your company"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-clash text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-menakta-secondaryFirst/50 border border-menakta-primaryFirst/30 rounded-lg font-clash text-white placeholder-white/40 focus:outline-none focus:border-menakta-primarySecond transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-clash px-8 py-4 bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond border border-transparent text-white rounded-full text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-menakta-primaryFirst/30 hover:scale-105 active:scale-[0.98] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
