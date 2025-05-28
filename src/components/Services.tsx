import { motion } from 'framer-motion';
import { useState } from 'react';
import { services } from '../data/services';

export default function Services() {
  return (
    <section className="relative min-h-screen w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-gray-900/40 to-black overflow-hidden">
      {/* Premium Gradient Orbs - Responsive sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] sm:w-[1000px] h-[200%] sm:h-[1000px] bg-gradient-to-b from-white/[0.08] to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] sm:w-[800px] h-[150%] sm:h-[800px] bg-gradient-to-t from-white/[0.08] to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Responsive typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-white/60 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/80 mb-6 sm:mb-8 px-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/60 font-light leading-relaxed px-4"
          >
            Elevate your brand with our comprehensive suite of digital services. 
            We combine creativity, technology, and strategy to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Services Grid - Responsive layout */}
        <div className="max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {services.slice(2).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-b from-white/[0.08] via-white/[0.05] to-transparent 
                 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/40 h-full flex flex-col"
    >
      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent transition-opacity duration-500 z-10 
                      ${isHovered ? 'opacity-40' : 'opacity-70'}`} />
        
        {/* Loading State */}
        {!isVideoLoaded && !hasVideoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/90">
            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/40 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Error State */}
        {hasVideoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/90">
            <div className="text-center px-4">
              <p className="text-white/60 text-xs sm:text-sm mb-2">Video could not be loaded</p>
              <button 
                onClick={() => {
                  setHasVideoError(false);
                  const video = document.getElementById(`video-${service.id}`) as HTMLVideoElement;
                  if (video) {
                    video.load();
                    video.play();
                  }
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Video */}
        <video
          id={`video-${service.id}`}
          src={service.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setHasVideoError(true)}
          className={`w-full h-full object-cover transform transition-all duration-700 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-b from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-3 sm:mb-4 
                     transition-all duration-300">
          {service.serviceName}
        </h3>
        <p className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 line-clamp-2 group-hover:text-white/80 transition-colors">
          {service.shortDescription}
        </p>

        <div className="space-y-6 sm:space-y-8 flex-1">
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold text-white/80">
              Key Benefits
            </h4>
            <ul className="text-xs sm:text-sm text-white/60 space-y-2 sm:space-y-3">
              {service.benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center group-hover:text-white/80 transition-colors"
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-white/60 to-white/40 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold text-white/80">
              What You Get
            </h4>
            <ul className="text-xs sm:text-sm text-white/60 space-y-2 sm:space-y-3">
              {service.deliverables.map((deliverable, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i * 0.1) + 0.3 }}
                  className="flex items-center group-hover:text-white/80 transition-colors"
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-white/60 to-white/40 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                  {deliverable}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 sm:mt-8 w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-white/[0.08] via-white/[0.12] to-white/[0.08] hover:from-white/[0.12] 
                   hover:via-white/[0.16] hover:to-white/[0.12] text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 
                   shadow-lg shadow-black/40 relative overflow-hidden group backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <span className="relative z-10">Learn More</span>
        </motion.button>
      </div>
    </motion.div>
  );
} 