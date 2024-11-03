// src/app/(randisko)/(public)/terms/page.tsx
import type { Metadata } from 'next'

import TermsView from '@/views/pages/legal/TermsView'
import { getServerMode } from '@core/utils/serverHelpers'

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
  return <TermsView mode={mode} />
}

export default TermsPage
