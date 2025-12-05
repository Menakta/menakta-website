"use client";

import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-menakta-secondaryFirst text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-20 bg-gradient-to-b from-purple-900/50 via-blue-900/30 to-menakta-secondaryFirst overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-40 left-10 w-96 h-96 bg-menakta-primaryFirst/15 rounded-full blur-[150px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-tusker text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
            TERMS OF{" "}
            <span className="text-menakta-primarySecond">SERVICE</span>
          </h1>
          <p className="font-clash text-[#D4E5FF] text-lg opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]">
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
              AGREEMENT TO TERMS
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Menakta Tech (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) concerning your access to and use of our website and services.
            </p>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our services.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              OUR SERVICES
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              Menakta Tech provides a range of digital services including but not limited to:
            </p>
            <ul className="font-clash text-[#D4E5FF] leading-relaxed space-y-2 list-disc list-inside">
              <li>Unreal Engine game and application development</li>
              <li>AI automation and machine learning solutions</li>
              <li>Web development and design services</li>
              <li>Web 3D and WebXR immersive experiences</li>
              <li>Robotics and IoT development</li>
              <li>UI/UX design services</li>
            </ul>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              The specific scope, deliverables, and terms of any project will be outlined in a separate agreement or statement of work between you and the Company.
            </p>
          </div>

          {/* User Responsibilities */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              USER RESPONSIBILITIES
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              By using our services, you agree to:
            </p>
            <ul className="font-clash text-[#D4E5FF] leading-relaxed space-y-2 list-disc list-inside">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to any systems</li>
              <li>Not use our services to transmit harmful or malicious content</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              INTELLECTUAL PROPERTY
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              Unless otherwise specified in a separate agreement:
            </p>

            <div className="space-y-6 pl-4 border-l-2 border-menakta-primaryFirst/30">
              <div>
                <h3 className="font-clash text-white font-semibold mb-2">Our Property</h3>
                <p className="font-clash text-[#D4E5FF] leading-relaxed">
                  All content, features, and functionality of our website, including but not limited to text, graphics, logos, icons, images, and software, are owned by Menakta Tech and protected by intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="font-clash text-white font-semibold mb-2">Client Deliverables</h3>
                <p className="font-clash text-[#D4E5FF] leading-relaxed">
                  Upon full payment, clients receive the rights to use deliverables as specified in their project agreement. The specific scope of rights transfer will be detailed in individual contracts.
                </p>
              </div>

              <div>
                <h3 className="font-clash text-white font-semibold mb-2">Portfolio Rights</h3>
                <p className="font-clash text-[#D4E5FF] leading-relaxed">
                  We reserve the right to showcase completed work in our portfolio and marketing materials unless otherwise agreed in writing.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              PAYMENT TERMS
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              Payment terms for our services are as follows:
            </p>
            <ul className="font-clash text-[#D4E5FF] leading-relaxed space-y-2 list-disc list-inside">
              <li>Specific payment schedules will be outlined in project agreements</li>
              <li>Invoices are due within the timeframe specified in each agreement</li>
              <li>Late payments may incur additional fees as specified in contracts</li>
              <li>We reserve the right to suspend services for overdue payments</li>
              <li>All fees are non-refundable unless otherwise stated</li>
            </ul>
          </div>

          {/* Confidentiality */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              CONFIDENTIALITY
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our engagement. This includes but is not limited to business strategies, technical specifications, and trade secrets.
            </p>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              Confidentiality obligations shall survive the termination of any agreement between the parties for a period of three (3) years unless otherwise specified.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              LIMITATION OF LIABILITY
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              To the maximum extent permitted by law:
            </p>
            <ul className="font-clash text-[#D4E5FF] leading-relaxed space-y-2 list-disc list-inside">
              <li>Our services are provided &quot;as is&quot; without warranties of any kind</li>
              <li>We shall not be liable for any indirect, incidental, special, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid for the specific service</li>
              <li>We are not responsible for any third-party services or integrations</li>
            </ul>
          </div>

          {/* Indemnification */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              INDEMNIFICATION
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              You agree to indemnify, defend, and hold harmless Menakta Tech and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of our services or violation of these Terms.
            </p>
          </div>

          {/* Termination */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              TERMINATION
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to:
            </p>
            <ul className="font-clash text-[#D4E5FF] leading-relaxed space-y-2 list-disc list-inside">
              <li>Breach of these Terms</li>
              <li>Non-payment of fees</li>
              <li>Illegal or unauthorized use of our services</li>
              <li>At our sole discretion for any other reason</li>
            </ul>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
            </p>
          </div>

          {/* Governing Law */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              GOVERNING LAW
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved through good-faith negotiation, and if necessary, binding arbitration.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              CHANGES TO TERMS
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Severability */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              SEVERABILITY
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h2 className="font-tusker text-2xl md:text-3xl text-menakta-primarySecond">
              CONTACT US
            </h2>
            <p className="font-clash text-[#D4E5FF] leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="font-clash text-[#D4E5FF] leading-relaxed p-6 rounded-xl bg-gradient-to-br from-menakta-primaryFirst/10 to-purple-600/10 border border-menakta-primaryFirst/20">
              <p className="text-white font-semibold">Menakta Tech</p>
              <p>Email: legal@menakta.com</p>
              <p>Website: www.menakta.com</p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="pt-8 border-t border-menakta-primaryFirst/20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-clash text-menakta-primarySecond hover:text-white transition-colors duration-300"
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
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500/20 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-200/30 rounded-full animate-float-medium" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-purple-500/20 rounded-full animate-float-fast" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-menakta-primarySecond/15 rounded-full animate-float-slow" />
      </div>
    </main>
  );
}
