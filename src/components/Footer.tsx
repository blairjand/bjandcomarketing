import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      url: 'https://www.facebook.com/blairjand', 
      label: 'Facebook',
      hoverColor: 'group-hover:bg-[#1877F2]'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      url: 'https://www.instagram.com/blairjand', 
      label: 'Instagram',
      hoverColor: 'group-hover:bg-gradient-to-tr group-hover:from-[#FFD600] group-hover:via-[#FF0069] group-hover:to-[#9C17FF]'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://www.linkedin.com/in/blairjand', 
      label: 'LinkedIn',
      hoverColor: 'group-hover:bg-[#0A66C2]'
    }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-70" />
      
      {/* Social Links */}
      <div className="relative">
        <div className="flex justify-center gap-4 sm:gap-6 py-8 sm:py-12">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Radiant Black Background */}
              <div className={`absolute inset-0 rounded-full 
                           bg-gradient-to-b from-zinc-800 to-black
                           transition-all duration-300 group-hover:opacity-0`} />
              
              {/* Brand Color Background */}
              <div className={`absolute inset-0 rounded-full opacity-0 
                           ${social.hoverColor}
                           transition-all duration-300 group-hover:opacity-100`} />
              
              {/* Icon Container */}
              <div className="relative p-3 sm:p-4">
                <div className="text-white/80 transition-colors duration-300 
                             group-hover:text-white">
                  {social.icon}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="relative grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-8 px-6 py-8 border-t border-white/10">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="text-sm text-white/60 hover:text-white transition-all duration-300
                     hover:tracking-wide relative group font-light"
          >
            {link.label}
            <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent 
                         via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 
                         transition-transform duration-300" />
          </Link>
        ))}
      </nav>

      {/* Copyright */}
      <div className="relative text-center py-6 sm:py-8 border-t border-white/10">
        <p className="text-xs text-white/60 font-light tracking-wider">
          Copyright ©2025. Designed by{' '}
          <a 
            href="https://www.instagram.com/blairjand" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300 
                     hover:tracking-wider hover:text-shadow-premium"
          >
            BJAND & CO
          </a>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r 
                     from-premium-gray-200/20 to-premium-gray-100/10
                     hover:from-premium-gray-300/30 hover:to-premium-gray-200/20 
                     border border-premium-gray-200/20 hover:border-premium-gray-300/30
                     backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 z-50
                     group sm:bottom-8 sm:right-8"
          >
            <ArrowUp className="w-5 h-5 text-premium-gray-400 group-hover:text-white transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/+96894689774"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 group sm:bottom-8 sm:left-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Premium Container */}
          <div className="p-3 rounded-full bg-black shadow-lg
                       transition-all duration-300 backdrop-blur-xl border border-white/10
                       hover:border-white/20 hover:shadow-premium
                       flex items-center justify-center hover:scale-105">
            {/* WhatsApp Logo */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/60 group-hover:text-white transition-colors">
              <path
                fill="currentColor"
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
              />
            </svg>
          </div>
          
          {/* Tooltip */}
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 pointer-events-none 
                       hidden sm:block">
            <div className="bg-black backdrop-blur-xl px-4 py-2 rounded-lg whitespace-nowrap
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        text-sm text-white/60 border border-white/10
                        shadow-[0_4px_16px_rgba(255,255,255,0.1)]">
              Chat with us on WhatsApp
            </div>
          </div>
        </div>
      </motion.a>
    </footer>
  );
} 