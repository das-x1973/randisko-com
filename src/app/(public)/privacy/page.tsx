// src/app/(public)/privacy/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import PrivacyView from '@/views/front-pages/legal/PrivacyView'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Privacy Policy | Randisko - Mindful Dating',
  description:
    'Learn how Randisko protects and handles your personal information in accordance with UK GDPR regulations.',
  openGraph: {
    title: 'Privacy Policy | Randisko',
    description: 'Our commitment to protecting your privacy and personal data',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Randisko',
    description: 'Discover how Randisko takes care of your personal information while adhering to UK GDPR standards. Your privacy matters to us.'
  }
}

const PrivacyPage = () => {
  return <PrivacyView />
}

export default PrivacyPage
