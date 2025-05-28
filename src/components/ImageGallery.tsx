import { motion } from 'framer-motion';
import { Palette, Lightbulb, PenTool, Eye, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    src: '/images/service-brand-identity/main.jpg',
    alt: 'Brand Identity Evolution - Luminary Fashion',
    category: 'Brand Identity',
    projectId: 'brand-identity',
    icon: <Palette className="w-6 h-6 text-pink-500" />,
    metrics: '+85% Brand Recognition'
  },
  {
    src: '/images/service-brand-strategy/main.jpg',
    alt: 'Strategic Brand Evolution - EcoVibe Living',
    category: 'Brand Strategy',
    projectId: 'brand-strategy',
    icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
    metrics: '2.5x Brand Value Growth'
  },
  {
    src: '/images/service-content-development/main.jpg',
    alt: 'Content Excellence - Mindful Media Co',
    category: 'Content Development',
    projectId: 'content-development',
    icon: <PenTool className="w-6 h-6 text-yellow-500" />,
    metrics: '+175% Engagement Rate'
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070',
    alt: 'Artisan Coffee Experience - Brew & Co. Coffee Roasters',
    category: 'Creative Direction',
    projectId: 'creative-direction',
    icon: <Eye className="w-6 h-6 text-purple-500" />,
    metrics: '+45% Menu Innovation'
  },
  {
    src: '/images/service-digital-management/main.jpg',
    alt: 'Digital Presence - Future Forward Tech',
    category: 'Digital Management',
    projectId: 'digital-management',
    icon: <Globe className="w-6 h-6 text-green-500" />,
    metrics: '+250% Online Growth'
  }
];

export default function ImageGallery() {
  return (
    <div className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-white/60 text-sm font-medium tracking-wider uppercase mb-4"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
          >
            Our Latest Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-3xl mx-auto"
          >
            Discover how we transform brands through strategic creativity and innovative solutions.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative w-full flex ${
                index === galleryImages.length - 1 && galleryImages.length % 2 !== 0
                  ? 'md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto'
                  : ''
              }`}
            >
              <Link to={`/projects/${image.projectId}`} className="block w-full">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-black/90 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-white/5 h-full">
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700"
                      style={{ objectPosition: 'center' }}
                      whileHover={{ scale: 1.05 }}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />
                    <div className="absolute bottom-6 left-6 flex items-center z-30">
                      <div className="p-3 rounded-full bg-white shadow-lg shadow-black/20 backdrop-blur-md mr-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-110">
                        {image.icon}
                      </div>
                      <span className="text-white/90 text-sm font-medium tracking-wide">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-4 group-hover:text-white/90 transition-colors duration-500">
                      {image.alt}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm group-hover:text-white/80 transition-colors duration-500">
                        {image.metrics}
                      </span>
                      <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-500 flex items-center">
                        View Case Study 
                        <motion.span 
                          className="inline-block ml-1"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 