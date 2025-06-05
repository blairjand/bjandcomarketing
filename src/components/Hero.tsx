import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero/astronaut-space.jpg"
          alt="Astronaut floating in space"
          className="object-cover w-full h-full opacity-100"
          loading="eager"
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        
        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-16"
        >
          {/* Premium Typography Section */}
          <div className="space-y-8">
            {/* First Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="overflow-hidden"
            >
              <h1 className="font-inter text-base sm:text-lg md:text-xl font-light tracking-[.25em] leading-loose">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/90">
                  FUELLED BY PASSION
                </span>
              </h1>
            </motion.div>

            {/* Second Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="overflow-hidden"
            >
              <h2 className="font-inter text-base sm:text-lg md:text-xl font-light tracking-[.25em] leading-loose">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/95 via-white/90 to-white/85">
                  DRIVEN BY INNOVATION
                </span>
              </h2>
            </motion.div>

            {/* Third Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="overflow-hidden"
            >
              <h2 className="font-inter text-base sm:text-lg md:text-xl font-light tracking-[.25em] leading-loose">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-white/85 to-white/80">
                  DESIGNED FOR SUCCESS
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="w-12 h-[1px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </motion.div>
      </div>

      {/* Subtle Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
      </div>
    </section>
  );
} 