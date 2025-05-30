import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

// Expanded testimonials array with more stories
const testimonials = [
  {
    quote: "The brand identity BJAND & CO created for us perfectly captures our essence. The new logo and visual system increased our brand recognition by 85%, and our customer engagement has never been stronger.",
    author: "Sarah Martinez",
    position: "Marketing Director, EvoStyle",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their brand strategy transformed our market position. The comprehensive approach, from positioning to voice guidelines, helped us achieve a 120% increase in brand awareness and 45% growth in market share.",
    author: "Michael Chen",
    position: "CEO, InnovateNow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The content development strategy revolutionized our storytelling. Our engagement rates increased by 300%, and our content consistently outperforms industry benchmarks across all platforms.",
    author: "Emily Rodriguez",
    position: "Content Director, StoryBrand",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their creative direction elevated our brand to new heights. The cohesive visual strategy increased our social media engagement by 250% and doubled our conversion rates.",
    author: "David Park",
    position: "Creative Lead, VisualCraft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The digital management service transformed our online presence. Our website traffic increased by 180%, and our user engagement metrics improved across all digital platforms.",
    author: "Lisa Chen",
    position: "Digital Director, TechFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Our brand identity refresh was a game-changer. The new visual system and guidelines helped us secure three major partnerships and increased our market valuation by 40%.",
    author: "James Wilson",
    position: "Brand Manager, FutureScale",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The social media strategy they developed as part of our brand strategy increased our following by 400% and generated a 200% rise in social media-driven sales.",
    author: "Maria Garcia",
    position: "Social Media Director, TrendSetters",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their content development team created a video series that went viral, reaching 2M+ views and increasing our brand engagement by 500%. The ROI was exceptional.",
    author: "Alex Thompson",
    position: "Head of Content, ViralWave",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The creative direction for our rebranding campaign resulted in a 150% increase in brand recognition and helped us win three industry design awards.",
    author: "Rachel Kim",
    position: "Art Director, DesignPro",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their digital management services improved our website performance by 200%. The enhanced UX led to a 75% increase in customer satisfaction scores.",
    author: "Thomas Anderson",
    position: "Tech Director, WebFlow",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The brand strategy they developed helped us successfully enter three new markets. Our customer acquisition costs decreased by 40% while conversion rates doubled.",
    author: "Sophie Martinez",
    position: "Strategy Director, GrowthPro",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their content development approach transformed our B2B communication. Lead generation increased by 180% and our content engagement metrics tripled.",
    author: "Kevin Zhang",
    position: "B2B Content Lead, LeadGen",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The creative direction for our product launches has been outstanding. Each campaign exceeded targets, with our latest launch generating 300% more buzz than projected.",
    author: "Diana Patel",
    position: "Product Marketing Head, LaunchPad",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their digital management team revolutionized our e-commerce platform. Mobile conversions increased by 150% and cart abandonment reduced by 45%.",
    author: "Marcus Johnson",
    position: "E-commerce Director, ShopTech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The integrated brand strategy and social media campaign they created resulted in a 250% increase in engagement and a 180% boost in qualified leads.",
    author: "Laura Williams",
    position: "Marketing Head, SocialGrowth",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  }, []);

  useEffect(() => {
    let timeout: number;
    
    if (!isPaused) {
      timeout = setTimeout(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [currentIndex, isPaused]);

  const handleDragEnd = (_: never, info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const touchDiff = touchStart - touchEnd;

    if (Math.abs(touchDiff) > 50) {
      paginate(touchDiff > 0 ? 1 : -1);
    }
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm md:text-base tracking-wider text-white/50 uppercase"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-light mt-2 text-white/90"
          >
            Client Stories
          </motion.h2>
        </motion.div>

        <div 
          className="relative overflow-hidden max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[280px] sm:h-[260px] md:h-[240px] flex items-center justify-center">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { 
                    type: "spring", 
                    stiffness: 50,
                    damping: 20,
                    mass: 0.8,
                    duration: 0.8
                  },
                  opacity: { 
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1]
                  },
                  scale: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={handleDragEnd}
                className="absolute w-full px-4"
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0.8 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="relative"
                >
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="flex items-center justify-center mb-6 md:mb-8"
                  >
                    <Quote className="w-5 h-5 md:w-6 md:h-6 text-white/20" />
                  </motion.div>
                  <motion.blockquote 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center text-base sm:text-lg md:text-xl font-light leading-relaxed md:leading-relaxed text-white/80 mb-8 md:mb-10 px-4 sm:px-6 md:px-8"
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.blockquote>
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex items-center justify-center"
                  >
                    <div className="relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-1 ring-white/10 transition-transform duration-300 transform hover:scale-110">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="ml-3 sm:ml-4 text-center">
                      <div className="text-white/80 font-medium text-sm sm:text-base">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-white/40 text-xs sm:text-sm mt-0.5 sm:mt-1">
                        {testimonials[currentIndex].position}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="group focus:outline-none"
              >
                <motion.div 
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1,
                    backgroundColor: index === currentIndex ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:bg-white/40`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 