// src/app/(public)/(auth)/two-steps/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import TwoStepsV1 from '@/views/auth/TwoStepsV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Two-Step Verification | Randisko - Mindful Dating',
  description: 'Enable two-step verification for enhanced security of your Randisko account.',
  openGraph: {
    title: 'Two-Step Verification | Randisko',
    description: 'Secure your Randisko account with two-step verification to ensure the safety of your mindful dating experience.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two-Step Verification | Randisko',
    description: 'Protect your Randisko account by enabling two-step verification for added security.'
  }
}

const TwoStepsV1Page = () => {
  // Vars
  const mode = getServerMode()

  return <TwoStepsV1 mode={mode} />
}

export default TwoStepsV1Page
