// src/app/(private)/onboarding/page.tsx

// Next Imports
import type { Metadata } from 'next'

// MUI Imports
import Typography from '@mui/material/Typography'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Onboarding | Randisko - Mindful Dating',
  description: 'Get started with Randisko and set up your profile to find meaningful connections.',
  openGraph: {
    title: 'Onboarding | Randisko',
    description: 'Complete your onboarding to connect with mindful individuals on Randisko.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onboarding | Randisko',
    description: 'Get started with Randisko and set up your profile to find meaningful connections.'
  }
}

const OnBoarding = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Randisko!
      </Typography>
      <Typography variant="body1">
        Let’s set up your profile and get you ready to meet mindful connections.
      </Typography>
    </div>
  )
}

export default OnBoarding
