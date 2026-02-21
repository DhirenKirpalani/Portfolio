'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const skillCategories = [
    {
      category: 'Product Management',
      skills: ['Product Strategy', 'Roadmap Planning', 'User Research', 'A/B Testing', 'Analytics', 'Stakeholder Management'],
    },
    {
      category: 'Payments & Fintech',
      skills: ['Payment Processing', 'Multi-Currency', 'Fraud Prevention', 'Compliance', 'API Integration', 'Webhooks'],
    },
    {
      category: 'Technical Knowledge',
      skills: ['REST APIs', 'System Design', 'SQL', 'Data Analysis', 'Microservices', 'Cloud Platforms'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Jira', 'Figma', 'Mixpanel', 'Amplitude', 'Postman', 'GitHub'],
    },
    {
      category: 'Full-Stack Development',
      skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native', 'Redux', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Node.js', 'Express.js', 'GraphQL', 'Apollo', 'REST APIs', 'Socket.io', 'MongoDB', 'PostgreSQL', 'MySQL', 'Sequelize', 'AWS', 'Git', 'Jest', 'TensorFlow.js'],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-purple-500/5 to-transparent' : 'bg-gradient-to-b from-transparent via-purple-100/30 to-transparent'}`} />
      <div className={`absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-200/30'}`} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className={theme === 'dark' ? 'bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent' : 'text-gray-900'}>
              Skills & Expertise
            </span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-10 sm:mb-16 md:mb-20 rounded-full" 
          />

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className={`p-6 sm:p-8 md:p-10 rounded-lg border transition-all group relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200'
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-200/30'}`} />
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 leading-tight relative z-10 group-hover:text-purple-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{category.category}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium border transition-all cursor-default relative z-10 ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border-blue-500/20 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-purple-500/40 hover:text-white hover:shadow-lg hover:shadow-blue-500/30'
                          : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300 hover:from-blue-200 hover:to-purple-200 hover:border-purple-400 hover:text-purple-800 hover:shadow-lg hover:shadow-blue-300'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
