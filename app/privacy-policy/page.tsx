"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen transition-colors duration-300 bg-theme-bg-primary text-theme-text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-20 overflow-hidden transition-colors duration-300 bg-gradient-to-b from-theme-bg-tertiary via-theme-bg-secondary to-theme-bg-primary">
        {/* Background Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-menakta-primaryFirst/20 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-menakta-primarySecond/15 rounded-full blur-[150px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-tusker text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards] text-theme-text-primary">
            PRIVACY{" "}
            <span className="text-menakta-primarySecond">POLICY</span>
          </h1>
          <p className="font-clash text-lg opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards] text-theme-text-secondary">
            Last updated: December 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              INTRODUCTION
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              At Menakta Tech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this policy, please do not access our website or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              INFORMATION WE COLLECT
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              We may collect information about you in various ways, including:
            </p>

            <div className="space-y-6 pl-4 border-l-2 border-menakta-primaryFirst/30">
              <div>
                <h3 className={`font-clash font-semibold mb-2 text-theme-text-primary`}>Personal Data</h3>
                <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
                  When you contact us or request our services, we may collect personally identifiable information such as your name, email address, phone number, company name, and any other information you voluntarily provide.
                </p>
              </div>

              <div>
                <h3 className={`font-clash font-semibold mb-2 text-theme-text-primary`}>Usage Data</h3>
                <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
                  We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed.
                </p>
              </div>

              <div>
                <h3 className={`font-clash font-semibold mb-2 text-theme-text-primary`}>Cookies and Tracking Technologies</h3>
                <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
                  We use cookies, web beacons, and similar tracking technologies to enhance your experience on our website and gather information about how you interact with our services.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              HOW WE USE YOUR INFORMATION
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              We may use the information we collect for various purposes, including:
            </p>
            <ul className={`font-clash leading-relaxed space-y-2 list-disc list-inside text-theme-text-secondary`}>
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send you technical notices, updates, and support messages</li>
              <li>To communicate with you about products, services, and events</li>
              <li>To monitor and analyze trends, usage, and activities</li>
              <li>To detect, investigate, and prevent fraudulent transactions</li>
              <li>To personalize and improve your experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              INFORMATION SHARING
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className={`font-clash leading-relaxed space-y-2 list-disc list-inside text-theme-text-secondary`}>
              <li>With service providers who assist us in operating our website and services</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
              <li>With your consent or at your direction</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              DATA SECURITY
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              YOUR RIGHTS
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className={`font-clash leading-relaxed space-y-2 list-disc list-inside text-theme-text-secondary`}>
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to erase your personal data</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
          </div>

          {/* Third-Party Links */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              THIRD-PARTY LINKS
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              CHILDREN&apos;S PRIVACY
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              CHANGES TO THIS POLICY
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              CONTACT US
            </h2>
            <p className={`font-clash leading-relaxed text-theme-text-secondary`}>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="font-clash leading-relaxed p-6 rounded-xl border text-theme-text-secondary bg-theme-card-bg border-theme-border">
              <p className={`font-semibold text-theme-text-primary`}>Menakta Tech</p>
              <p>Email: privacy@menakta.com</p>
              <p>Website: www.menakta.com</p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="pt-8 border-t border-theme-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-clash transition-colors duration-300 text-menakta-primarySecond hover:text-menakta-primaryFirst"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-menakta-primaryFirst/20 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-200/30 rounded-full animate-float-medium" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-menakta-primaryFirst/20 rounded-full animate-float-fast" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-menakta-primarySecond/15 rounded-full animate-float-slow" />
      </div>
    </main>
  );
}
