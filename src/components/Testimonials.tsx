import { motion, useAnimationControls, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Expanded testimonials array with more stories
const testimonials = [
  {
    quote: "BJAND & CO transformed our business with their innovative solutions. Their strategic approach and dedication to excellence made all the difference.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Working with BJAND & CO was a game-changer for our company. Their expertise in digital transformation helped us stay ahead of the competition.",
    author: "Michael Chen",
    position: "CTO, InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The team at BJAND & CO consistently delivers exceptional results. Their commitment to quality and innovation is unmatched in the industry.",
    author: "Emily Rodriguez",
    position: "Director of Operations, GlobalTech",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their creative approach revolutionized our brand identity. The results exceeded our expectations in every way.",
    author: "David Park",
    position: "Marketing Director, Innovate Co",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Exceptional service and remarkable results. BJAND & CO helped us achieve our digital transformation goals seamlessly.",
    author: "Lisa Chen",
    position: "Product Manager, FutureTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their strategic insights and innovative solutions helped us scale our operations globally. Truly outstanding partnership.",
    author: "James Wilson",
    position: "COO, Global Solutions",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "BJAND & CO's attention to detail and commitment to excellence made them the perfect partner for our digital journey.",
    author: "Maria Garcia",
    position: "Digital Director, NextGen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "They didn't just meet our expectations, they exceeded them. A truly transformative experience for our business.",
    author: "Alex Thompson",
    position: "Founder, InnovateLabs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

// Duplicate array for smooth infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isInView && !isPaused) {
      controls.start({
        x: [0, -100 * testimonials.length + '%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 120, // Even slower animation (2 minutes per cycle)
            ease: "linear"
          }
        }
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls, isPaused]);

  return (
    <div className="py-16 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-light tracking-[0.2em] text-white/60 uppercase"
          >
            Our Clients' Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl font-light mt-3 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/80"
          >
            Success Stories
          </motion.h2>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden" 
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          {/* Scrolling Content */}
          <motion.div
            animate={controls}
            className="flex gap-4 py-6"
            style={{ width: 'fit-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-[300px] flex-shrink-0 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full p-6 rounded-xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 
                             hover:border-white/20 transition-all duration-500">
                  {/* Premium Card Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quote Icon */}
                  <Quote className="w-5 h-5 text-white/10 mb-4" />
                  
                  {/* Content */}
                  <div className="relative space-y-4">
                    <blockquote className="text-sm text-white/80 group-hover:text-white/90 transition-colors duration-300 line-clamp-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center pt-3 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-white/30 transition-colors">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm text-white font-light">{testimonial.author}</div>
                        <div className="text-xs text-white/60">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pause Indicator */}
          <div 
            className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs text-white/60 
                       backdrop-blur-sm bg-black/40 transition-opacity duration-300 ${isPaused ? 'opacity-100' : 'opacity-0'}`}
          >
            Hover to pause
          </div>
        </div>
      </div>
    </div>
  );
} 