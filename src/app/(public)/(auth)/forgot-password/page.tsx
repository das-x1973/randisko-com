// src/app/(public)/(auth)/forgot-password/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import ForgotPasswordV1 from '@/views/auth/ForgotPasswordV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Forgot Password | Randisko - Mindful Dating',
  description: 'Reset your password to regain access to your Randisko account and continue your mindful dating journey.',
  openGraph: {
    title: 'Forgot Password | Randisko',
    description: 'Reset your password and regain access to your mindful dating profile.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgot Password | Randisko',
    description: 'Reset your password to regain access to your mindful dating profile on Randisko.'
  }
}

const ForgotPasswordV1Page = () => {
  // Vars
  const mode = getServerMode()

  return <ForgotPasswordV1 mode={mode} />
}

export default ForgotPasswordV1Page
