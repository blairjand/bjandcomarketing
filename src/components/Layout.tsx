import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLoading(true); // Show loading on route change
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Show loading for 1 second on route change

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      url: 'https://www.instagram.com/blairjand/', 
      label: 'Instagram',
      gradient: 'hover:bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600',
      iconColor: 'group-hover:text-white'
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      url: 'https://www.facebook.com/blairjand', 
      label: 'Facebook',
      gradient: 'hover:bg-gradient-to-b from-blue-500 to-blue-600',
      iconColor: 'group-hover:text-white'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://www.linkedin.com/in/blairjand/', 
      label: 'LinkedIn',
      gradient: 'hover:bg-gradient-to-b from-blue-600 to-blue-700',
      iconColor: 'group-hover:text-white'
    }
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-black text-white relative">
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 gpu ${
            isScrolled ? 'backdrop-blur-xl bg-black/50 border-b border-white/5' : ''
          }`}
        >
          <div className="container-responsive">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="relative"
                >
                  <span className="text-2xl font-light tracking-[0.2em] text-gradient relative">
                    BJAND & CO
                    <div className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </span>
                </motion.div>
              </Link>

              {/* Desktop Navigation - Hidden on Mobile */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative py-2 text-sm transition-colors duration-300 ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-white/30"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Hamburger Menu Button */}
              <motion.button
                className="relative p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300 group lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 
                             group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed right-0 top-0 h-[100dvh] w-[85%] sm:w-[70%] md:w-[60%] 
                         bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden
                         overflow-y-auto overscroll-y-contain pb-safe-bottom"
              >
                <div className="flex flex-col min-h-[100dvh] p-6">
                  {/* Close Button */}
                  <motion.button
                    className="self-end p-3 rounded-lg hover:bg-white/5 transition-colors
                             min-h-touch-target min-w-touch-target touch-feedback"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6 text-white/80" />
                  </motion.button>

                  {/* Premium Tagline Section */}
                  <motion.div 
                    className="mt-8 mb-12 space-y-6 sm:space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    {[
                      "FUELLED BY PASSION",
                      "DRIVEN BY INNOVATION",
                      "DESIGNED FOR SUCCESS"
                    ].map((text, index) => (
                      <motion.div
                        key={text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.4 + (index * 0.2),
                          duration: 0.6,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                        className="relative overflow-hidden px-2"
                      >
                        <motion.div
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{
                            delay: 0.6 + (index * 0.2),
                            duration: 0.8,
                            ease: [0.23, 1, 0.32, 1]
                          }}
                        >
                          <span className="block text-base sm:text-lg md:text-xl font-light tracking-widest
                                       text-transparent bg-clip-text bg-gradient-to-r 
                                       from-white via-white/90 to-white/70">
                            {text}
                          </span>
                          <div className="absolute bottom-0 left-0 w-full h-[1px] 
                                      bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                      transform scale-x-0 animate-expandLine" 
                               style={{ animationDelay: `${0.8 + (index * 0.2)}s` }} />
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Navigation Links */}
                  <nav className="space-y-6 sm:space-y-8">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group relative block py-3 px-2 touch-feedback"
                        >
                          <span className={`relative z-10 text-lg sm:text-xl font-light tracking-wide
                                       transition-colors duration-300 ${
                            location.pathname === item.path
                              ? 'text-white'
                              : 'text-white/60 group-hover:text-white'
                          }`}>
                            {item.label}
                          </span>
                          <div className="absolute bottom-0 left-0 w-full h-[1px] 
                                      bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                      scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.8 }}
                    className="mt-auto pt-8 border-t border-white/10"
                  >
                    <div className="flex items-center justify-center gap-6">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-3 rounded-full bg-white/5 backdrop-blur-sm 
                                   transition-all duration-500 hover:bg-white/10
                                   hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (navItems.length * 0.1) + 1 + (index * 0.1) }}
                        >
                          <div className="text-white/50 transition-colors duration-300 group-hover:text-white">
                            {social.icon}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="relative">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 
                       hover:from-white/20 hover:to-white/10 border border-white/10 hover:border-white/20 
                       backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 z-50
                       group sm:bottom-8 sm:right-8"
            >
              <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 