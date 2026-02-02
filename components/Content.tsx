'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, TrendingUp, Users } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Content() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const contentStats = [
    {
      icon: Users,
      value: '10K+',
      label: 'Followers',
    },
    {
      icon: Video,
      value: '100+',
      label: 'Videos',
    },
    {
      icon: TrendingUp,
      value: '1M+',
      label: 'Views',
    },
  ];

  const contentThemes = [
    {
      title: 'Product Management Fundamentals',
      description: 'Breaking down complex PM concepts into digestible, actionable insights',
    },
    {
      title: 'Fintech & Payments',
      description: 'Demystifying how payment systems work and the tech behind fintech products',
    },
    {
      title: 'Tech Career Growth',
      description: 'Real-world advice on navigating tech careers and building product skills',
    },
    {
      title: 'Systems Thinking',
      description: 'Teaching how to think about scale, architecture, and product decisions',
    },
  ];

  return (
    <section id="content" className="py-32 relative overflow-hidden" style={{ background: 'var(--background-secondary)' }}>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5' : 'bg-gradient-to-b from-purple-100/20 via-transparent to-blue-100/20'}`} />
      <div className={`absolute top-1/3 left-1/2 w-96 h-96 rounded-full blur-3xl ${theme === 'dark' ? 'bg-pink-500/10' : 'bg-pink-200/30'}`} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className={theme === 'dark' ? 'bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent' : 'text-gray-900'}>
              Content & Education
            </span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-10 rounded-full" 
          />
          
          <p className={`text-lg md:text-xl mb-20 max-w-3xl leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Creating educational content to help others understand product management, 
            fintech, and tech careers through clear explanations and real-world examples.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contentStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-10 rounded-lg border text-center hover:scale-105 transition-transform shadow-lg relative overflow-hidden group ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-purple-500/30 shadow-purple-500/20'
                    : 'bg-gradient-to-br from-blue-100 to-purple-100 border-purple-300 shadow-purple-200'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'from-pink-500/10 to-transparent' : 'from-pink-200/30 to-transparent'}`} />
                <stat.icon className={`w-10 h-10 mx-auto mb-6 relative z-10 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                <div className={`text-4xl md:text-5xl font-bold mb-3 relative z-10 ${theme === 'dark' ? 'bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent' : 'text-gray-900'}`}>{stat.value}</div>
                <div className={`text-base md:text-lg font-medium relative z-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentThemes.map((contentTheme, index) => (
              <motion.div
                key={contentTheme.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-8 rounded-lg border transition-all group relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-200'
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-200/30'}`} />
                <h3 className={`text-xl md:text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors leading-tight relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {contentTheme.title}
                </h3>
                <p className={`text-base md:text-lg leading-relaxed transition-colors relative z-10 ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}`}>{contentTheme.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://www.tiktok.com/@your.product.guy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/50"
            >
              <Video className="w-5 h-5" />
              Watch on TikTok
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
