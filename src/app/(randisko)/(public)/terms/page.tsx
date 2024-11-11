// src/app/(randisko)/(public)/terms/page.tsx

import type { Metadata } from 'next'

import TermsView from '@/views/randisko/legal/TermsView'
import { getServerMode } from '@core/utils/serverHelpers'
import appConfig from '@/configs/appConfig' // Import global config

export const metadata: Metadata = {
  title: 'Terms of Service | Randisko - Mindful Dating',
  description: 'Read our terms of service and user agreement for using Randisko mindful dating platform.',
  openGraph: {
    title: 'Terms of Service | Randisko',
    description: 'Terms and conditions for using our mindful dating platform',
    type: 'website'
  }
}

const TermsPage = () => {
  const mode = getServerMode()
  const { region, language } = appConfig // Use global config for region and language

  return <TermsView mode={mode} region={region} language={language} />
}

export default TermsPage
