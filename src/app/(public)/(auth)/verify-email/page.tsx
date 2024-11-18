// src/app/(public)/(auth)/verify-email/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import VerifyEmailV1 from '@/views/auth/VerifyEmailV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Verify Email | Randisko - Mindful Dating',
  description: 'Verify your email to complete your Randisko registration and start your mindful dating journey.',
  openGraph: {
    title: 'Verify Email | Randisko',
    description: 'Complete your registration by verifying your email and start connecting with like-minded individuals.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify Email | Randisko',
    description: 'Verify your email to complete your Randisko registration and start your mindful dating journey.'
  }
}

const VerifyEmailV1Page = () => {
  // Vars
  const mode = getServerMode()

  return <VerifyEmailV1 mode={mode} />
}

export default VerifyEmailV1Page
