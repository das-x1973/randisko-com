// src/components/theme/mergedTheme.ts

import { Inter } from 'next/font/google'

import { deepmerge } from '@mui/utils'
import type { Theme, ThemeOptions } from '@mui/material/styles'

import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode } from '@core/types'
import coreTheme from '@core/theme'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const mergedTheme = (settings: Settings, mode: SystemMode, direction: Theme['direction']) => {
  const userTheme: ThemeOptions = {
    typography: {
      fontFamily: inter.style.fontFamily,
      h1: {
        fontWeight: 300,
        fontSize: '3.5rem',
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 300,
        fontSize: '2.25rem',
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: 1.4,
      },
    },
    shape: {
      borderRadius: 8,
      customBorderRadius: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
      },
    },
    customShadows: {
      xs: '0px 2px 4px rgba(0, 0, 0, 0.05)',
      sm: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      md: '0px 6px 12px rgba(0, 0, 0, 0.15)',
      lg: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      xl: '0px 12px 24px rgba(0, 0, 0, 0.25)',
    },
    palette: {
      primary: {
        light: '#A4F79C', // Accent color light
        main: '#106308',  // Accent color main
        dark: '#0E5207',  // Accent color dark
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#A2E49A',
        main: '#22651B',
        dark: '#165A14',
        contrastText: '#FFFFFF',
      },
      text: {
        primary: mode === 'light' ? '#040316' : '#EAE9FC',
        secondary: mode === 'light' ? '#5A5A5A' : '#B8B8D4', // Improved contrast for light mode
      },
      background: {
        default: mode === 'light' ? '#FCFCFC' : '#030303',
        paper: mode === 'light' ? '#FFFFFF' : '#040404',
      },
      customColors: {
        bodyBg: mode === 'light' ? '#F8F8F1' : '#030303',
        chatBg: mode === 'light' ? '#F4F5FA' : '#040404',
      },
    },
  };

  return deepmerge(coreTheme(settings, mode, direction), userTheme);
};

export default mergedTheme;
