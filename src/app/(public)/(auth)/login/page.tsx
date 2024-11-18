// src/app/(public)/(auth)/login/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import LoginV1 from '@/views/auth/LoginV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Login | Randisko - Mindful Dating',
  description: 'Login to Randisko and connect with conscious individuals who value personal growth and meaningful relationships.',
  openGraph: {
    title: 'Login | Randisko',
    description: 'Access your Randisko account and start making meaningful connections.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login | Randisko',
    description: 'Login to Randisko and continue your journey to find mindful, meaningful connections.'
  }
}

const LoginV1Page = () => {
  // Vars
  const mode = getServerMode()

  return <LoginV1 mode={mode} />
}

export default LoginV1Page
