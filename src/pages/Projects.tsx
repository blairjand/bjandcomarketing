import { motion } from 'framer-motion';
import { ArrowRight, Palette, Lightbulb, PenTool, Eye, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'brand-identity',
    title: 'Brand Identity Evolution',
    client: 'Luminary Fashion',
    category: 'Brand Identity',
    image: '/images/service-brand-identity/main.jpg',
    icon: <Palette className="w-6 h-6 text-pink-500" />,
    metrics: [
      { label: 'Brand Recognition', value: '+85%' },
      { label: 'Customer Trust', value: '+65%' },
      { label: 'Market Impact', value: '92%' }
    ]
  },
  {
    id: 'brand-strategy',
    title: 'Strategic Brand Evolution',
    client: 'EcoVibe Living',
    category: 'Brand Strategy',
    image: '/images/service-brand-strategy/main.jpg',
    icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
    metrics: [
      { label: 'Market Share', value: '+45%' },
      { label: 'Brand Value', value: '2.5x' },
      { label: 'ROI', value: '320%' }
    ]
  },
  {
    id: 'content-development',
    title: 'Content Excellence',
    client: 'Mindful Media Co',
    category: 'Content Development',
    image: '/images/service-content-development/main.jpg',
    icon: <PenTool className="w-6 h-6 text-yellow-500" />,
    metrics: [
      { label: 'Engagement Rate', value: '+175%' },
      { label: 'Content Reach', value: '5M+' },
      { label: 'Conversion', value: '+88%' }
    ]
  },
  {
    id: 'creative-direction',
    title: 'Artisan Coffee Experience',
    client: 'Brew & Co. Coffee Roasters',
    category: 'Creative Direction',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070',
    icon: <Eye className="w-6 h-6 text-purple-500" />,
    metrics: [
      { label: 'Menu Innovation', value: '+45%' },
      { label: 'Customer Retention', value: '+85%' },
      { label: 'Barista Excellence', value: '95%' }
    ]
  },
  {
    id: 'digital-management',
    title: 'Digital Presence',
    client: 'Future Forward Tech',
    category: 'Digital Management',
    image: '/images/service-digital-management/main.jpg',
    icon: <Globe className="w-6 h-6 text-green-500" />,
    metrics: [
      { label: 'Online Growth', value: '250%' },
      { label: 'Digital Reach', value: '10M+' },
      { label: 'Engagement', value: '+150%' }
    ]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative"
        >
          {/* Premium Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-white/60 text-sm font-medium tracking-wider uppercase mb-4 relative"
          >
            Featured Work
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 relative"
          >
            Transformative Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-3xl mx-auto relative"
          >
            Discover how we've helped brands evolve, innovate, and succeed through strategic creativity and digital excellence.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group ${
                index === projects.length - 1 && projects.length % 2 !== 0
                  ? 'md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto'
                  : ''
              }`}
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-black/90 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-white/5">
                  {/* Premium Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      style={{ 
                        objectPosition: 'center',
                      }}
                      whileHover={{ scale: 1.05 }}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />
                    <div className="absolute bottom-6 left-6 flex items-center z-30">
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 mr-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-110">
                        {project.icon}
                      </div>
                      <span className="text-white/90 text-sm font-medium tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-white/90 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 group-hover:text-white/80 transition-colors duration-500">
                    {project.client}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-semibold text-white mb-1 group-hover:text-white/90 transition-colors duration-500">
                          {metric.value}
                        </div>
                        <div className="text-sm text-white/60 group-hover:text-white/70 transition-colors duration-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-white/80 group-hover:text-white transition-all duration-500">
                    <span className="mr-2">View Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-16 overflow-hidden"
        >
          {/* Premium Layered Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/90 to-black/80 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer" />
          </div>
          
          <div className="relative z-10">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-light mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                Our Impact in Numbers
              </h2>
              <div className="w-20 h-[1px] mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Palette className="w-7 h-7 text-pink-500" />,
                  value: '5+',
                  label: 'Brands Empowered',
                  gradient: 'from-pink-500/20 via-pink-500/5 to-transparent'
                },
                {
                  icon: <Globe className="w-7 h-7 text-green-500" />,
                  value: '50K+',
                  label: 'Potential Digital Reach',
                  gradient: 'from-green-500/20 via-green-500/5 to-transparent'
                },
                {
                  icon: <Eye className="w-7 h-7 text-purple-500" />,
                  value: '95%+',
                  label: 'Client Satisfaction',
                  gradient: 'from-purple-500/20 via-purple-500/5 to-transparent'
                },
                {
                  icon: <PenTool className="w-7 h-7 text-yellow-500" />,
                  value: '10+',
                  label: 'Projects Delivered',
                  gradient: 'from-yellow-500/20 via-yellow-500/5 to-transparent'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                  className="relative group"
                >
                  <div className="relative rounded-2xl p-6 backdrop-blur-sm border border-white/10 
                               hover:border-white/20 transition-all duration-500 overflow-hidden">
                    {/* Individual Stat Background */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${stat.gradient} opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                                 bg-gradient-to-b from-white/10 to-white/5 mb-4 mx-auto
                                 shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-black/30
                                 border border-white/10 group-hover:border-white/20 transition-all duration-500"
                      >
                        {stat.icon}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="text-4xl font-light bg-clip-text text-transparent 
                                    bg-gradient-to-r from-white via-white/90 to-white/80">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/60 group-hover:text-white/80 
                                    transition-colors duration-500 font-light tracking-wide">
                          {stat.label}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 