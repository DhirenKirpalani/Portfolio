'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function useThemeClasses() {
  const { theme } = useTheme();
  
  return {
    // Text colors
    text: {
      primary: theme === 'dark' ? 'text-white' : 'text-gray-900',
      secondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
      tertiary: theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
      muted: theme === 'dark' ? 'text-gray-500' : 'text-gray-400',
    },
    // Background colors
    bg: {
      primary: theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white',
      secondary: theme === 'dark' ? 'bg-[#050505]' : 'bg-gray-50',
      card: theme === 'dark' ? 'bg-white/5' : 'bg-gray-100/50',
      cardHover: theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200/50',
    },
    // Border colors
    border: {
      default: theme === 'dark' ? 'border-white/10' : 'border-gray-200',
      hover: theme === 'dark' ? 'hover:border-blue-500/50' : 'hover:border-blue-400',
    },
    // Gradient backgrounds
    gradient: {
      subtle: theme === 'dark' 
        ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20'
        : 'bg-gradient-to-br from-blue-100/50 via-purple-100/30 to-pink-100/50',
      card: theme === 'dark'
        ? 'bg-gradient-to-br from-white/5 to-white/10'
        : 'bg-gradient-to-br from-gray-50 to-gray-100',
    },
    theme
  };
}
