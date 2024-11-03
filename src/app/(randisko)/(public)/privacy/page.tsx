// src/app/(randisko)/(public)/privacy/page.tsx
import type { Metadata } from 'next'

import PrivacyView from '@/views/pages/legal/PrivacyView'
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata: Metadata = {
  title: 'Privacy Policy | Randisko - Mindful Dating',
  description:
    'Learn how Randisko protects and handles your personal information in accordance with UK GDPR regulations.',
  openGraph: {
    title: 'Privacy Policy | Randisko',
    description: 'Our commitment to protecting your privacy and personal data',
    type: 'website'
  }
}

const PrivacyPage = () => {
  const mode = getServerMode()
  return <PrivacyView mode={mode} />
}

export default PrivacyPage
