"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./(components)/ServiceCard";
import ServicesHero from "./(components)/ServicesHero";

const servicesData = [
  {
    title: "UNREAL ENGINE DEVELOPMENT",
    description:
      "We craft stunning, high-performance games and interactive experiences using Unreal Engine 5. From concept to launch, we bring your vision to life with cutting-edge graphics and immersive gameplay.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
        />
      </svg>
    ),
    features: [
      "AAA-quality game development",
      "Real-time 3D visualizations",
      "Virtual production & cinematics",
      "Multiplayer & networking solutions",
    ],
  },
  {
    title: "AI AUTOMATION",
    description:
      "Harness the power of artificial intelligence to automate workflows, enhance decision-making, and create intelligent systems that learn and adapt to your business needs.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
    features: [
      "Custom AI model development",
      "Process automation & optimization",
      "Natural language processing",
      "Predictive analytics & insights",
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Build modern, responsive, and high-performance web applications that deliver exceptional user experiences. From landing pages to complex platforms, we create web solutions that stand out.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    features: [
      "React & Next.js applications",
      "E-commerce platforms",
      "Progressive web apps (PWA)",
      "API development & integration",
    ],
  },
  {
    title: "WEB 3D & WEBXR",
    description:
      "Create immersive 3D experiences for the web using Three.js, WebGL, and WebXR technologies. From interactive product configurators to virtual showrooms, we push the boundaries of web experiences.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    features: [
      "Interactive 3D web experiences",
      "Virtual & augmented reality",
      "Product configurators",
      "Digital twins & simulations",
    ],
  },
  {
    title: "ROBOTICS & IOT",
    description:
      "Design and develop intelligent robotic systems and IoT solutions that bridge the physical and digital worlds. From interactive robots to smart sensor networks, we create technology that connects.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
        />
      </svg>
    ),
    features: [
      "Social & interactive robots",
      "IoT sensor networks",
      "Embedded systems development",
      "Real-time control systems",
    ],
  },
  {
    title: "UI/UX DESIGN",
    description:
      "Craft intuitive, beautiful, and user-centered designs that delight users and drive engagement. We combine aesthetics with functionality to create digital experiences that people love to use.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Design systems & branding",
      "Motion design & micro-interactions",
    ],
  },
];

export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const servicesObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setServicesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const ctaObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCtaVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) servicesObserver.observe(servicesRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <main className="min-h-screen bg-menakta-secondaryFirst text-white">
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Grid */}
      <section ref={servicesRef} className="py-16 px-6 md:px-20 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-menakta-primaryFirst/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Section Title */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              servicesVisible
                ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-tusker text-4xl md:text-5xl tracking-tight mb-4">
              WHAT WE OFFER
            </h2>
            <p className="font-clash text-[#D4E5FF] text-lg max-w-2xl mx-auto">
              Comprehensive solutions powered by cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  servicesVisible
                    ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  animationDelay: servicesVisible
                    ? `${0.2 + index * 0.1}s`
                    : "0s",
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-24 px-6 md:px-20 relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-menakta-primaryFirst/5 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className={`font-tusker text-4xl md:text-5xl tracking-tight mb-6 transition-all duration-700 ${
              ctaVisible
                ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]"
                : "opacity-0 translate-y-10"
            }`}
          >
            READY TO START YOUR PROJECT?
          </h2>
          <p
            className={`font-clash text-[#D4E5FF] text-lg mb-10 max-w-2xl mx-auto transition-all duration-700 ${
              ctaVisible
                ? "opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]"
                : "opacity-0"
            }`}
          >
            Let&apos;s discuss how we can bring your ideas to life with our
            expertise in emerging technologies.
          </p>
          <a
            href="/landing#contact"
            className={`inline-block font-clash px-10 py-4 bg-gradient-to-r from-menakta-primaryFirst to-menakta-primarySecond text-white rounded-full text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-menakta-primarySecond/30 active:scale-95 transition-all duration-300 ${
              ctaVisible
                ? "opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]"
                : "opacity-0 translate-y-10"
            }`}
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
