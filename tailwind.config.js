/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'touch': {'raw': '(hover: none)'},
      'hover': {'raw': '(hover: hover)'},
      'portrait': {'raw': '(orientation: portrait)'},
      'landscape': {'raw': '(orientation: landscape)'},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'touch-target': '44px',
      },
      minWidth: {
        'touch-target': '44px',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(2px)',
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(12px)',
        'blur-xl': 'blur(16px)',
      },
      boxShadow: {
        'premium': '0 0 30px rgba(255, 255, 255, 0.1)',
        'premium-hover': '0 0 30px rgba(255, 255, 255, 0.2)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
      },
      colors: {
        'premium': {
          black: '#0A0A0A',
          'gray-100': 'rgba(255, 255, 255, 0.05)',
          'gray-200': 'rgba(255, 255, 255, 0.1)',
          'gray-300': 'rgba(255, 255, 255, 0.2)',
          'gray-400': 'rgba(255, 255, 255, 0.3)',
          'gray-500': 'rgba(255, 255, 255, 0.5)',
        },
        'social': {
          facebook: {
            light: '#1877F2',
            dark: '#0C44A0'
          },
          instagram: {
            yellow: '#FCAF45',
            pink: '#E4405F',
            purple: '#833AB4'
          },
          linkedin: {
            light: '#0A66C2',
            dark: '#004182'
          }
        }
      },
      fontSize: {
        'dynamic-base': 'clamp(0.875rem, 1vw + 0.5rem, 1rem)',
        'dynamic-lg': 'clamp(1.125rem, 1.5vw + 0.5rem, 1.25rem)',
        'dynamic-xl': 'clamp(1.25rem, 2vw + 0.5rem, 1.5rem)',
        'dynamic-2xl': 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)',
        'dynamic-3xl': 'clamp(1.875rem, 3vw + 0.5rem, 2.5rem)',
        'dynamic-4xl': 'clamp(2.25rem, 4vw + 0.5rem, 3rem)',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
