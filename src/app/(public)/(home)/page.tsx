// src/app/(public)/(home)/page.tsx

import type { Metadata } from 'next'

import LandingPageWrapper from '@/views/front-pages/landing-page'
import { getServerMode } from '@core/utils/serverHelpers'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Randisko - Mindful Dating',
  description: 'Find meaningful connections through mindful dating and personal growth',
  openGraph: {
    title: 'Randisko - Mindful Dating',
    description: 'Join Randisko to find meaningful relationships rooted in mindfulness and self-improvement.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Randisko - Mindful Dating',
    description: 'Find meaningful connections through mindful dating and personal growth on Randisko.'
  }
}

const LandingPage = () => {
  // Get mode from server
  const mode = getServerMode()

  return <LandingPageWrapper mode={mode} />
}

export default LandingPage
