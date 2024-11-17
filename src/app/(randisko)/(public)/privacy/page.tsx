// src/app/(randisko)/(public)/privacy/page.tsx

import type { Metadata } from 'next'
import PrivacyView from '@/views/randisko/front-pages/legal/PrivacyView'
import { getServerMode } from '@core/utils/serverHelpers'
import appConfig from '@/configs/appConfig'

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
  const { region, language } = appConfig // Use global config for region and language

  return <PrivacyView mode={mode} region={region} language={language} />
}

export default PrivacyPage
