// src/app/page.tsx
import type { Metadata } from 'next'

import LandingPageWrapper from '@views/front-pages/landing-page'
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata: Metadata = {
  title: 'Randisko - Mindful Dating',
  description: 'Find meaningful connections through mindful dating and personal growth'
}

const LandingPage = () => {
  // Get mode from server
  const mode = getServerMode()

  return <LandingPageWrapper mode={mode} />
}

export default LandingPage
