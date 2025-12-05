"use client";

import AboutHero from "./(components)/AboutHero";
import Mission from "./(components)/Mission";
import Stats from "./(components)/Stats";
import Values from "./(components)/Values";
import Team from "./(components)/Team";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-menakta-secondaryFirst text-white">
      <AboutHero />
      <Mission />
      <Stats />
      <Values />
      <Team />

      {/* CTA Section */}
      <section className="w-full py-24 px-4 md:px-20 bg-gradient-to-t from-black via-[#001845] to-menakta-secondaryFirst text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-tusker text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            READY TO{" "}
            <span className="text-menakta-primarySecond">COLLABORATE?</span>
          </h2>
          <p className="font-clash text-[#D4E5FF] text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s create something extraordinary together. Our team is ready
            to bring your vision to life.
          </p>
          <a
            href="/landing#contact"
            className="inline-block font-clash px-10 py-4 bg-gradient-to-r from-menakta-primaryFirst to-purple-600 border border-transparent text-white rounded-full text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-menakta-primaryFirst/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-menakta-primaryFirst/20 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-200/30 rounded-full animate-float-medium" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-menakta-primaryFirst/20 rounded-full animate-float-fast" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-menakta-primarySecond/15 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/5 w-1 h-1 bg-purple-400/30 rounded-full animate-float-medium" />
      </div>
    </main>
  );
}
