import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import WhoWeAre from '../components/WhoWeAre';

const stats = [
  { number: '1+', label: 'Year Journey' },
  { number: '20+', label: 'Projects Delivered' },
  { number: '15+', label: 'Satisfied Clients' },
  { number: '90%', label: 'Client Satisfaction' }
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Mission',
    description: 'Empowering individuals and businesses to achieve their full potential through innovative solutions.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Vision',
    description: 'Creating lasting impact by helping people transform their ideas into successful ventures.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Values',
    description: 'Building trust through transparency, dedication, and genuine commitment to client success.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Growth',
    description: 'Supporting sustainable growth through practical strategies and proven methodologies.'
  }
];

const taglines = [
  "TRANSFORMING IDEAS",
  "BUILDING FUTURES",
  "GROWING TOGETHER"
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                Crafting Digital
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/80 via-white/90 to-white">
                Excellence
              </span>
            </h1>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>

          <div className="space-y-6">
            {taglines.map((tagline, index) => (
              <motion.div
                key={tagline}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="relative overflow-hidden"
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.2 + (index * 0.2),
                    duration: 0.8,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <span className="block text-xl sm:text-2xl font-light tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
                    {tagline}
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 animate-expandLine" 
                       style={{ animationDelay: `${0.4 + (index * 0.2)}s` }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                className="text-4xl font-semibold text-gradient mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-white/70 font-light tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Values & Mission
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-white/90 group-hover:text-white mb-4 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-gradient mb-2">{value.title}</h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who We Are Section */}
        <WhoWeAre />
      </div>
    </div>
  );
} 