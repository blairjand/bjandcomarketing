import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the browser supports matchMedia
    if (typeof window.matchMedia !== 'function') {
      return;
    }

    // Create media query list
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Initial check
    setPrefersReducedMotion(mediaQuery.matches);

    // Create event listener
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}

// Animation variants that respect reduced motion preferences
export const getReducedMotionVariants = (prefersReducedMotion: boolean) => ({
  // Page transitions
  page: {
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    exit: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 },
    transition: {
      duration: prefersReducedMotion ? 0.1 : 0.6,
      ease: [0.23, 1, 0.32, 1]
    }
  },

  // Fade up
  fadeUp: {
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0.1 : 0.8,
      ease: [0.23, 1, 0.32, 1]
    }
  },

  // Scale up with blur
  scaleUp: {
    initial: prefersReducedMotion 
      ? { opacity: 0 } 
      : { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
    animate: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, scale: 1, filter: 'blur(0px)' },
    transition: {
      duration: prefersReducedMotion ? 0.1 : 0.8,
      ease: [0.23, 1, 0.32, 1]
    }
  },

  // Hover effects
  hover: {
    initial: { scale: 1 },
    hover: prefersReducedMotion 
      ? {} 
      : { 
          scale: 1.05,
          y: -5,
          transition: {
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }
        },
    tap: prefersReducedMotion
      ? {}
      : {
          scale: 0.95,
          transition: {
            duration: 0.1
          }
        }
  },

  // Container for staggered animations
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.3
      }
    }
  },

  // Items for staggered animations
  item: {
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0.1 : 0.6,
      ease: [0.23, 1, 0.32, 1]
    }
  }
}); 