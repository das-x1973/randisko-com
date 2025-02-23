// src/app/(public)/layout.tsx


// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import FrontLayout from '@/components/layout/front-pages'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Date growth',
  description:
    'Join Randisko to find meaningful connections and evolve with those who value personal growth. Experience dating and self-improvement combined, fostering enriching relationships.'
}

const Layout = ({ children }: ChildrenType) => {
  // Vars
  const systemMode = getSystemMode()
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>
        <IntersectionProvider>
          <FrontLayout>{children}</FrontLayout>
        </IntersectionProvider>
      </BlankLayout>
    </Providers>
  )
}

export default Layout


