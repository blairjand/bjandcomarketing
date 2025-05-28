interface PremiumIconProps {
  name: 'innovation' | 'target' | 'handshake';
  className?: string;
}

export default function PremiumIcon({ name, className = '' }: PremiumIconProps) {
  const icons = {
    innovation: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 2v1M12 21v1M4.22 4.22l.7.7M18.78 18.78l.7.7M2 12h1M21 12h1M4.22 19.78l.7-.7M18.78 5.22l.7-.7" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 8v4M12 12l2 2" />
      </svg>
    ),
    target: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
      </svg>
    ),
    handshake: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3l3.13 3.13 3.13-3.13a2.13 2.13 0 0 0 0-3L12 5.36z" />
      </svg>
    )
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/5 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon container */}
      <div className="relative">
        {icons[name]}
      </div>
    </div>
  );
} 