// src/app/(public)/auth/reset-password/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import ResetPasswordV1 from '@/views/auth/ResetPasswordV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Reset Password | Randisko - Mindful Dating',
  description: 'Set a new password for your Randisko account to continue your journey of mindful connections and personal growth.',
  openGraph: {
    title: 'Reset Password | Randisko',
    description: 'Securely reset your Randisko account password and continue making meaningful connections.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reset Password | Randisko',
    description: 'Set a new password to regain access to your mindful dating journey on Randisko.'
  }
}

const ResetPasswordV1Page = () => {
  // Vars
  const mode = getServerMode()

  return <ResetPasswordV1 mode={mode} />
}

export default ResetPasswordV1Page
