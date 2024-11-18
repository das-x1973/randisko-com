// src/app/(public)/terms/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import TermsView from '@/views/front-pages/legal/TermsView'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Terms of Service | Randisko - Mindful Dating',
  description: 'Read our terms of service and user agreement for using Randisko mindful dating platform.',
  openGraph: {
    title: 'Terms of Service | Randisko',
    description: 'Terms and conditions for using our mindful dating platform',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Randisko',
    description: 'Understand the terms and conditions of using our mindful dating community. Stay informed and date mindfully.'
  }
}

const TermsPage = () => {
  return <TermsView />
}

export default TermsPage
