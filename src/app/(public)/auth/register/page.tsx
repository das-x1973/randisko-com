// src/app/(public)/auth/register/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import RegisterV1 from '@/views/auth/RegisterV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Register | Randisko - Mindful Dating',
  description: 'Create your Randisko account and join a community of individuals seeking meaningful, mindful connections.',
  openGraph: {
    title: 'Register | Randisko',
    description: 'Sign up for Randisko and begin your journey towards mindful dating and personal growth.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register | Randisko',
    description: 'Create your Randisko account and start connecting with like-minded individuals.'
  }
}

const RegisterV1Page = () => {
  // Vars
  const mode = getServerMode()

  return <RegisterV1 mode={mode} />
}

export default RegisterV1Page
