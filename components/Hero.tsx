'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20' : 'bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-pink-100/40'} animate-gradient`} />
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-72 h-72 ${theme === 'dark' ? 'bg-blue-500/30' : 'bg-blue-300/40'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-300/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm tracking-wide uppercase rounded-full">
                👋 Welcome
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight"
            >
              <span className={theme === 'dark' ? 'bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent' : 'text-gray-900'}>
                Dhiren Kirpalani
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 leading-snug max-w-4xl"
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-700'}>Product Manager and </span>
              <motion.span 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Full-Stack Developer
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-base sm:text-lg md:text-xl mb-10 sm:mb-14 max-w-2xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <motion.span 
                className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
                whileHover={{ scale: 1.05 }}
              >
                Transforming ideas into scalable digital products.
              </motion.span>{' '}
              Bridging <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">product strategy</span>, <span className="font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">system architecture</span>, and <span className="font-semibold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">user-centric design</span>.
              <br />
              From concept to production deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12"
            >
              <motion.button
                onClick={() => scrollToSection('experience')}
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
                whileTap={{ scale: 0.95 }}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-lg font-semibold transition-all backdrop-blur-sm relative overflow-hidden group ${
                  theme === 'dark' 
                    ? 'border-gray-700 text-white hover:border-blue-500' 
                    : 'border-gray-300 text-gray-900 hover:border-blue-500'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Let's Connect</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Connect with me:</span>
              <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition-colors p-2 hover:bg-blue-500/10 rounded-lg ${theme === 'dark' ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition-colors p-2 hover:bg-blue-500/10 rounded-lg ${theme === 'dark' ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@your.product.guy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition-colors p-2 hover:bg-blue-500/10 rounded-lg ${theme === 'dark' ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <FaTiktok className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:hello@example.com"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition-colors p-2 hover:bg-blue-500/10 rounded-lg ${theme === 'dark' ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
