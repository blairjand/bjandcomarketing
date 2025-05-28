import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced 4K Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`object-cover w-full h-full transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVideoLoaded ? 'opacity-85 blur-0 scale-[1.02]' : 'opacity-0 blur-sm scale-100'
          }`}
          style={{
            filter: 'brightness(1) contrast(1.1) saturate(1.1)',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Refined Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/30 via-black/20 to-black/40" />
        
        {/* Enhanced Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/5 to-black/30" />

        {/* Minimal Glass Effect */}
        <div className="absolute inset-0 backdrop-blur-[0.2px] bg-black/5" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Main Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              y: isVisible ? 0 : 20
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-16 relative"
          >
            <div className="space-y-14">
              {/* Premium Minimalist Typography */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                className="space-y-8"
              >
                <h1 className="text-[1.2rem] md:text-[1.8rem] lg:text-[2.2rem] font-extralight tracking-[0.2em] leading-relaxed">
                  <AnimatePresence>
                    <motion.span
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-white/85 to-white/80"
                      style={{ 
                        textShadow: '0 0 30px rgba(0,0,0,0.3)',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    >
                      FUELLED BY PASSION
                    </motion.span>
                    <motion.div className="h-8" /> {/* Increased Spacing */}
                    <motion.span
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-white/85 via-white/80 to-white/75"
                      style={{ 
                        textShadow: '0 0 30px rgba(0,0,0,0.3)',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    >
                      DRIVEN BY INNOVATION
                    </motion.span>
                    <motion.div className="h-8" /> {/* Increased Spacing */}
                    <motion.span
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/75 to-white/70"
                      style={{ 
                        textShadow: '0 0 30px rgba(0,0,0,0.3)',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.9 }}
                    >
                      DESIGNED FOR SUCCESS
                    </motion.span>
                  </AnimatePresence>
                </h1>
              </motion.div>
            </div>

            {/* Minimal Separator */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-[60px] h-[1px] mt-16"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.12 }}
              transition={{ duration: 2, delay: 1.5 }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 