import { motion } from 'framer-motion';
import { fadeUpVariants, containerVariants, itemVariants } from './PageTransition';
import PremiumIcon from './PremiumIcon';

export default function WhoWeAre() {
  const features = [
    {
      icon: 'innovation',
      title: "Innovation & Experience",
      description: "Dedicated to empowering businesses through a decade of expertise in Business Innovation and Technology."
    },
    {
      icon: 'target',
      title: "Client Success",
      description: "Facilitating achievement of client objectives and sharing insights that inspire growth."
    },
    {
      icon: 'handshake',
      title: "Comprehensive Support",
      description: "Practical and effective solutions in branding, marketing, design, sales, and business development."
    }
  ] as const;

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden content-visibility-auto">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-70" />
      
      <div className="container-responsive relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 sm:space-y-12 md:space-y-16"
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeUpVariants}
            className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto px-4 sm:px-6"
          >
            <h2 className="text-dynamic-3xl font-light tracking-wide text-gradient">
              Who We Are
            </h2>
            <div className="h-px w-16 sm:w-24 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start px-4 sm:px-6">
            {/* Left Column - Text Content */}
            <motion.div
              variants={containerVariants}
              className="space-y-6 sm:space-y-8"
            >
              <motion.p 
                variants={itemVariants}
                className="text-dynamic-lg font-light leading-relaxed text-white/80"
              >
                <span className="text-gradient font-normal">BJAND & CO</span> represents our initial step, a venture inspired by Blair Jan de Ocampo's dedication to empowering businesses and individuals, cultivated through over a decade of experience in Business Innovation and Technology. Our aim is to facilitate the achievement of our clients' objectives and to share insights that inspire continued growth.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-dynamic-base font-light leading-relaxed text-white/70"
              >
                With a commitment to humility, we offer practical and effective support in branding, marketing, design, sales, customer relations management, and business development. We strive to provide comprehensive assistance across a wide range of needs, prioritizing collaborative partnerships and a deep understanding of each client's unique circumstances.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-dynamic-lg font-light leading-relaxed text-white/80"
              >
                We are enthusiastic about developing BJAND & CO, with a focus on delivering tangible value, fostering strong relationships, and crafting narratives of shared success that motivate others to realize their aspirations.
              </motion.p>
            </motion.div>

            {/* Right Column - Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-6 sm:gap-8 lg:sticky lg:top-24"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="glass-card group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500
                           hover:hover-animation touch:touch-feedback"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-white/10 to-transparent 
                                    backdrop-blur-sm border border-white/10 flex items-center justify-center
                                    group-hover:border-white/20 transition-all duration-500
                                    group-hover:shadow-lg group-hover:shadow-white/5
                                    min-h-touch-target min-w-touch-target">
                        <PremiumIcon 
                          name={feature.icon} 
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors duration-500" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-dynamic-lg font-light tracking-wide text-gradient">
                        {feature.title}
                      </h3>
                      <p className="text-dynamic-base text-white/70 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            variants={fadeUpVariants}
            className="flex justify-center px-4 sm:px-6"
          >
            <div className="h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 