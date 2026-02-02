'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const experiences = [
    {
      company: 'ShopeePay',
      role: 'Product Manager',
      period: '2024 - Present',
      location: 'Jakarta, Indonesia',
      highlights: [
        'Leading product development for payment solutions',
        'Driving product strategy and roadmap for fintech features',
      ],
    },
    {
      company: 'Hacktiv8 Bootcamp',
      role: 'Software Development Bootcamp',
      period: '2024',
      location: 'Jakarta, Indonesia',
      highlights: [
        'Completed intensive full-stack web and mobile development program',
        'Studied software engineering principles and best practices',
      ],
    },
    {
      company: 'Aspire Financial Technologies',
      role: 'Product Operations Analyst',
      period: '2021 - 2023',
      location: 'Jakarta, Indonesia',
      highlights: [
        'Created automation tools to improve the efficiency of the operations team',
        'Worked on data analysis and reporting to help the product team make data-driven decisions',
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden" style={{ background: 'var(--background-secondary)' }}>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5' : 'bg-gradient-to-b from-blue-100/20 via-transparent to-purple-100/20'}`} />
      <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-200/30'}`} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className={theme === 'dark' ? 'bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent' : 'text-gray-900'}>
              Experience
            </span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-20 rounded-full" 
          />

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative pl-8 md:pl-24"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute left-0 md:left-8 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-[#050505] transform -translate-x-[7.5px] shadow-lg shadow-blue-500/50" 
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`p-8 md:p-10 rounded-lg border transition-all group relative overflow-hidden ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20'
                        : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200'
                    }`}
                  >
                    <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-200/30'}`} />
                    <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-500 transition-colors leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {exp.role}
                        </h3>
                        <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Briefcase className="w-5 h-5" />
                          <span className="font-medium text-lg">{exp.company}</span>
                        </div>
                      </div>
                      <span className="text-sm text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2.5 rounded-full shadow-lg">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-4 text-base md:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          <span className="text-blue-500 mt-1.5 text-xl">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
