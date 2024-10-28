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
        lineHeight: 1.2
      },
      h2: {
        fontWeight: 300,
        fontSize: '2.25rem',
        lineHeight: 1.3
      },
      h3: {
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: 1.4
      }
    },
    shape: {
      borderRadius: 8,
      customBorderRadius: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20
      }
    },
    customShadows: {
      xs: '0px 2px 4px rgba(45, 52, 64, 0.08)',
      sm: '0px 4px 8px rgba(45, 52, 64, 0.12)',
      md: '0px 6px 12px rgba(45, 52, 64, 0.15)',
      lg: '0px 8px 16px rgba(45, 52, 64, 0.18)',
      xl: '0px 12px 24px rgba(45, 52, 64, 0.22)'
    },
    mainColorChannels: {
      light: '13 148 136',  // RGB values for primary.main
      dark: '45 212 191',   // RGB values for a lighter variant in dark mode
      lightShadow: '13 148 136',
      darkShadow: '45 212 191'
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            textTransform: 'none'
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none'
            }
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '12px'
          }
        }
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: '1200px'
          }
        }
      }
    },
    palette: {
      primary: {
        light: '#4FD1C5',
        main: '#0D9488',
        dark: '#0F766E',
        contrastText: '#FFFFFF',
        lighterOpacity: 'rgba(13, 148, 136, 0.1)',
        lightOpacity: 'rgba(13, 148, 136, 0.3)',
        mainOpacity: 'rgba(13, 148, 136, 0.5)',
        darkOpacity: 'rgba(13, 148, 136, 0.7)',
        darkerOpacity: 'rgba(13, 148, 136, 0.9)'
      },
      secondary: {
        light: '#C4B5FD',
        main: '#A78BFA',
        dark: '#7C3AED',
        contrastText: '#FFFFFF',
        lighterOpacity: 'rgba(167, 139, 250, 0.1)',
        lightOpacity: 'rgba(167, 139, 250, 0.3)',
        mainOpacity: 'rgba(167, 139, 250, 0.5)',
        darkOpacity: 'rgba(167, 139, 250, 0.7)',
        darkerOpacity: 'rgba(167, 139, 250, 0.9)'
      },
      background: {
        default: '#FAFAF9',
        paper: '#FFFFFF'
      },
      customColors: {
        bodyBg: '#F8F8F1',
        chatBg: '#F4F5FA',
        greyLightBg: '#FAFAFA',
        inputBorder: '#E5E7EB',
        tableHeaderBg: '#F9FAFB',
        tooltipText: '#FFFFFF',
        trackBg: '#F4F5FA'
      }
    }
  }

  return deepmerge(coreTheme(settings, mode, direction), userTheme)
}

export default mergedTheme
