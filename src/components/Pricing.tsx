import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: number;
  image: string;
  isRecommended?: boolean;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Plan',
    price: 499,
    image: '/images/pricing/basic-team.jpg',
    features: [
      'Social Media Management (2 platforms)',
      'Basic SEO Optimization',
      'Monthly Performance Report'
    ]
  },
  {
    name: 'Standard Plan',
    price: 999,
    image: '/images/pricing/standard-team.jpg',
    isRecommended: true,
    features: [
      'Social Media Management',
      'Advanced SEO Optimization',
      'Monthly Performance Report',
      'Bi-weekly Blog Post',
      'Email Marketing Campaign (1/month)'
    ]
  },
  {
    name: 'Premium Plan',
    price: 1499,
    image: '/images/pricing/premium-team.jpg',
    features: [
      'Social Media Management',
      'Comprehensive SEO Optimization',
      'Weekly Blog Post',
      'Bi-weekly Email Newsletter',
      'PPC Campaign Management'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black/40 to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Digital Marketing Pricing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative group rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-500 ${
                plan.isRecommended 
                  ? 'bg-gradient-to-b from-gray-800/90 via-gray-900/90 to-black/90 border-purple-500/50 hover:border-purple-400'
                  : 'bg-gradient-to-b from-gray-900/90 via-black/90 to-black/90 border-gray-800/50 hover:border-purple-500/50'
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-yellow-400 text-black rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                <img
                  src={plan.image}
                  alt={`${plan.name} illustration`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="relative z-20 p-6">
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {plan.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-semibold text-purple-400 group-hover:text-purple-300">
                    Features
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (i * 0.1) }}
                        className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 flex items-center justify-center space-x-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    plan.isRecommended
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-900/30'
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 