import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          // Preload the video
          videoRef.current.load();
          // Play immediately
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.error('Playback error:', error);
              // Retry playback on error
              setTimeout(() => {
                if (videoRef.current) {
                  videoRef.current.play().catch(console.error);
                }
              }, 1000);
            });
          }
        }
      } catch (error) {
        console.error('Error playing video:', error);
        setHasVideoError(true);
      }
    };

    // Start loading video as soon as component mounts
    playVideo();

    // Add visibility change handler
    const handleVisibilityChange = () => {
      if (!document.hidden && videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(console.error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced 4K Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {!hasVideoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/videos/hero-background-poster.jpg"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={(e) => {
              console.error('Video error:', e);
              setHasVideoError(true);
            }}
            className={`object-cover w-full h-full transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVideoLoaded ? 'opacity-85 blur-0 scale-[1.02]' : 'opacity-0 blur-sm scale-100'
            }`}
            style={{
              filter: 'brightness(1) contrast(1.1) saturate(1.1)',
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
              // Add performance optimizations
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              WebkitTransform: 'translate3d(0, 0, 0)',
              WebkitPerspective: '1000',
            }}
          >
            {/* Add multiple source formats for better browser compatibility */}
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            <source src="/videos/hero-background.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        )}

        {/* Loading State - Show only briefly */}
        {!isVideoLoaded && !hasVideoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/90 transition-opacity duration-500">
            <div className="w-8 h-8 border-2 border-white/40 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Optimized Gradient Overlays */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/30 via-black/20 to-black/40"
          style={{ willChange: 'opacity' }}
        />
        
        {/* Enhanced Vignette with Performance Optimization */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/5 to-black/30"
          style={{ willChange: 'opacity' }}
        />

        {/* Optimized Glass Effect */}
        <div 
          className="absolute inset-0 backdrop-blur-[0.2px] bg-black/5"
          style={{ willChange: 'backdrop-filter' }}
        />
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