import { motion } from 'framer-motion';
import { Code, LineChart, Briefcase, ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: <LineChart className="w-12 h-12" />,
    title: 'Business Strategy',
    description: 'Comprehensive business planning and strategic development tailored to your needs.',
    features: [
      'Market Analysis',
      'Growth Strategy',
      'Risk Assessment',
      'Performance Optimization'
    ]
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: 'Digital Solutions',
    description: 'Cutting-edge digital transformation and technology integration for modern businesses.',
    features: [
      'Custom Software Development',
      'Cloud Solutions',
      'Digital Infrastructure',
      'Tech Consulting'
    ]
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: 'Consulting',
    description: 'Expert guidance and consulting services for sustainable business growth.',
    features: [
      'Business Process Optimization',
      'Change Management',
      'Strategic Planning',
      'Performance Metrics'
    ]
  }
];

const additionalFeatures = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Implementation',
    description: 'Quick and efficient implementation of solutions with minimal disruption.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security measures and reliable service delivery.'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Quality Assured',
    description: 'Rigorous quality control and assurance processes for all services.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-gradient">
            Our Premium Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our comprehensive range of professional services designed to elevate your business to new heights.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card group p-8"
            >
              <div className="text-white/90 group-hover:text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">{service.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 mb-8">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-center text-white/70 group-hover:text-white/90"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-white/50 group-hover:text-white" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="backdrop-blur rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-light text-center mb-12 text-gradient">
            Why Choose Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="text-center group"
              >
                <div className="inline-block p-4 rounded-full bg-white/5 mb-4 group-hover:bg-white/10 transition-all">
                  <div className="text-white/90 group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 group-hover:text-white/90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 