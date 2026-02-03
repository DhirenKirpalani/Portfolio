'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Video, Send } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateMessage = (value: string) => {
    if (!value) {
      setMessageError('Message is required');
      return false;
    }
    if (value.trim().length < 10) {
      setMessageError('Message must be at least 10 characters long');
      return false;
    }
    if (value.length > 5000) {
      setMessageError('Message must not exceed 5000 characters');
      return false;
    }
    setMessageError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Validate inputs
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);
    
    if (!isEmailValid || !isMessageValid) {
      return;
    }
    
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
        setEmailError('');
        setMessageError('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
        setTimeout(() => {
          setStatus('idle');
          setErrorMessage('');
        }, 5000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhirenkirpalani2308@gmail.com',
      href: 'mailto:dhirenkirpalani2308@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dhirenkirpalani',
      href: 'https://linkedin.com/in/dhirenkirpalani',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/dhirenkirpalani',
      href: 'https://github.com/dhirenkirpalani',
    },
    {
      icon: Video,
      label: 'TikTok',
      value: '@your.product.guy',
      href: 'https://www.tiktok.com/@your.product.guy',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent' : 'bg-gradient-to-b from-blue-100/20 via-purple-100/20 to-transparent'}`} />
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-200/30'}`} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className={theme === 'dark' ? 'bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent' : 'text-gray-900'}>
              Let's Build Something
            </span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 sm:mb-10 mx-auto rounded-full" 
          />
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto mb-12 sm:mb-16 md:mb-20"
          >
            <div className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) validateEmail(e.target.value);
                  }}
                  onBlur={(e) => validateEmail(e.target.value)}
                  required
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                    emailError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'focus:ring-blue-500'
                  } ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="your.email@example.com"
                />
                {emailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500 flex items-center gap-1"
                  >
                    <span>⚠️</span> {emailError}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (messageError) validateMessage(e.target.value);
                  }}
                  onBlur={(e) => validateMessage(e.target.value)}
                  required
                  rows={5}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none ${
                    messageError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'focus:ring-blue-500'
                  } ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Your message here... (minimum 10 characters)"
                />
                <div className="flex justify-between items-start mt-2">
                  {messageError ? (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <span>⚠️</span> {messageError}
                    </motion.p>
                  ) : (
                    <div />
                  )}
                  <p className={`text-xs ${message.length > 5000 ? 'text-red-500' : theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                    {message.length}/5000
                  </p>
                </div>
              </div>

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-red-500/10 border-red-500/50 text-red-400'
                      : 'bg-red-50 border-red-200 text-red-600'
                  }`}
                >
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span>❌</span> {errorMessage}
                  </p>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-green-500/10 border-green-500/50 text-green-400'
                      : 'bg-green-50 border-green-200 text-green-600'
                  }`}
                >
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span>✅</span> Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`flex items-center gap-3 sm:gap-4 md:gap-5 p-5 sm:p-6 md:p-8 rounded-lg border transition-all group relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'dark' ? 'from-blue-500/10 to-purple-500/10' : 'from-blue-200/20 to-purple-200/20'}`} />
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 relative z-10 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
                  <link.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${theme === 'dark' ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-700'}`} />
                </div>
                <div className="text-left relative z-10">
                  <div className={`text-xs sm:text-sm mb-1 sm:mb-2 font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>{link.label}</div>
                  <div className={`font-semibold text-sm sm:text-base md:text-lg group-hover:text-blue-400 transition-colors break-all ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-12 border-t border-white/10 mt-8"
          >
            <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Dhiren Kirpalani. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
