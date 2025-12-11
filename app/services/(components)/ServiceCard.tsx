"use client";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  icon,
  features,
}: ServiceCardProps) {
  return (
    <div className="group relative border border-theme-border rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg bg-theme-card-bg hover:border-menakta-primarySecond/50 hover:shadow-menakta-primaryFirst/10">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-menakta-primaryFirst/5 to-menakta-primarySecond/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-menakta-primaryFirst to-menakta-primarySecond flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-tusker text-2xl mb-4 text-theme-text-primary">{title}</h3>

        {/* Description */}
        <p className="font-clash leading-relaxed mb-6 text-theme-text-secondary">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-menakta-primarySecond mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-clash text-sm text-theme-text-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
