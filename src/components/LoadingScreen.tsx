import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="relative mobile-optimize">
        {/* Minimalist Loading Animation */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
          {/* Rotating Circle */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ 
              opacity: 1,
              rotate: 360,
              transition: {
                rotate: {
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity
                }
              }
            }}
            className="absolute inset-0 rounded-full border-2 sm:border-[3px] border-transparent 
                     border-t-white/80 border-r-white/80 mobile-optimize"
          />
          
          {/* Pulsing Inner Circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1, 0.8],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-3 sm:inset-4 rounded-full bg-white/10 backdrop-blur-sm mobile-optimize"
          />
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute inset-0 -z-10 scale-150">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
                     from-white/5 via-transparent to-transparent mobile-optimize"
          />
        </div>

        {/* Loading Text - Only visible on larger screens */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm 
                   tracking-widest uppercase hidden sm:block font-light"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
} 