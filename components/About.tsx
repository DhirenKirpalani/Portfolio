'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const highlights = [
    'Payments & Fintech',
    'Platform Products',
    'User-Centric Design',
    'Cross-Functional Leadership',
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-blue-500/5 to-transparent' : 'bg-gradient-to-b from-transparent via-blue-100/30 to-transparent'}`} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className={theme === 'dark' ? 'bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent' : 'text-gray-900'}>
              About Me
            </span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-10 sm:mb-12 md:mb-16 rounded-full" 
          />

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <div className="space-y-8">
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a Product Manager with a strong technical foundation, specializing in building 
                scalable payment systems and fintech platforms. My approach combines deep systems 
                thinking with a relentless focus on user needs.
              </p>
              
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Working at the intersection of product, engineering, and design, I translate complex 
                technical challenges into elegant solutions that drive real business impact. My background 
                enables me to speak the language of engineers while keeping the end-user experience at 
                the forefront.
              </p>

              <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Beyond product work, I create educational content to demystify tech and product concepts, 
                helping others build their understanding of how great products are made.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Focus Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border transition-all group ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20'
                        : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-200'
                    }`}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className={`font-medium transition-colors ${theme === 'dark' ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className={`mt-8 p-6 rounded-lg border shadow-lg relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 shadow-blue-500/10'
                    : 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-300 shadow-blue-200/50'
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-300/30'}`} />
                <p className={`italic text-lg relative z-10 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  💡 "Building products that scale requires more than just technical expertise—it demands 
                  empathy, clear communication, and the ability to see the bigger picture."
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
