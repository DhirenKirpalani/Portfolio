'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Video } from 'lucide-react';
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
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className={theme === 'dark' ? 'bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent' : 'text-gray-900'}>
                Dhiren Kirpalani
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-10 leading-snug max-w-4xl"
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-700'}>Product Manager building </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                scalable fintech systems
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg md:text-xl mb-14 max-w-2xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Transforming complex payment challenges into <span className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>elegant product solutions</span>. 
              Bridging the gap between technical excellence and user-centric design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                onClick={() => scrollToSection('experience')}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-blue-500/50 flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-700 text-white rounded-lg font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all backdrop-blur-sm"
              >
                Let's Connect
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6"
            >
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Connect with me:</span>
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
                <Video className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:hello@example.com"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition-colors p-2 hover:bg-blue-500/10 rounded-lg ${theme === 'dark' ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-400'}`}
        >
          <motion.div className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`} />
        </motion.div>
      </motion.div>
    </section>
  );
}
