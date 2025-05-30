import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mldbqpva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div>
              <motion.h1 
                className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                  Let's Create
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/80 via-white/90 to-white">
                  Something Great
                </span>
              </motion.h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
              <p className="text-white/70 text-lg font-light leading-relaxed">
                Ready to transform your ideas into reality? We're here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div 
                className="glass-card group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent 
                              backdrop-blur-sm border border-white/10 flex items-center justify-center
                              group-hover:border-white/20 transition-all duration-500">
                    <MapPin className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-gradient font-medium mb-1">Our Location</h3>
                    <p className="text-white/70 font-light">Al Khuwair, Muscat, Oman</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="glass-card group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent 
                              backdrop-blur-sm border border-white/10 flex items-center justify-center
                              group-hover:border-white/20 transition-all duration-500">
                    <Mail className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-gradient font-medium mb-1">Email Us</h3>
                    <p className="text-white/70 font-light">dblairjan@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="glass-card group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent 
                              backdrop-blur-sm border border-white/10 flex items-center justify-center
                              group-hover:border-white/20 transition-all duration-500">
                    <Phone className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-gradient font-medium mb-1">Call Us</h3>
                    <p className="text-white/70 font-light">+968 9468 9774</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
              
              {/* Logo Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex justify-center mb-8 relative z-10"
              >
                <div className="relative group">
                  {/* Logo Container with Premium Effects */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex items-center justify-center">
                    {/* Logo Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-700 opacity-80" />
                    
                    {/* Logo Image */}
                    <div className="relative z-10 w-full h-full p-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-700">
                      <img 
                        src="/bjand-logo.jpg"
                        alt="BJAND & CO. Logo"
                        className="w-full h-full object-contain filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125 transition-all duration-700 rounded-lg"
                        style={{
                          filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.15))'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    className="group relative"
                    animate={focusedField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-xl -z-10 
                                  group-hover:from-white/[0.08] group-hover:to-white/[0.02] transition-all duration-300" />
                    <div className="p-1 relative">
                      <User className="w-5 h-5 text-white/40 group-hover:text-white/60 
                                    group-focus-within:text-white transition-colors absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] pl-10 pr-4 py-3 rounded-lg text-white text-sm
                                  placeholder:text-white/40 focus:outline-none focus:ring-1 ring-white/20
                                  transition-all duration-300 focus:bg-white/[0.05]"
                        required
                        aria-label="Name"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="group relative"
                    animate={focusedField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-xl -z-10 
                                  group-hover:from-white/[0.08] group-hover:to-white/[0.02] transition-all duration-300" />
                    <div className="p-1 relative">
                      <Mail className="w-5 h-5 text-white/40 group-hover:text-white/60 
                                    group-focus-within:text-white transition-colors absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your email"
                        className="w-full bg-white/[0.03] pl-10 pr-4 py-3 rounded-lg text-white text-sm
                                  placeholder:text-white/40 focus:outline-none focus:ring-1 ring-white/20
                                  transition-all duration-300 focus:bg-white/[0.05]"
                        required
                        aria-label="Email"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="group relative"
                  animate={focusedField === 'phone' ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-xl -z-10 
                                group-hover:from-white/[0.08] group-hover:to-white/[0.02] transition-all duration-300" />
                  <div className="p-1 relative">
                    <Phone className="w-5 h-5 text-white/40 group-hover:text-white/60 
                                  group-focus-within:text-white transition-colors absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your phone (optional)"
                      className="w-full bg-white/[0.03] pl-10 pr-4 py-3 rounded-lg text-white text-sm
                                placeholder:text-white/40 focus:outline-none focus:ring-1 ring-white/20
                                transition-all duration-300 focus:bg-white/[0.05]"
                      aria-label="Phone"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="group relative"
                  animate={focusedField === 'subject' ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-xl -z-10 
                                group-hover:from-white/[0.08] group-hover:to-white/[0.02] transition-all duration-300" />
                  <div className="p-1 relative">
                    <MessageSquare className="w-5 h-5 text-white/40 group-hover:text-white/60 
                                        group-focus-within:text-white transition-colors absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Subject"
                      className="w-full bg-white/[0.03] pl-10 pr-4 py-3 rounded-lg text-white text-sm
                                placeholder:text-white/40 focus:outline-none focus:ring-1 ring-white/20
                                transition-all duration-300 focus:bg-white/[0.05]"
                      required
                      aria-label="Subject"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="group relative"
                  animate={focusedField === 'message' ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-xl -z-10 
                                group-hover:from-white/[0.08] group-hover:to-white/[0.02] transition-all duration-300" />
                  <div className="p-1">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your message"
                      rows={5}
                      className="w-full bg-white/[0.03] px-4 py-3 rounded-lg text-white text-sm
                                placeholder:text-white/40 focus:outline-none focus:ring-1 ring-white/20
                                transition-all duration-300 focus:bg-white/[0.05] resize-none"
                      required
                      aria-label="Message"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-white/[0.9] via-white/[0.85] to-white/[0.8] backdrop-blur-sm 
                            text-black py-4 px-6 rounded-xl font-medium relative overflow-hidden group
                            disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
                                duration-1000" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <AnimatePresence mode="wait">
                        {status === 'loading' ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            Send message
                            <Send className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </span>
                  </motion.button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -bottom-12 left-0 right-0 text-center text-green-400 text-sm
                                bg-green-400/[0.03] py-2 px-4 rounded-lg backdrop-blur-sm border border-green-400/20"
                        role="alert"
                      >
                        Message sent successfully!
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -bottom-12 left-0 right-0 text-center text-red-400 text-sm
                                bg-red-400/[0.03] py-2 px-4 rounded-lg backdrop-blur-sm border border-red-400/20"
                        role="alert"
                      >
                        Failed to send message. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 